import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { BoardModule } from './components/board/board.module';
import { TaskModule } from './components/task/task.module';
import { ProjectDetailsModule } from './components/project-details/project-details.module';
import { CreateNewProjectFormModule } from './components/forms/create-new-project-form/create-new-project-form.module';
import { AddTableFormModule } from './components/forms/add-table-form/add-table-form.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
