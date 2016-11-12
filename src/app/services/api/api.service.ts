import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  thimetable: any;
  timetableObserver: any;
  constructor(private http: Http) { }


  getGroups() {
    return this.http.get('http://api.rozklad.org.ua/v2/groups')
      .map(res => res.json().data);
  }

  searchGroup(query: string) {
    return this.http
      .get(`http://api.rozklad.hub.kpi.ua/groups/?search=${query}`)
      .map(res => res.json().results);
  }

  setCurrentGroup(groupId: number): void {
    this.http
      .get(`http://api.rozklad.hub.kpi.ua/groups/${groupId}/timetable`)
      .map((data) => data.json().data)
      .subscribe((data) => {
        console.log('new data');
        if (this.timetableObserver) {
          this.timetableObserver.next(data);
        }
      });
  }

  subscribeTimetable(dist) {
    this.timetableObserver = dist;
  }
}
