export interface ProductIC {
  id: string;
  imagePath: string;
  title: string;
  netoWeight: string;
  discount: number;
  price: number;
  quantity: number;
}

export interface AddProductProps {
  product: ProductIC;
}

export interface UserState {
  isLoggedIn: boolean;
  user: string | null;
  cart: ProductIC[];
}

export interface RootState {
  user: UserState;
}
