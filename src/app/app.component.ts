import { Component, OnInit, ElementRef } from '@angular/core';
import { Action } from './table/header.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  edit = Action;
  heading = {
    name: ['ID', 'Customer_number', 'email', 'Status', 'action'],
    key: ['id', 'customer_number', 'email', 'status']
  };

  data = [
    {
      'id': 9,
      'customer_number': 'C-10009',
      'name': 'Moore Hahn',
      'company': 'EXOSPACE',
      'group': 'Retailer',
      'created_at': '05-Dec-2018',
      'email': 'moorehahn@exospace.com',
      'mobile_number': 9095043552,
      'address': '311 Preston Court, Grill, Oklahoma, 476',
      'status': 'Draft'
    },
    {
      'id': 7,
      'customer_number': 'C-10009',
      'name': 'Moore Hahn',
      'company': 'EXOSPACE',
      'group': 'Retailer',
      'created_at': '05-Dec-2018',
      'email': 'moorehahn@exospace.com',
      'mobile_number': 9095043552,
      'address': '311 Preston Court, Grill, Oklahoma, 476',
      'status': 'Sent'
    },
    {
      'id': 10,
      'customer_number': 'C-10009',
      'name': 'Moore Hahn',
      'company': 'EXOSPACE',
      'group': 'Retailer',
      'created_at': '05-Dec-2018',
      'email': 'moorehahn@exospace.com',
      'mobile_number': 9095043552,
      'address': '311 Preston Court, Grill, Oklahoma, 476',
      'status': 'Sent'
    }
  ];
  constructor(private el: ElementRef) { }
  ngOnInit() {
  }
  action(data, data1) {
    debugger
    console.log('from app', data, data1);
    // console.log(this.edit);
  }

}
