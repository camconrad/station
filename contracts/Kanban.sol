// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

███████╗████████╗ █████╗ ████████╗██╗ ██████╗ ███╗   ██╗
██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║
███████╗   ██║   ███████║   ██║   ██║██║   ██║██╔██╗ ██║
╚════██║   ██║   ██╔══██║   ██║   ██║██║   ██║██║╚██╗██║
███████║   ██║   ██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║
╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
}

contract Kanban {
    address public owner;
    address public USDC; // USDC token address

    struct Task {
        string description;
        address assignee;
        uint256 reward;
        bool isCompleted;
    }

    mapping(uint256 => Task) public tasks;
    uint256 public taskCount;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor(address _usdc) {
        owner = msg.sender;
        USDC = _usdc;
    }

    function createTask(string memory description, address assignee, uint256 reward) public onlyOwner {
        tasks[taskCount] = Task(description, assignee, reward, false);
        taskCount++;
    }

    function completeTask(uint256 taskId) public {
        Task storage task = tasks[taskId];
        require(!task.isCompleted, "Task already completed");
        require(msg.sender == task.assignee, "Not the assignee");

        task.isCompleted = true;
        IERC20(USDC).transfer(task.assignee, task.reward);
    }
}
