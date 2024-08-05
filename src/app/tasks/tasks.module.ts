import { NgModule } from '@angular/core';
import {TasksComponent} from "./tasks.component";
import {TaskComponent} from "../task/task.component";
import {TaskCreateComponent} from "../task-create/task-create.component";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
    TaskCreateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
