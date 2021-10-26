export interface IProduct {
  _id?: string;
  name: string;
  category: string;
  description: string;
  store: string;
  image: string;
  price: number;
}

export interface IAuthData {
  name: string;
  email: string;
  id: string;
  role: string;
  status: string;
  token: string;
}
