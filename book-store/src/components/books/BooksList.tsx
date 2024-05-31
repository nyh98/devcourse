import styled from 'styled-components';
import { Book } from '../../models/book.model';
import BookItem from './BookItem';

export const dummyBook: Book = {
  id: 1,
  title: '제목',
  img: 5,
  category_id: 1,
  form: '폼',
  isbn: '샘플',
  summary: '내용',
  detail: '상세 내용',
  author: '저작자',
  pages: 13,
  contents: '콘텐츠',
  price: 999999,
  likes: 5,
  pubDate: '2024-00-00',
};

interface Props {
  books: Book[];
}

export default function BooksList({ books }: Props) {
  return (
    <BooksListStyle>
      {books.map(item => (
        <BookItem key={item.id} book={item}></BookItem>
      ))}
    </BooksListStyle>
  );
}

const BooksListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;
