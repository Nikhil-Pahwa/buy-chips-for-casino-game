import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { PaymentWizardService } from './payment-wizard.service';
import { PaymentSteps, PaymentWizard } from './payment-wizard';
import { DataService } from '../data.service';
import { Package } from '../package-selection/package';

@Component({
  selector: 'app-payment-wizard',
  templateUrl: './payment-wizard.component.html',
  styleUrls: ['./payment-wizard.component.scss']
})
export class PaymentWizardComponent implements OnInit {
  constructor(
    private paymentWizardService: PaymentWizardService,
    private dataService: DataService
  ) {}
  selectedPackage: Package;
  paymentSteps = PaymentSteps;
  activeStep: PaymentWizard;

  ngOnInit() {
    this.paymentWizardService.wizardUpdate$.subscribe(paymentWizard => {
      this.activeStep = paymentWizard;
      this.selectedPackage = this.dataService.selectedPackage;
    });
  }
}
