import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'konw';
  description = 'konw2 - opis';

  onButtonClick() {
    console.log('ok clicked');
  }

  onCancel() {}
}
