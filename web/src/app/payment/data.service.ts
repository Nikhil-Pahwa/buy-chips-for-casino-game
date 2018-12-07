import { Injectable } from '@angular/core';

import { PaymentMethods } from './payment-method/payment.model';
import { Package } from './package-selection/package';

@Injectable()
export class DataService {
  private selectedPack: Package = undefined;
  private paymentMethodsList: PaymentMethods = undefined;

  constructor() {}

  set selectedPackage(pack: Package) {
    this.selectedPack = pack;
  }

  get selectedPackage(): Package {
    return this.selectedPack;
  }

  set paymentMethods(paymentMethods: PaymentMethods) {
    this.paymentMethodsList = paymentMethods;
  }

  get paymentMethods(): PaymentMethods {
    return this.paymentMethodsList;
  }
}
