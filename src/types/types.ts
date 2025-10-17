export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}



export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

