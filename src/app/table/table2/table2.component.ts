/**
 * @author sonal prajapati
 * @description used to display table based on the user pass header and key.
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Header, EventType, Action } from '../header.model';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {
  /**
   * store the value of the user
   */
  public dataList: any;
  @Input() public header: Header;

  /**
   * if user cannot type pass action then it will not display
   * if user need to  use action then follow a secuance like first edit delete
   */
  @Input() public action: Action[];

  Action: typeof Action;
  /**
   * store the value of the data
   */
  @Input() set data(value) {
    this.dataList = value;
  }
  /**
   * emit an event when user click on the button, it need to pass action and id
   */
  @Output() public actionClicked: EventEmitter<EventType> = new EventEmitter();
  get data() {
    return this.dataList;
  }
  /**
 *  * emit an action
 */
  public actionClick(action, id) {
    this.actionClicked.emit({ action, id });
    if (action === 0) {
      console.log('edit click');
    } else if (action === 1) {
      console.log('delete click');
    } else {
      console.log('view click');

    }
  }
  constructor() {
  }
  ngOnInit() {
    console.log(this.action);
  }
}
