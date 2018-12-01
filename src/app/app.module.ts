import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PackageSelectionComponent } from './package-selection/package-selection.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataService } from './data/data.service';
import { CreditCardComponent } from './payment-method/credit-card/credit-card.component';
import { DebitCardComponent } from './payment-method/debit-card/debit-card.component';
import { NetBankingComponent } from './payment-method/net-banking/net-banking.component';
import { WalletComponent } from './payment-method/wallet/wallet.component';
import { CashCardComponent } from './payment-method/cash-card/cash-card.component';
import { CardInfoPanelComponent } from './payment-method/card-info-panel/card-info-panel.component';
import { SuccessfulDepositComponent } from './successful-deposit/successful-deposit.component';
import { PaymentWizardComponent } from './payment-wizard/payment-wizard.component';
import { SharedModule } from 'src/shared/sharaed.module';

const appRoutes: Routes = [
  { path: 'package-selection', component: PackageSelectionComponent },
  {
    path: 'payment-method',
    component: PaymentMethodComponent,
    children: [
      {
        path: 'credit-card',
        component: CreditCardComponent
      },
      {
        path: 'debit-card',
        component: DebitCardComponent
      },
      {
        path: 'net-banking',
        component: NetBankingComponent
      },
      {
        path: 'wallet',
        component: WalletComponent
      },
      {
        path: 'cash-card',
        component: CashCardComponent
      }
    ]
  },
  { path: 'successful-deposit', component: SuccessfulDepositComponent },
  { path: '', redirectTo: '/package-selection', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

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
    RouterModule.forRoot(appRoutes),
    SharedModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
