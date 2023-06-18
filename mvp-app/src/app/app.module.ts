import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { BoardModule } from './components/board/board.module';
import { TaskModule } from './components/task/task-list/task-list.module';
import { ProjectDetailsModule } from './components/project/project-details/project-details.module';
import { CreateNewProjectFormModule } from './components/forms/create-new-project-form/create-new-project-form.module';
import { AddTableFormModule } from './components/forms/table/add-table-form/add-table-form.module';
import { EditTableFormModule } from './components/forms/table/edit-table-form/edit-table-form.module';
import { AddTaskFormModule } from './components/forms/task/add-task-form/add-task-form.module';
import { EditTaskFormModule } from './components/forms/task/edit-task-form/edit-task-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    BoardModule,
    TaskModule,
    ProjectDetailsModule,
    CreateNewProjectFormModule,
    AddTableFormModule,
    EditTableFormModule,
    AddTaskFormModule,
    EditTaskFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
