import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { addDays } from 'date-fns';
import { interval, map, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit {
  datePicker = new FormControl();

  dateStreamInterval(date: string) {
    let startDate = new Date(date);

    return interval(1000).pipe(
      take(10),
      map((x) => addDays(startDate, x))
    );
  }

  ngOnInit(): void {
    this.datePicker.valueChanges
      .pipe(switchMap((x) => this.dateStreamInterval(x)))
      .subscribe((x) => {
        console.log(x);
      });
  }
}
