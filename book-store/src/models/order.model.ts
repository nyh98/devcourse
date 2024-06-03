export interface Order {
  id: number;
  createAt: string;
  address: string;
  receiver: string;
  contact: string;
  bookTitle: string;
  totalQuantity: number;
  totalPrice: number;
}

export interface OrderSheet {
  items: number[];
  totalQuantity: number;
  totalPrice: number;
  firstBookTitle: string;
  delivery: {
    adrress: string;
    receiver: string;
    contact: string;
  };
}
