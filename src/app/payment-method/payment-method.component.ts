import { Component, OnInit } from '@angular/core';

import { PaymentMethods } from './payment.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {
  payementMethods: PaymentMethods = {
    creditCard: { types: ['cc-test-1', 'cc-test-2'] },
    debitCard: { types: ['dc-test-1', 'dc-test-2'] }
  };
  constructor(private dataService: DataService) {}
  ngOnInit() {
    // make httpRequest to fetch payment methods and save it into data service
    this.dataService.paymentMethods = this.payementMethods;
  }
}
