import styled from 'styled-components';
import { BookReview } from '../../models/book.model';

interface Props {
  review: BookReview;
}

export default function BookReviewItem({ review }: Props) {
  return (
    <BookReviewItemStyle>
      <header>
        <div>
          <span>{review.userName}</span>
          <span>{review.score}</span>
        </div>
        <div>{review.createdAt}</div>
      </header>
      <div className="content">
        <p>{review.content}</p>
      </div>
    </BookReviewItemStyle>
  );
}

const BookReviewItemStyle = styled.div``;
