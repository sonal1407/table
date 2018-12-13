/**
 * @author Sonal Prajapati
 * @description this class represent for view  quotation.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
// -------------------------------//
import { QuotationService } from '../quotation.service';
import { Quotation } from '../quotations.model';
import { Customers } from '../../customers/customers.model';

@Component({
  selector: 'ims-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit, OnDestroy {

  public qoutation: Quotation[];
  public customer: Customers[];
  public action = ['EDIT', 'DELETE'];
  public heading = {
    name: ['ID', 'Number', 'Issue Date', 'Expiry Date', 'Customer', 'Grand Total', 'Status'],
    key: ['id', 'quotation_number', 'issue_date', 'expiry_date', 'customer_id', 'grand_total', 'status']
  };
  public totalItems = 0;
  public pageSize = 10;
  public page = 1;
  public paymentData: any;
  public invoiceData: any;
  result: any[];
  private qoutationSubscription: Subscription;
  constructor(private router: Router, private quotationService: QuotationService) {
    this.customer = [];
  }

  ngOnInit() {
    this.quotation();
    // this.Customer();
  }
  /**
   * It is used for get all the list of the qoutation.
   */
  public quotation(): void {
    this.qoutationSubscription = this.quotationService.getQoutation().subscribe((qoutations) => {
      this.qoutation = qoutations;
    });
  }
  /**
   * @description get all the list of the customer
   */
  public Customer(): void {
    this.quotationService.getCustomer().subscribe((customer) => {
      this.customer = customer;
      console.log(this.customer);

    });
  }
  public onNewOqutation() {
    this.router.navigate(['/quotation/add']);
  }
  public actionClick(id, id1) {
    this.router.navigate(['/qoutation/add']);
  }
  /**
   * @description search perticular data
   *
   */
  public searchClick() {

  }
  goToPage(pageSize: number): void {
    this.pageSize = pageSize;
    this.page = 1;
    this.quotation();
  }

  ngOnDestroy() {
    this.qoutationSubscription.unsubscribe();
  }
}
