import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-acount',
  templateUrl: './acount.component.html',
  styleUrls: ['./acount.component.css']
})
export class AcountComponent implements OnInit {


  ngOnInit() {
  }
  constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
    config.autoClose = false;
  }
}
