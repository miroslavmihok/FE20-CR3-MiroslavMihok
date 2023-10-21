export interface IProducts {
  id: number;
  name: string;
  price: number;
  ingredients: string;
  img: string;
  available: boolean;
  quantity: number;
  description?: string;
}
