import React from 'react';
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';
import styled from 'styled-components';

interface Props {
  isChecked: boolean;
  onCheck: () => void;
}

export default function CheckButton({ isChecked, onCheck }: Props) {
  return <CheckButtonStyle onClick={onCheck}>{isChecked ? <FaRegCheckCircle /> : <FaRegCircle />}</CheckButtonStyle>;
}

const CheckButtonStyle = styled.button``;
