import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskModule } from '../task/task.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardComponent } from './board.component';

@NgModule({
  declarations: [BoardComponent],
  imports: [CommonModule, TaskModule, DragDropModule],
  exports: [BoardComponent],
})
export class BoardModule {}
