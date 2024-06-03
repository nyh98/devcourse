import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Book } from '../../models/book.model';
import { FaHeart } from 'react-icons/fa';

interface Props {
  book: Book;
  onClick: () => void;
}

export default function LikeButton({ book, onClick }: Props) {
  return (
    <LikeButtonStyle size="medium" scheme="normal">
      <FaHeart />
      {book.likes}
    </LikeButtonStyle>
  );
}

const LikeButtonStyle = styled(Button)``;
