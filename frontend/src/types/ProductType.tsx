export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  size: string;
  color: string;
  price: number;
}

export type Cart = {
  [key: string]: number;
};
