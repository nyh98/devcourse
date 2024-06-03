import React, { useMemo } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Cart } from '../../models/cart.model';
import Title from '../common/Title';
import { formatNumber } from '../../utils/formatNumber';
import CheckButton from './CheckButton';

interface Props {
  cart: Cart;
  checkedItems: number[];
  onCheck: (id: number) => void;
}

export default function CartItem({ cart, checkedItems, onCheck }: Props) {
  const isChecked = useMemo(() => {
    return checkedItems.includes(cart.id);
  }, []);

  const handleCheck = () => {
    onCheck(cart.id);
  };
  return (
    <CartItemStyle>
      <div className="info">
        <CheckButton isChecked={isChecked} onCheck={handleCheck} />
        <div>
          <Title size="medium" color="text">
            {cart.title}
          </Title>
          <div className="summary">{cart.summary}</div>
          <div className="price">{formatNumber(cart.price)}원</div>
          <div className="quantity">{cart.quantity} 권</div>
        </div>
      </div>
      <Button size="medium" scheme="normal">
        장바구니 삭제
      </Button>
    </CartItemStyle>
  );
}

const CartItemStyle = styled.div``;
