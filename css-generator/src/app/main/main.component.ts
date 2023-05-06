import { Component, Input, Output } from '@angular/core';
import { Css } from '../models/css.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  generatedCss!: Css;

  constructor() {}

  onCssChanged(cssData: Css) {
    console.log(this.generatedCss);
    this.generatedCss = cssData;
  }
}
