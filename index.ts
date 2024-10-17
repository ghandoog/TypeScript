// import {add, greeting } from './functionType';
// import {Person, Car} from './Interface';
// import {Animal, PersonClass} from './Classes';


/*
interface Task {
  title: string;
  completed: boolean;
  dueDate?: string;
}

class TaskManager {
  private tasks: Task[] = [];

  // Add a task
  addTask(task: Task): void {
      // -> this.tasks.push(task);
      console.log(`Task added: ${task.title}`);
  }

  // Remove a task
  removeTask(title: string): void {
      // -> const index = this.tasks.findIndex(t => t.title === title);
      if (index > -1) {
          this.tasks.splice(index, 1);
          console.log(`Task removed: ${title}`);
      } else {
          console.log(`Task not found: ${title}`);
      }
  }

  // Mark a task as completed
  completeTask(title: string): void {
      const task = this.tasks.find(t => t.title === title);
      if (task) {
          task.completed = true;
          console.log(`Task completed: ${task.title}`);
      } else {
          console.log(`Task not found: ${title}`);
      }
  }

  // Update a task
  updateTask(oldTitle: string, newTitle: string, newDueDate?: string): void {
      // -> const task = this.tasks.find(t => t.title === oldTitle);
      if (task) {
          task.title = newTitle;
          if (newDueDate) {
              task.dueDate = newDueDate;
          }
          console.log(`Task updated: ${oldTitle} to ${newTitle}`);
      } else {
          console.log(`Task not found: ${oldTitle}`);
      }
  }

  // Display tasks
  displayTasks(showCompleted: boolean = true): void {
      console.log('To-Do List:');
      // -> this.tasks.forEach(task => {
          if (task.completed === showCompleted || !showCompleted) {
              const status = task.completed ? '✔️' : '❌';
              const due = task.dueDate ? `(Due: ${task.dueDate})` : '';
              console.log(`${status} ${task.title} ${due}`);
          }
      });
  }

  // Filter tasks by due date
  filterTasksByDueDate(date: string): void {
      console.log(`Tasks due before or on: ${date}`);
      //  -> this.tasks.forEach(task => {
          if (task.dueDate && new Date(task.dueDate) <= new Date(date)) {
              const status = task.completed ? '✔️' : '❌';
              console.log(`${status} ${task.title} (Due: ${task.dueDate})`);
          }
      });
  }
}

// Testing the TaskManager class
const myTaskManager = new TaskManager();
myTaskManager.addTask({ title: "Buy groceries", completed: false });
myTaskManager.addTask({ title: "Walk the dog", completed: true, dueDate: "2024-10-20" });
myTaskManager.addTask({ title: "Finish TypeScript project", completed: true, dueDate: "2024-10-25" });

myTaskManager.displayTasks();
 */

push()
findIndex()
forEach()
