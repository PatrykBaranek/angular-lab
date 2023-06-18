import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { CreateNewProjectFormComponent } from './components/forms/create-new-project-form/create-new-project-form.component';
import { ProjectDetailsComponent } from './components/project/project-details/project-details.component';

const routes: Routes = [
  { path: '', component: BoardComponent },
  { path: 'project/:id', component: ProjectDetailsComponent },
  { path: 'create-new-project', component: CreateNewProjectFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
