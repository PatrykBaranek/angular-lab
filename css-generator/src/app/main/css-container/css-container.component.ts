import { Component, Input } from '@angular/core';
import { Css } from 'src/app/models/css.model';

@Component({
  selector: 'app-css-container',
  templateUrl: './css-container.component.html',
  styleUrls: ['./css-container.component.scss'],
})
export class CssContainerComponent {
  @Input() generatedCss!: Css;

  onGenerateCssCode() {
    console.log(this.generatedCss);
    return `
      {
        color: ${this.generatedCss.color};
        border: ${this.generatedCss.border};
        box-shadow: ${this.generatedCss['box-shadow']};
        background-color: ${this.generatedCss.background};
      }
    `;
  }
}
