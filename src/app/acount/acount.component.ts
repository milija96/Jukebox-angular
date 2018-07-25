import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-acount',
  templateUrl: './acount.component.html',
  styleUrls: ['./acount.component.css']
})
export class AcountComponent implements OnInit {


  ngOnInit() {
  }
  constructor(config: NgbDropdownConfig,
              private auth: AuthService) {
    config.placement = 'bottom-right';
    config.autoClose = false;
  }
  click(): void{
    this.auth.login();
  }
  logout(): void{
    this.auth.logout();
  }
}
