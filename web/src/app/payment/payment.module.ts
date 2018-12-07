import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PackageSelectionComponent } from './package-selection/package-selection.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { CreditCardComponent } from './payment-method/credit-card/credit-card.component';
import { DebitCardComponent } from './payment-method/debit-card/debit-card.component';
import { NetBankingComponent } from './payment-method/net-banking/net-banking.component';
import { WalletComponent } from './payment-method/wallet/wallet.component';
import { CashCardComponent } from './payment-method/cash-card/cash-card.component';
import { CardInfoPanelComponent } from './payment-method/card-info-panel/card-info-panel.component';
import { SuccessfulDepositComponent } from './successful-deposit/successful-deposit.component';
import { PaymentWizardComponent } from './payment-wizard/payment-wizard.component';
import { DataService } from './data.service';
import { PaymentWizardService } from './payment-wizard/payment-wizard.service';
import { PackageMethodService } from './payment-method/payment-method-service';
import { PackageListService } from './package-selection/package-list.service';
import { TestPackageMethodService } from './payment-method/test-payment-method-service';
import { TestPackageListService } from './package-selection/test-package-list-service';
import { PaymentGuard } from './payment.guard';
import { paymentRoutes } from './payment.routes';

function TestPackageMethodServiceFactory(httpClient: HttpClient) {
  // return new PackageMethodService(httpClient);
  return new TestPackageMethodService();
}

function PackageListServiceFactory(httpClient: HttpClient) {
  //  return new PackageListService(httpClient);
  return new TestPackageListService();
}

@NgModule({
  declarations: [
    PackageSelectionComponent,
    PaymentMethodComponent,
    CreditCardComponent,
    DebitCardComponent,
    NetBankingComponent,
    WalletComponent,
    CashCardComponent,
    CardInfoPanelComponent,
    SuccessfulDepositComponent,
    PaymentWizardComponent
  ],
  exports: [PaymentWizardComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(paymentRoutes)
  ],
  providers: [
    DataService,
    PaymentWizardService,
    PaymentGuard,
    {
      provide: PackageMethodService,
      useFactory: TestPackageMethodServiceFactory,
      deps: [HttpClient]
    },
    {
      provide: PackageListService,
      useFactory: PackageListServiceFactory,
      deps: [HttpClient]
    }
  ]
})
export class PaymentModule {}
