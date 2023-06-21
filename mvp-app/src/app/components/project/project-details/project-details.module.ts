import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './project-details.component';
import { TaskModule } from '../../task/task-list/task-list.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogModule } from '@angular/cdk/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { TablesService } from 'src/app/services/tables.service';
import { ProjectService } from 'src/app/services/project.service';

@NgModule({
  declarations: [ProjectDetailsComponent],
  imports: [
    CommonModule,
    TaskModule,
    DialogModule,
    MatButtonModule,
    MatIconModule,
    DragDropModule,
    MatMenuModule,
  ],
  providers: [ProjectService, TablesService],
  exports: [ProjectDetailsComponent],
})
export class ProjectDetailsModule {}
