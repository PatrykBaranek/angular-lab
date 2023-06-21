import { Component, OnInit } from '@angular/core';
import { ProjectService } from './services/project.service';
import { TasksService } from './services/tasks.service';
import { TablesService } from './services/tables.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'mvp-app';

  constructor(
    private projectService: ProjectService,
    private tableService: TablesService,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
    if (this.projectService.getProjects().length !== 0) return;
    const defaultProject = this.projectService.addNewProject('Default Project');
    this.tableService.createTable(defaultProject.id, 'To Do');
    this.tableService.createTable(defaultProject.id, 'Doing');
    this.tableService.createTable(defaultProject.id, 'Done');
  }
}
