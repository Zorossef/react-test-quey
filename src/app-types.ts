export type ProductsType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail?: string;
  images?: [];
};

export interface DataProduct {
  limit: number;
  products: ProductsType[];
  skip: number;
  total: number;
}
