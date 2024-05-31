import styled from 'styled-components';
import Title from '../components/common/Title';
import BooksFilter from '../components/books/BooksFilter';
import BooksViewSwicher from '../components/books/BooksViewSwicher';
import BooksList from '../components/books/BooksList';
import BooksEmpty from '../components/books/BooksEmpty';
import Pagenation from '../components/books/Pagenation';
import { useBooks } from '../hooks/useBooks';
import { fetchBooks } from '../api/books.pai';

export default function Books() {
  const { books, pagenation } = fetchBooks();
  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BooksStyle>
        <BooksFilter />
        <BooksViewSwicher />
        {books.length > 0 ? <BooksList books={books} /> : <BooksEmpty />}

        <Pagenation />
      </BooksStyle>
    </>
  );
}

const BooksStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`;
