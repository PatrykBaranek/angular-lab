import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project, ProjectService } from 'src/app/services/project.service';
import { AddTableFormComponent } from '../../forms/table/add-table-form/add-table-form.component';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Table, TablesService } from 'src/app/services/tables.service';
import { EditTableFormComponent } from '../../forms/table/edit-table-form/edit-table-form.component';
import { Task, TasksService } from 'src/app/services/tasks.service';
import { AddTaskFormComponent } from '../../forms/task/add-task-form/add-task-form.component';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  project!: Project;
  projectSubscription!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private projectService: ProjectService,
    private tablesService: TablesService,
    private tasksService: TasksService
  ) {}

  onAddTableToProject() {
    this.dialog.open(AddTableFormComponent, {
      data: {
        title: 'Add Table',
        projectId: this.project.id,
      },
    });
  }

  onEditTableFromProject(tableId: string) {
    this.dialog.open(EditTableFormComponent, {
      data: {
        title: 'Edit Table',
        projectId: this.project.id,
        tableId,
      },
    });
  }

  onDeleteTableFromProject(tableId: string) {
    this.tablesService.deleteTable(this.project.id, tableId);
  }

  onAddTaskToTable(tableId: string) {
    this.dialog.open(AddTaskFormComponent, {
      data: {
        title: 'Add Task',
        projectId: this.project.id,
        tableId,
      },
    });
  }

  onTableDrop(event: CdkDragDrop<Table[]>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );

    event.container.data.forEach((table) => {
      this.tablesService.updateTable(this.project.id, table.id, table);
    });
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

  ngOnInit(): void {
    this.projectSubscription = this.route.params.subscribe((params) => {
      let id = params['id'];

      this.project = this.projectService.getProjectById(id);
    });
  }

  ngOnDestroy(): void {
    this.projectSubscription.unsubscribe();
  }
}
