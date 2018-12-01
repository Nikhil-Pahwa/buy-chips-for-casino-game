import { PaymentMethods } from '../payment-method/payment.model';

export const dummyPackages = [
  {
    promotion: {
      label: 'Bonus',
      value: 100
    },
    amount: 50
  },
  {
    promotion: {
      label: 'Bonus',
      value: 100
    },
    amount: 100
  },
  {
    amount: 200
  },
  {
    isUserInput: true
  }
];

export const dummyPaymentMethods: PaymentMethods = {
  creditCard: { types: ['cc-test-1', 'cc-test-2'] },
  debitCard: { types: ['dc-test-1', 'dc-test-2'] }
};
