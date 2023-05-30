import { Component, OnInit, Output } from '@angular/core';
import { filter, of, take, find, map, Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-rx-js';
  arr!: number[];

  @Output() clickX!: number;
  @Output() clickY!: number;

  constructor() {}

  ngOnInit() {
    this.arr = new Array(20).fill(0).map((_, i) => i + 1);

    console.log('Parzyste');
    const oddNumbers$ = of(...this.arr)
      .pipe(filter((x) => x % 2 === 0))
      .subscribe((x) => console.log(x));

    oddNumbers$.unsubscribe();

    console.log('Weź 5');
    const justOnly5 = of(...this.arr)
      .pipe(take(5))
      .subscribe((x) => console.log(x));

    justOnly5.unsubscribe();

    console.log('Tylko 8');
    const only8$ = of(...this.arr)
      .pipe(find((x) => x === 8))
      .subscribe((x) => console.log(x));

    only8$.unsubscribe();

    console.log('Liczba 1...Liczba 2...');
    const returnNumbers$ = of(...this.arr)
      .pipe(map((x) => `Liczba ${x}`))
      .subscribe((x) => console.log(x));

    returnNumbers$.unsubscribe();

    const click = fromEvent<MouseEvent>(document, 'click');
    click.subscribe((x) => {
      this.clickX = x.clientX;
      this.clickY = x.clientY;
    });
  }
}
