export interface Promotion {
  label: string;
  value: number;
}

export interface Package {
  promotion?: Promotion;
  amount?: number;
  isUserInput?: boolean;
}
