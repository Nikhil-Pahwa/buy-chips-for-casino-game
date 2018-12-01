import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Package } from 'src/app/package-selection/package';
import { PaymentMethods } from './payment-method/payment.model';

@Injectable()
export class DataService {
  private selectedPack: Package = undefined;
  private paymentMethodsList: PaymentMethods = undefined;

  constructor(private http: HttpClient) {}

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