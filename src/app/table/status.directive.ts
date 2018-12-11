import { Directive, ElementRef, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appStatus]'
})
export class StatusDirective {
  // declare variable
  @HostBinding('style.color') color: string;
  constructor(private el: ElementRef) {

  }

  @Input() set status(value) {
    const stat = value;
    if (stat) {
      if (stat === 'Draft') {
        console.log('draft');
      }
      if (stat === 'Sent') {
        console.log('verify');
      }
      if (stat === 'Invoiced') {
        console.log('invoiced');
      }
      if (stat === 'Paid') {
        console.log('Paid');
      }
    } else {
      console.log('wrong');

    }
  }
  @HostListener('mouseover') onMouseOver() {
    this.color = 'red';
  }
}
