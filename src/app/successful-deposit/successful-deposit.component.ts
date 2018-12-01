import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { PaymentWizardService } from '../payment-wizard/payment-wizard.service';
import { PaymentSteps } from '../payment-wizard/payment-wizard';

@Component({
  selector: 'app-successful-deposit',
  templateUrl: './successful-deposit.component.html',
  styleUrls: ['./successful-deposit.component.scss']
})
export class SuccessfulDepositComponent implements OnInit {
  amount: number;
  constructor(
    private route: Router,
    private dataService: DataService,
    private paymentWizardService: PaymentWizardService
  ) {}

  ngOnInit() {
    this.paymentWizardService.wizardUpdate$.next({
      selectedStep: PaymentSteps.successfulDeposit
    });
    this.amount = this.dataService.selectedPackage.amount;
  }

  addMoreCash() {
    this.route.navigate(['/package-selection']);
  }
}
