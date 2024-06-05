import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../components/common/Title';
import Button from '../components/common/Button';
import InputText from '../components/common/InputText';

export default function Order() {
  const location = useLocation();
  const orderDataFromCart = location.state;

  return (
    <Title size="large">
      주문서 작성
      <OrderStyle>
        <div className="contetn">
          <div className="order-info">
            <Title size="medium" color="text">
              배송 정보
            </Title>
            <form>
              <fieldset>
                <label>주소</label>
                <div className="input">
                  <InputText inputType="text"></InputText>
                </div>
              </fieldset>
              <fieldset>
                <label>상세 주소</label>
                <div className="input">
                  <InputText inputType="text"></InputText>
                </div>
              </fieldset>
              <fieldset>
                <label>수령인</label>
                <div className="input">
                  <InputText inputType="text"></InputText>
                </div>
              </fieldset>
              <fieldset>
                <label>전화 번호</label>
                <div className="input">
                  <InputText inputType="text"></InputText>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="summary">
          <Button size="large" scheme="primary">
            주문 하기
          </Button>
        </div>
      </OrderStyle>
      ;
    </Title>
  );
}

const OrderStyle = styled.div``;
