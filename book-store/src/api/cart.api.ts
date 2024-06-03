import { Cart } from '../models/cart.model';

export const fetchCart = (): Cart[] => {
  return [{ id: 1, bookId: 1, title: '제목', summary: '설명', quantity: 1, price: 999999 }];
};
