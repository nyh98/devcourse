import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchBooks } from '../api/books.pai';
import { getItemSrc } from '../utils/getImgSrc';
import Title from '../components/common/Title';
import { Book } from '../models/book.model';
import { formatNumber } from '../utils/formatNumber';
import LikeButton from '../components/books/LikeButton';
import AddToCart from '../components/books/AddToCart';

const bookInfoDetail = [
  {
    label: '카테고리',
    key: 'category_id',
    filter: (book: Book) => <Link to={`/book/category_id=${book.category_id}`}>소설</Link>,
  },
  { label: '포맷', key: 'form' },
  { label: '페이지', key: 'pages' },
  { label: 'ISBN', key: 'isbn' },
  { label: '출간일', key: 'pubDate' },
  { label: '가격', key: 'price', filter: (book: Book) => `${formatNumber(book.price)}원` },
];

export default function BookDetail() {
  const { bookId } = useParams();
  const { books } = fetchBooks(bookId);
  const [book] = books;
  return (
    <BookDetailStyle>
      <header className="header">
        <div className="img">
          <img src={getItemSrc(book.img)} alt={book.title} />
        </div>
        <div className="info">
          <Title size="large" color="text">
            {book.title}
          </Title>

          {bookInfoDetail.map(item => (
            <dl>
              <dt>{item.label}</dt>
              <dd>{item.filter ? item.filter(book) : book[item.key as keyof Book]}</dd>
            </dl>
          ))}
          <p className="summary">{book.summary}</p>

          <div className="like">
            <LikeButton book={book} onClick={() => {}} />
          </div>
          <div className="add-cart">
            <AddToCart />
          </div>
        </div>
      </header>
      <div className="content">
        <Title size="medium">상세 설명</Title>
        <p className="detail">{book.detail}</p>
        <Title size="medium">목차</Title>
        <p className="index">{book.contents}</p>
      </div>
    </BookDetailStyle>
  );
}

const BookDetailStyle = styled.div`
  .header {
    display: flex;
    align-items: start;
    gap: 24px;
    padding: 0 0 24px 0;

    .img {
      flex: 1;
      img {
        width: 100%;
        height: auto;
      }
    }

    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 12px;

      dl {
        display: flex;
        margin: 0;
        dt {
          width: 80px;
          color: ${({ theme }) => theme.color.secondary};
        }
        a {
          color: ${({ theme }) => theme.color.primary};
        }
      }
    }
  }
`;
