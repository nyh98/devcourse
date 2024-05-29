import styled from 'styled-components';

export default function Header() {
  return <HeaderStyle>book store</HeaderStyle>;
}

const HeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.color.background};
`;
