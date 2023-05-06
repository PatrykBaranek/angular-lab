import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Css } from 'src/app/models/css.model';

@Component({
  selector: 'app-formating-form',
  templateUrl: './formating-form.component.html',
  styleUrls: ['./formating-form.component.scss'],
})
export class FormatingFormComponent {
  @Output() cssGenerator = new EventEmitter<Css>();

  color: string = '';
  border: string = '';
  bgColor: string = '';
  boxShadow: string = '';

  onCssChange() {
    console.log(
      'formating form changed',
      this.color,
      this.border,
      this.boxShadow,
      this.bgColor
    );
    this.cssGenerator.emit({
      color: this.color,
      border: this.border,
      'box-shadow': this.boxShadow,
      background: this.bgColor,
    });
    console.log(this.cssGenerator);
  }
}
