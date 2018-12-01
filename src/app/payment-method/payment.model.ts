export class CreditCard {
  types: string[];
}

export class DebitCard {
  types: string[];
}

export class NetBanking {
  banks: string[];
}

export class PaymentMethods {
  creditCard?: CreditCard;
  debitCard?: DebitCard;
  netBanking?: NetBanking;
}

export class CardInfo {
  cardType: string;
  cardNo: number;
  expYear: number;
  expMonth: number;
  cvvNo: number;
}

export const defaultCardInfo = {
  cardType: '',
  cardNo: undefined,
  expYear: 0,
  expMonth: 0,
  cvvNo: undefined
};
