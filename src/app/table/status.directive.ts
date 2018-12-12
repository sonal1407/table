/**
 * @author sonal prajapati
 * @description This derective represent to update the satus background color 
 */
import { Directive, ElementRef, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appStatus]'
})
export class StatusDirective {

  constructor(private el: ElementRef) {
  }
  /**
   * Get the status of the data 
   */
  @Input() set status(value) {
    const status = value;
    if (status) {
      if (status === 'Draft') {
        console.log('draft');
        this.el.nativeElement.style.backgroundColor = 'grey';
      }
      if (status === 'Sent') {
        console.log('verify');
        this.el.nativeElement.style.backgroundColor = 'rgb(33, 197, 243)';
      }
      if (status === 'Invoiced') {
        console.log('invoiced');
        this.el.nativeElement.style.backgroundColor = 'green';
      }
      if (status === 'Paid') {
        console.log('Paid');
        this.el.nativeElement.style.backgroundColor = 'green';
      }
      if (status === 'Expired') {
        this.el.nativeElement.style.backgroundColor = 'red';
      }
    } 
}
}
