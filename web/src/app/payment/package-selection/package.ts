export interface Promotion {
  label: string;
  value: number;
}

export interface Package {
  packageId: number;
  promotion?: Promotion;
  amount?: number;
  isUserInput?: boolean;
}
