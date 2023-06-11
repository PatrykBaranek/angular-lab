import { NgModule } from '@angular/core';
import { CreateNewProjectFormComponent } from './create-new-project-form.component';
import { ModalModule } from '../../modal/modal.module';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ProjectService } from 'src/app/services/project.service';

@NgModule({
  declarations: [CreateNewProjectFormComponent],
  imports: [
    ModalModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
  ],
  providers: [ProjectService],
  exports: [CreateNewProjectFormComponent],
})
export class CreateNewProjectFormModule {}
