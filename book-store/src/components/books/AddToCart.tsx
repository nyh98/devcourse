import React, { useState } from 'react';
import styled from 'styled-components';
import InputText from '../common/InputText';
import Button from '../common/Button';

export default function AddToCart() {
  const [quantity, setQuantity] = useState<number>();

  const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <AddToCartStyle>
      <InputText inputType="number" value={quantity} onChange={handleChage} />
      <Button size="medium" scheme="normal">
        +
      </Button>
      <Button size="medium" scheme="normal">
        -
      </Button>
      <Button size="medium" scheme="primary">
        장바구니 담기
      </Button>
    </AddToCartStyle>
  );
}

const AddToCartStyle = styled.div``;
