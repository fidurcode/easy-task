import {Component, Input} from '@angular/core';
import {NewTaskModel} from "../task-create/new-task.model";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) userName!: string;

  isNewTaskDialogOpen: boolean = false;

  constructor(private tasksService: TasksService) {
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.id);
  }

  onCreateNewTask(): void {
      this.isNewTaskDialogOpen = true;
  }

  onCancelNewTask(): void {
    this.isNewTaskDialogOpen = false;
  }

  onAddTask(createdTask: NewTaskModel): void {
    this.tasksService.addTask(this.id, createdTask);
    this.isNewTaskDialogOpen = false;
  }
}
