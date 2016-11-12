import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService],
})
export class AppComponent { }
