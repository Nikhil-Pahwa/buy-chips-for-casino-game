import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '../data.service';
import { PackageMethodService } from './payment-method-service';
import { PaymentMethods } from './payment.model';
import { PaymentWizardService } from '../payment-wizard/payment-wizard.service';
import { PaymentSteps } from '../payment-wizard/payment-wizard';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit, OnDestroy {
  serviceSubscription: Subscription;
  constructor(
    private dataService: DataService,
    private packageMethodService: PackageMethodService,
    private paymentWizardService: PaymentWizardService
  ) {}

  ngOnInit() {
    this.paymentWizardService.wizardUpdate$.next({
      selectedStep: PaymentSteps.paymentMethod
    });

    this.serviceSubscription = this.packageMethodService
      .getPaymentMethods()
      .subscribe(
        (paymentMethods: PaymentMethods) => {
          this.dataService.paymentMethods = paymentMethods;
        },
        error => {
          console.log('service error');
        }
      );
  }

  /**
   * on destroy unsubscribe data service
   */
  ngOnDestroy() {
    if (this.serviceSubscription !== Subscription.EMPTY) {
      this.serviceSubscription.unsubscribe();
    }
  }
}
