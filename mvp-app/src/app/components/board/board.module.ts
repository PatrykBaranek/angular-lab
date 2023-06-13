import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BoardComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [BoardComponent],
})
export class BoardModule {}
