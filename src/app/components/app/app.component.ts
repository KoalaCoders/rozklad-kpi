import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService]
})
export class AppComponent implements OnInit {
  data: Array<Object>;

  constructor(private api: ApiService) { }
  ngOnInit():void {
    this.api.getGroups()
      .subscribe((data) => {
        console.log(data);
        this.data = data;
      });
  }
}
