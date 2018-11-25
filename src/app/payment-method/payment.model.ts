export class CreditCard {
  types: string[];
}

export class DeditCard {
  types: string[];
}

export class NetBanking {
  banks: string[];
}

export class PaymentMethods {
  creditCard?: CreditCard;
  debitCard?: DeditCard;
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
