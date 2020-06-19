export interface Drink {
  idDrink?: string;
  strDrinkThumb: string;
  strDrink: string;
}

export type RootStackParamList = {
  Drinks: undefined;
  Filters: undefined;
};

export interface Filter {
  name: string;
  active: boolean;
}
