import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksComponent } from "./tasks.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [SharedModule,CommonModule,FormsModule],
  declarations: [TaskComponent,TasksComponent,NewTaskComponent], 
    exports: [TasksComponent]
})
export class TaskModule {}