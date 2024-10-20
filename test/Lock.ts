import { ethers } from "hardhat";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";

async function increaseTime(seconds: number) {
  await ethers.provider.send("evm_increaseTime", [seconds]);
  await ethers.provider.send("evm_mine");
}

async function deployOneYearLockFixture() {
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const ONE_GWEI = 1_000_000_000;

  const lockedAmount = ONE_GWEI;
  const latestBlock = await ethers.provider.getBlock("latest");
  const unlockTime = latestBlock.timestamp + ONE_YEAR_IN_SECS;

  const [owner, otherAccount] = await ethers.getSigners();

  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  return { lock, unlockTime, lockedAmount, owner, otherAccount };
}

describe("Lock", function () {
  beforeEach(async function () {
    this.fixture = await deployOneYearLockFixture();
  });

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { lock, unlockTime } = this.fixture;

      expect(await lock.unlockTime()).to.equal(unlockTime);
    });

    it("Should set the right owner", async function () {
      const { lock, owner } = this.fixture;

      expect(await lock.owner()).to.equal(owner.address);
    });

    it("Should receive and store the funds to lock", async function () {
      const { lock, lockedAmount } = this.fixture;

      expect(await ethers.provider.getBalance(lock.address)).to.equal(lockedAmount);
    });

    it("Should fail if the unlockTime is not in the future", async function () {
      const latestTime = (await ethers.provider.getBlock("latest")).timestamp;
      const Lock = await ethers.getContractFactory("Lock");
      await expect(Lock.deploy(latestTime, { value: 1 })).to.be.revertedWith(
        "Unlock time should be in the future"
      );
    });
  });

  describe("Withdrawals", function () {
    describe("Validations", function () {
      it("Should revert with the right error if called too soon", async function () {
        const { lock } = this.fixture;

        await expect(lock.withdraw()).to.be.revertedWith("You can't withdraw yet");
      });

      it("Should revert with the right error if called from another account", async function () {
        const { lock, unlockTime, otherAccount } = this.fixture;

        await increaseTime(unlockTime - (await ethers.provider.getBlock("latest")).timestamp);

        await expect(lock.connect(otherAccount).withdraw()).to.be.revertedWith(
          "You aren't the owner"
        );
      });

      it("Shouldn't fail if the unlockTime has arrived and the owner calls it", async function () {
        const { lock, unlockTime } = this.fixture;

        await increaseTime(unlockTime - (await ethers.provider.getBlock("latest")).timestamp);

        await expect(lock.withdraw()).not.to.be.reverted;
      });
    });

    describe("Events", function () {
      it("Should emit an event on withdrawals", async function () {
        const { lock, unlockTime, lockedAmount } = this.fixture;

        await increaseTime(unlockTime - (await ethers.provider.getBlock("latest")).timestamp);

        await expect(lock.withdraw())
          .to.emit(lock, "Withdrawal")
          .withArgs(lockedAmount, anyValue);
      });
    });

    describe("Transfers", function () {
      it("Should transfer the funds to the owner", async function () {
        const { lock, unlockTime, lockedAmount, owner } = this.fixture;

        await increaseTime(unlockTime - (await ethers.provider.getBlock("latest")).timestamp);

        await expect(lock.withdraw()).to.changeEtherBalances(
          [owner, lock],
          [lockedAmount, -lockedAmount]
        );
      });
    });
  });
});
