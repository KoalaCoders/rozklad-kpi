import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

interface Group {
  id: number;
  name: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  currentGroup: string;
  groups: Array<Group>;
  showGroups: boolean;

  constructor(private api: ApiService) { }

  ngOnInit() {
    const group = localStorage.getItem('koalaRozkladKPI');
    if (group) {
      this.setCurrentGroup(JSON.parse(group));
    } else {
      this.currentGroup = '';
    }
    this.groups = [];
  }

  inputChange(e): void {
    this.showGroups = e.target.value.length;
    this.api.searchGroup(e.target.value)
      .subscribe((groups) => {
        this.groups = groups;
      });
  }

  setCurrentGroup(group: Group) {
    this.showGroups = false;
    localStorage.setItem('koalaRozkladKPI', JSON.stringify(group));
    this.currentGroup = group.name;
    this.api.setCurrentGroup(group.id);
  }

  hideGroups() {
    setTimeout(() => {
      this.showGroups = false;
      this.setCurrentGroup(
        JSON.parse(localStorage.getItem('koalaRozkladKPI'))
      );
    }, 1000);
  }
}
