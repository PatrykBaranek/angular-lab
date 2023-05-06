import { Component, Input } from '@angular/core';
import { Css } from 'src/app/models/css.model';

@Component({
  selector: 'app-results-container',
  templateUrl: './results-container.component.html',
  styleUrls: ['./results-container.component.scss'],
})
export class ResultsContainerComponent {
  @Input() generatedCss!: Css;

  getCss(): Css {
    return {
      color: this.generatedCss.color,
      border: this.generatedCss.border,
      'box-shadow': this.generatedCss['box-shadow'],
      background: this.generatedCss.background,
    };
  }
}
