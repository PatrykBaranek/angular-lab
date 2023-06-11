import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ModalComponent],
  imports: [MatDialogModule, MatButtonModule],
  exports: [ModalComponent],
})
export class ModalModule {}
