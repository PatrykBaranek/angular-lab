import { Component, Input } from '@angular/core';

interface Card {
  icon: string;
  title: string;
  value: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pageTitle: string = 'Charts';

  cards: Card[] = [
    {
      icon: '',
      title: 'Card 1',
      value: 21,
    },
    {
      icon: 'placeholder',
      title: 'Card 2',
      value: 22,
    },
    {
      icon: 'placeholder',
      title: 'Card 3',
      value: 23,
    },
  ];
}
