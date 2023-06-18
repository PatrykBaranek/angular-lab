import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTableFormComponent } from './add-table-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ProjectService } from 'src/app/services/project.service';
import { TablesService } from 'src/app/services/tables.service';

@NgModule({
  declarations: [AddTableFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [TablesService],
  exports: [AddTableFormComponent],
})
export class AddTableFormModule {}
