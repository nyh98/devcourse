import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Book } from '../models/book.model';
import { Pagenation } from '../models/pagenation.model';

export const useBooks = () => {
  const location = useLocation();
  const [books, setBooks] = useState<Book[]>([]);

  const [pagenation, setPagenation] = useState<Pagenation>({ totalCount: 0, currentPage: 1 });

  
};
