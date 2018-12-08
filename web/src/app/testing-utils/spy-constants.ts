import { PaymentMethods } from '../payment/payment-method/payment.model';

export const dummyPackages = [
  {
    packageId: 12,
    promotion: {
      label: 'Bonus',
      value: 100
    },
    amount: 50
  },
  {
    packageId: 10,
    promotion: {
      label: 'Bonus',
      value: 100
    },
    amount: 100
  },
  {
    packageId: 9,
    amount: 200
  },
  {
    packageId: 7,
    isUserInput: true
  }
];

export const dummyPaymentMethods: PaymentMethods = {
  creditCard: { types: ['cc-test-1', 'cc-test-2'] },
  debitCard: { types: ['dc-test-1', 'dc-test-2'] },
  netBanking: { banks: ['Axis', 'Canara', 'Punjab National'] }
};
