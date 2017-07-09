export interface Product {
  id: number,
  sku: number,
  title: string,
  brand: string,
  image: string,
  listPrice: string,
  price: string,
  currency: string,
  rating: number,
  installments: any,
  amount?: number,
}
