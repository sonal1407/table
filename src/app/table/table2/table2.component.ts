/**
 * @author sonal prajapati
 * @description used to display table based on the user pass header (key,name),data and action.
 */
import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { Header, EventType, Action } from '../table.model';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component{
  /**
   * store the value of the data which is get from the databse
   */
  public dataList: any;
  /**
   * It is used to pass the header.If user wants to add header then used to pass key and name also.
   */
  @Input() public header: Header;

  /**
   * if user cannot type pass action then it will not display
   * It is also used for display the action based on user pass the value which is type of enum
   */
  @Input() public action: Action[];

  Action: typeof Action;      
  /**
   * store the value of the data
   */
  @Input() set data(value: any) {
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
 
}
