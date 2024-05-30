import { render, screen } from '@testing-library/react';
import Title from './Title';
import { BookStoreThemeProvider } from '../../context/ThemeContext';

describe('title 컴포넌트 테스트', () => {
  it('렌더 확인', () => {
    render(
      <BookStoreThemeProvider>
        <Title size="large">제목</Title>
      </BookStoreThemeProvider>
    );

    expect(screen.getByText('제목')).toBeInTheDocument();
  });
});
