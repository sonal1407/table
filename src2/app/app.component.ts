import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  edit = ['EDIT'];
  heading = {
    name: ['ID', 'Customer_number', 'email', 'Status'],
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
    },
    {
      'id': 11,
      'customer_number': 'C-10009',
      'name': 'Moore Hahn',
      'company': 'EXOSPACE',
      'group': 'Retailer',
      'created_at': '05-Dec-2018',
      'email': 'moorehahn@exospace.com',
      'mobile_number': 9095043552,
      'address': '311 Preston Court, Grill, Oklahoma, 476',
      'status': 'Invoiced'
    },
    {
      'id': 12,
      'customer_number': 'C-10009',
      'name': 'Moore Hahn',
      'company': 'EXOSPACE',
      'group': 'Retailer',
      'created_at': '05-Dec-2018',
      'email': 'moorehahn@exospace.com',
      'mobile_number': 9095043552,
      'address': '311 Preston Court, Grill, Oklahoma, 476',
      'status': 'Expired'
    }
  ];
  constructor() { }
  ngOnInit() {
  }
  action(data, data1) {
    console.log('from app');
    // console.log(this.edit);
  }

}
