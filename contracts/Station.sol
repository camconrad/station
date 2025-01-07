// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title Station Task Management with USDC Compensation
/// @notice This contract manages task creation, status updates, and USDC reward distribution.
/// @dev The contract uses the IERC20 interface for USDC transfers, accounting for 6 decimal places.
interface IERC20 {
    /// @notice Transfers tokens to a specified address
    /// @param recipient The address to which tokens will be transferred
    /// @param amount The amount of tokens to transfer
    /// @return Returns true if the transfer was successful
    function transfer(address recipient, uint256 amount) external returns (bool);

    /// @notice Returns the token balance of a specific account
    /// @param account The address of the account
    /// @return The token balance of the account
    function balanceOf(address account) external view returns (uint256);
}

/// @title Station Contract
/// @notice This contract facilitates task management and automated USDC payments upon task completion
contract Station {
    /// @notice The address of the contract owner
    address public owner;
    /// @notice The address of the USDC token used for reward distribution
    address public USDC;

    /// @notice Enum to represent task statuses
    /// @dev TaskStatus is used to track the state of a task
    enum TaskStatus { Todo, Doing, Done }

    /// @notice Struct to define a task
    /// @dev Tasks are stored in a mapping with a unique ID
    struct Task {
        string description; // The description of the task
        address assignee; // The address of the user assigned to the task
        uint256 reward; // The reward in USDC (with 6 decimals) for completing the task
        TaskStatus status; // The current status of the task
        address creator; // The address of the user who created the task
    }

    /// @notice Mapping to store tasks with unique task IDs
    mapping(uint256 => Task) public tasks;
    /// @notice Counter to keep track of the total number of tasks created
    uint256 public taskCount;

    /// @notice Event emitted when a new task is created
    /// @param taskId The unique ID of the created task
    /// @param description The description of the task
    /// @param assignee The address of the user assigned to the task
    /// @param reward The reward amount in USDC (6 decimals)
    event TaskCreated(uint256 taskId, string description, address assignee, uint256 reward);

    /// @notice Event emitted when a task is started
    /// @param taskId The unique ID of the started task
    event TaskStarted(uint256 taskId);

    /// @notice Event emitted when a task is completed
    /// @param taskId The unique ID of the completed task
    /// @param assignee The address of the user assigned to the task
    /// @param reward The reward amount in USDC (6 decimals) distributed to the assignee
    event TaskCompleted(uint256 taskId, address assignee, uint256 reward);

    /// @notice Event emitted when ownership of the contract is transferred
    /// @param previousOwner The address of the previous owner
    /// @param newOwner The address of the new owner
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /// @notice Modifier to restrict access to only the contract owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    /// @notice Modifier to restrict access to only the task assignee
    /// @param taskId The ID of the task
    modifier onlyAssignee(uint256 taskId) {
        require(msg.sender == tasks[taskId].assignee, "Not the assignee");
        _;
    }

    /// @notice Modifier to check if a task exists
    /// @param taskId The ID of the task
    modifier taskExists(uint256 taskId) {
        require(taskId < taskCount, "Task does not exist");
        _;
    }

    /// @notice Constructor to set the owner and the USDC token address
    /// @param _usdc The address of the USDC token contract
    constructor(address _usdc) {
        owner = msg.sender;
        USDC = _usdc;
    }

    /// @notice Creates a new task
    /// @dev Any user can create a new task, rewards should be specified in USDC (6 decimals)
    /// @param description The description of the task
    /// @param assignee The address of the user assigned to the task
    /// @param reward The reward amount in USDC for completing the task (expected in smallest unit, i.e., 6 decimals)
    function createTask(string memory description, address assignee, uint256 reward) public {
        require(reward > 0, "Reward must be greater than zero");
        tasks[taskCount] = Task(description, assignee, reward * 1e6, TaskStatus.Todo, msg.sender);
        emit TaskCreated(taskCount, description, assignee, reward * 1e6);
        taskCount++;
    }

    /// @notice Starts a task by changing its status from "Todo" to "Doing"
    /// @dev Only the assignee of the task can start it
    /// @param taskId The ID of the task to start
    function startTask(uint256 taskId) public onlyAssignee(taskId) taskExists(taskId) {
        Task storage task = tasks[taskId];
        require(task.status == TaskStatus.Todo, "Task must be in To Do state");
        task.status = TaskStatus.Doing;
        emit TaskStarted(taskId);
    }

    /// @notice Completes a task by changing its status from "Doing" to "Done" and transferring USDC
    /// @dev Only the assignee of the task can complete it
    /// @param taskId The ID of the task to complete
    function completeTask(uint256 taskId) public onlyAssignee(taskId) taskExists(taskId) {
        Task storage task = tasks[taskId];
        require(task.status == TaskStatus.Doing, "Task must be in Doing state");
        task.status = TaskStatus.Done;
        require(IERC20(USDC).transfer(task.assignee, task.reward), "USDC transfer failed");
        emit TaskCompleted(taskId, task.assignee, task.reward);
    }

    /// @notice Transfers contract ownership to a new owner
    /// @dev Only the current owner can transfer ownership
    /// @param newOwner The address of the new owner
    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "New owner is the zero address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    /// @notice Returns the USDC balance held by the contract
    /// @return The USDC balance of the contract
    function getBalance() public view returns (uint256) {
        return IERC20(USDC).balanceOf(address(this));
    }

    /// @notice Fallback function to reject any ETH sent to the contract
    receive() external payable {
        revert("Cannot receive ETH");
    }
}
