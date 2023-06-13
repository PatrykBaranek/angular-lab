import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { BoardModule } from './components/board/board.module';
import { TaskModule } from './components/task/task.module';
import { ModalModule } from './components/modal/modal.module';
import { CreateNewProjectFormModule } from './components/forms/create-new-project-form/create-new-project-form.module';
import { ProjectDetailsModule } from './components/project-details/project-details.module';

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
    ModalModule,
    ProjectDetailsModule,
    CreateNewProjectFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
