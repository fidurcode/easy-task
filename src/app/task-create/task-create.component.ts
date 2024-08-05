import {Component, EventEmitter, Output} from '@angular/core';
import {NewTaskModel} from "./new-task.model";

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.scss'
})
export class TaskCreateComponent {

  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskModel>();

  title = '';
  summary = '';
  date = '';

  onSubmit() {
    this.add.emit({
      title: this.title,
      summary: this.summary,
      date: this.date
    })
  }

  onCancel() {
    this.cancel.emit();
  }
}
