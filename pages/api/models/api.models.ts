export interface DataProducts {
  id: number;
  brand: string;
  image: string;
  style: string;
  substyle: string;
  abv: string;
  origin: string;
  information: string;
  skus: Skus[];
}

export interface Skus {
  code: string;
  name: string;
}

export type Message = {
  message: string;
};

export type StockPrice = {
  [key: number]: {
    stock: number;
    price: number;
  };
};
