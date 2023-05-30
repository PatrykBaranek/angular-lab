import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { FeaturesListComponent } from './features/features-list/features-list.component';
import { FeaturesDetailsComponent } from './features/features-details/features-details.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TasksDetailComponent } from './tasks/tasks-detail/tasks-detail.component';
import { KanbanComponent } from './tasks/kanban/kanban.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    FeaturesListComponent,
    FeaturesDetailsComponent,
    TasksComponent,
    TasksListComponent,
    TasksDetailComponent,
    KanbanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
