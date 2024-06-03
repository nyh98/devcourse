import { dummyBook } from '../components/books/BooksList';
import { LIMIT } from '../const/pagenation';
import { Book } from '../models/book.model';
import { Pagenation } from '../models/pagenation.model';
import { httpClient } from './http';

interface Params {
  category_id?: number;
  news?: boolean;
  currentPage?: number;
  limit: number;
}

interface Res {
  books: Book[];
  pagenation: Pagenation;
}
export const fetchBooks = (bookId?: string): Res => {
  //   httpClient.get<Res>('/books');
  if (bookId) {
    return { books: [dummyBook], pagenation: { currentPage: 1, totalCount: LIMIT } };
  }
  return {
    books: [dummyBook, dummyBook, dummyBook, dummyBook, dummyBook],
    pagenation: { currentPage: 1, totalCount: LIMIT },
  };
};
