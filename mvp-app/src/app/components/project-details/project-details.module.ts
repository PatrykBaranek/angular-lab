import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './project-details.component';
import { TaskModule } from '../task/task.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogModule } from '@angular/cdk/dialog';

@NgModule({
  declarations: [ProjectDetailsComponent],
  imports: [
    CommonModule,
    TaskModule,
    DialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [ProjectDetailsComponent],
})
export class ProjectDetailsModule {}
