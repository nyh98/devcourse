import { BookReview } from '../models/book.model';
import { httpClient } from './http';

export const fetchBookReview = async (bookId: string) => {
  return httpClient.get<BookReview[]>(`http://localhost:9999/reviews/${bookId}`);
};
