export interface PaymentWizard {
  selectedStep: PaymentSteps;
}

export enum PaymentSteps {
  packageSelection,
  paymentMethod,
  successfulDeposit
}
