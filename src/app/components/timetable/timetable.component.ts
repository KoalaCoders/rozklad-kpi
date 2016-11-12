import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {
  timetable: Object;
  weekDays: Array<string> = [ 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

  constructor(private api: ApiService) { }

  ngOnInit() {
    const subject = new BehaviorSubject(null);
    this.api.subscribeTimetable(subject);
    subject.subscribe((timetable) => {
      this.timetable = timetable;
      console.log(timetable);
    });
  }

  mapWeek(week: Object): Array<Object> {
    return [1, 2, 3, 4, 5, 6].map((index) => week[index] || []);
  }

  mapDay(day: Object): Array<Object> {
    return [1, 2, 3, 4, 5].map((index) => {
      let lesson = day[index];
      if (lesson) {
        lesson.number = index;
      }
      return lesson || null;
    });
  }
}
