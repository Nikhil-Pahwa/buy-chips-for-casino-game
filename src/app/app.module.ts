import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { PackageSelectionComponent } from './package-selection/package-selection.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataService } from './data.service';
import { CreditCardComponent } from './payment-method/credit-card/credit-card.component';
import { DebitCardComponent } from './payment-method/debit-card/debit-card.component';
import { NetBankingComponent } from './payment-method/net-banking/net-banking.component';
import { WalletComponent } from './payment-method/wallet/wallet.component';
import { CashCardComponent } from './payment-method/cash-card/cash-card.component';
import { CardInfoPanelComponent } from './payment-method/card-info-panel/card-info-panel.component';
import { SuccessfulDepositComponent } from './successful-deposit/successful-deposit.component';
import { PaymentWizardComponent } from './payment-wizard/payment-wizard.component';
import { SharedModule } from 'src/shared/shared.module';
import { TestPackageListService } from './package-selection/test-package-list-service';
import { PackageListService } from './package-selection/package-list.service';
import { PackageMethodService } from './payment-method/payment-method-service';
import { TestPackageMethodService } from './payment-method/test-payment-method-service';
import { PaymentWizardService } from './payment-wizard/payment-wizard.service';

function TestPackageMethodServiceFactory() {
  return new TestPackageMethodService();
}

function PackageListServiceFactory() {
  return new TestPackageListService();
}
@NgModule({
  declarations: [
    AppComponent,
    PackageSelectionComponent,
    PaymentMethodComponent,
    PageNotFoundComponent,
    CreditCardComponent,
    DebitCardComponent,
    NetBankingComponent,
    WalletComponent,
    CashCardComponent,
    CardInfoPanelComponent,
    SuccessfulDepositComponent,
    PaymentWizardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    SharedModule
  ],
  providers: [
    DataService,
    PaymentWizardService,
    {
      provide: PackageMethodService,
      useFactory: TestPackageMethodServiceFactory
    },
    { provide: PackageListService, useFactory: PackageListServiceFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
