import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PaymentMethods } from './payment.model';
import { AppSettings } from '../app.settings';

@Injectable()
export class PackageMethodService {
  constructor(private http: HttpClient) {}

  getPaymentMethods(): Observable<PaymentMethods> {
    return this.http.get(AppSettings.configUrl.apiPayments);
  }
}
