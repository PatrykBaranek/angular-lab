import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from 'src/app/services/project.service';
import { Table, TablesService } from 'src/app/services/tables.service';
import { Task, TasksService } from 'src/app/services/tasks.service';
import { EditTaskFormComponent } from '../../forms/task/edit-task-form/edit-task-form.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskComponent {
  @Input() table!: Table;
  @Input() project!: Project;

  constructor(
    private tablesService: TablesService,
    private tasksService: TasksService,
    private dialog: MatDialog
  ) {}

  onEditTask(task: Task) {
    this.dialog.open(EditTaskFormComponent, {
      data: {
        title: 'Edit Task',
        projectId: this.project.id,
        tableId: this.table.id,
        taskId: task.id,
        taskDescription: task.description,
      },
    });
  }

  onDeleteTask(task: Task) {
    console.log(task);
    this.tasksService.deleteTask(
      this.project.id,
      this.table.id,
      task.id as string
    );
  }

  getConnectedListIds(): string[] {
    return this.project.tables.map((x) => x.id);
  }

  onTaskDrop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    const previousTable = this.tablesService.getTable(
      this.project.id,
      event.previousContainer.id
    );
    previousTable.tasks = event.previousContainer.data;
    this.tablesService.updateTable(
      this.project.id,
      previousTable.id,
      previousTable
    );

    if (event.previousContainer !== event.container) {
      const currentTable = this.tablesService.getTable(
        this.project.id,
        event.container.id
      );
      currentTable.tasks = event.container.data;
      this.tablesService.updateTable(
        this.project.id,
        currentTable.id,
        currentTable
      );
    }
  }
}
