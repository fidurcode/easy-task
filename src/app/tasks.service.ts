import {Injectable} from '@angular/core';
import {Task} from "./task/task.model";
import {NewTaskModel} from "./task-create/new-task.model";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024 -06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if(tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter((task: Task): boolean => task.userId === userId);
  }

  addTask(userId: string, task: NewTaskModel) {
    this.tasks.unshift({
      id: new Date().getTime().toString().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.date,
    });

    this.saveTasks();
  }

  removeTask(id: string): void  {
    this.tasks = this.tasks.filter((task: Task): boolean => task.id !== id)!;
    this.saveTasks();
  }

  private saveTasks(): void  {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
