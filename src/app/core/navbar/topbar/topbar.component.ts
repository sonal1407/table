/**
 * @author - Ronak Patel.
 * @description -
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ims-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public logout(): void {
    localStorage.removeItem('token');
  }
}
