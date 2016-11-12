import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService],
})
export class AppComponent implements OnInit {
  groups: Array<string>;
  title = 'app works!';
  constructor(private api: ApiService) { }

  ngOnInit() {
     this.api.getGroups()
      .subscribe((groups) => {
          this.groups = groups;
          console.log(this);

      });
  }
}
