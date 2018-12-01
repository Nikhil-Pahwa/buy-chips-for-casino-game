import { Routes } from '@angular/router';
import { PackageSelectionComponent } from './package-selection/package-selection.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { CreditCardComponent } from './payment-method/credit-card/credit-card.component';
import { DebitCardComponent } from './payment-method/debit-card/debit-card.component';
import { NetBankingComponent } from './payment-method/net-banking/net-banking.component';
import { WalletComponent } from './payment-method/wallet/wallet.component';
import { CashCardComponent } from './payment-method/cash-card/cash-card.component';
import { SuccessfulDepositComponent } from './successful-deposit/successful-deposit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const appRoutes: Routes = [
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
