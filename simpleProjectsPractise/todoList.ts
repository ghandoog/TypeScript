// Final Step: Build a Simple Project
// Let's bring it all together! Create a mini TypeScript project.

// Project Idea: To-Do List
// Define an interface for a Task with properties title, completed, and dueDate.
// Create a TaskManager class that:
// Can add a task.
// Can mark a task as completed.
// Can display all tasks.
// Add some tasks to your task manager and manipulate them using your class methods.

// Create a Task interface with the properties listed above.
// Make sure dueDate is optional, so tasks can be created without it.

//Task interface

/**
 * create interface (taskName, taskCompleted, taskDueDate)
 *
 * 
 * 
 * create class extend interface
 *   create tasks[] hold all tasks
 *   create methods
 *    addTask() -> getTask -> push task to array -> print task
 *    markTaskCompleted -> getTask -> check status -> print task
 *    displayTasks(complete: boolean) -> check every element -> print ? '✔️' : 'x'
 *    removeTask
 *     -> getTask(by name)
 *     -> check the same name
 *     -> remove task
 */


interface Task{
  taskName: string;
  taskCompleted: boolean;
  DueDate?: string;
}

class TaskManager{
  tasks: Task[] = [];

  addTask(task: Task): void {
    this.tasks.push(task);
    console.log(`Task added: ${task.taskName}`);
  }

  markTaskCompleted(taskName: string): void {
    const task = this.tasks.find(t => t.taskName === taskName);
    if (task) {
      task.taskCompleted = true;
      console.log(`Task completed: ${task.taskName}`);
    } else {
      console.log(`Task not found: ${taskName}`);
    }
  }

  displayTasks(showCompleted: boolean = true): void {
    console.log('To-Do List:');
    this.tasks.forEach(task => {
      if (task.taskCompleted === showCompleted || !showCompleted) {
        const status = task.taskCompleted ? '✔️' : '❌';
        const due = task.DueDate ? `(Due: ${task.DueDate})` : '';
        console.log(`${status} ${task.taskName} ${due}`);
      }
    }); 
  }
}
