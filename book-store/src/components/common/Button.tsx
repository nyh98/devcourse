import styled from 'styled-components';
import { ButtonScheme, ButtonSize } from '../../style/Theme';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  scheme: ButtonScheme;
  disabled?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

export default function Button({ scheme, size, disabled, isLoading, children }: Props) {
  return (
    <ButtonStyle size={size} scheme={scheme} disabled={disabled} isLoading={isLoading}>
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button<Omit<Props, 'children'>>`
  font-size: ${({ theme, size }) => theme.button[size].fontSize};
  color: ${({ theme, scheme }) => theme.buttonScheme[scheme].color};
  background-color: ${({ theme, scheme }) => theme.buttonScheme[scheme].backgroundColor};
  border: ${({ theme }) => theme.borderRadius.default};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '0.1')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: ${({ disabled }) => (disabled ? 'none' : 'pointer')};
`;
