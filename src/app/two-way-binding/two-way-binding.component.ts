import { Component, OnInit } from '@angular/core';
import {timeInterval} from 'rxjs-compat/operator/timeInterval';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  username = '';
  emptyUser = true;
  constructor() {
  }

  ngOnInit() {
  }
  clearInput() {
    this.username = '';
    this.emptyUser = true;
  }
  checkEvent() {
    if (this.username.length > 0) {
      this.emptyUser = false;
    }
  }
}
