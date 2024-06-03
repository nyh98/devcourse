import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../components/common/Title';
import { fetchCart } from '../api/cart.api';
import CartItem from '../components/cart/CartItem';
import Button from '../components/common/Button';
import { useAlert } from '../hooks/useAlert';
import { OrderSheet } from '../models/order.model';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const cart = fetchCart();
  const showAlert = useAlert();
  const navigate = useNavigate();
  const handleCheck = (id: number) => {
    if (checkedItems.includes(id)) {
      //언체크
      setCheckedItems(checkedItems.filter(Iid => Iid !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  const handleOrder = () => {
    if (checkedItems.length === 0) {
      showAlert('주문할 상품을 선택해 주세요');
      return;
    }

    //주문서 작성 데이터 전달
    const orderData: Omit<OrderSheet, 'delivery'> = {
      items: checkedItems,
      totalPrice: 999999,
      totalQuantity: 1,
      firstBookTitle: cart[0].title,
    };

    navigate('/order', { state: orderData });
  };
  return (
    <>
      <Title size="large">장바구니</Title>
      <CartStyle>
        <div className="content">
          {cart.map(item => (
            <CartItem key={item.id} onCheck={handleCheck} cart={item} checkedItems={checkedItems}></CartItem>
          ))}
        </div>
        <div className="summary">
          <Button size="large" scheme="primary">
            주문 하기
          </Button>
        </div>
      </CartStyle>
    </>
  );
}

const CartStyle = styled.div``;
