import { Subject } from 'rxjs';
import { PaymentWizard } from './payment-wizard';

export class PaymentWizardService {
  wizardUpdate$ = new Subject<PaymentWizard>();
}
