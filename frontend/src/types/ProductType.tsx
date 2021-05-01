/**
 * Type for a product.
 */
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  size: string;
  color: string;
  price: number;
}

/**
 * An object with keys being productIds and values being amount of that product
 */
export type Cart = {
  [key: string]: number;
};
