import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PaymentMethods } from './payment.model';
import { dummyPaymentMethods } from 'src/app/testing-utils/spy-constants';

@Injectable()
export class TestPackageMethodService {
  constructor() {}

  getPaymentMethods(): Observable<PaymentMethods> {
    return of(dummyPaymentMethods);
  }
}
