import { Directive, ElementRef, Input, OnInit } from '@angular/core';
enum statusChange {
  Draft,
  Sent,
  Expired,
  Invoiced,
  Paid,
}
@Directive({
  selector: '[appStatus]'
})
export class StatusDirective {

  constructor(private el: ElementRef) { }
  _status: statusChange;

  get status() {
    return this._status;
  }
  @Input() set status(value) {
    this._status = value;
    if (value === statusChange.Draft) {
      console.log('DRAFT');
      this.el.nativeElement.style.backgroundColor = 'grey';
      this.el.nativeElement.style.color = 'grey';
    } else if (value === statusChange.Sent) {
      console.log('SENT');
      this.el.nativeElement.style.backgroundColor = 'blue';
            this.el.nativeElement.style.color = 'blue';
    } else if (value == statusChange.Expired) {
      console.log('EXPIRED');
      this.el.nativeElement.style.backgroundColor = 'red';
      this.el.nativeElement.style.color = 'red';
    } else if (value === statusChange.Paid) {
      console.log('Paid');
      this.el.nativeElement.style.backgroundColor = 'green';
      this.el.nativeElement.style.color = 'green';
    } else if (value === statusChange.Invoiced) {
      this.el.nativeElement.style.backgroundColor = 'blue';
      this.el.nativeElement.style.color = 'blue';
    }
  }
}