import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task-list.component';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EditTaskFormModule } from '../../forms/task/edit-task-form/edit-task-form.module';

@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    MatIconModule,
    DragDropModule,
    MatCardModule,
    MatButtonModule,
    EditTaskFormModule,
  ],
  exports: [TaskComponent],
})
export class TaskModule {}
