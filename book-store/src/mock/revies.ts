import { http, HttpResponse } from 'msw';
import { BookReview } from '../models/book.model';

export const reviewsById = http.get('http://localhost:9999/reviews/:bookId', () => {
  const data: BookReview[] = [{ id: 1, userName: '이름', content: '내용', createdAt: '2024-05-05', score: 4 }];

  return HttpResponse.json(data, {
    status: 200,
  });
});
