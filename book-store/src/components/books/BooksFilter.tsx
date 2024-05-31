import React from 'react';
import styled from 'styled-components';
import { useCategory } from '../../hooks/useCategory';
import Button from '../common/Button';
import { useLocation, useSearchParams } from 'react-router-dom';
import { QUERYSTRING } from '../../const/queryString';

export default function BooksFilter() {
  const { category } = useCategory();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleCategorys = (id: number | null) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (id === null) {
      newSearchParams.delete(QUERYSTRING.CATEGORY_ID);
    } else {
      newSearchParams.set(QUERYSTRING.CATEGORY_ID, id.toString());
    }
    console.log(newSearchParams);
    setSearchParams(newSearchParams);
  };

  const currentCategory = searchParams.get(QUERYSTRING.CATEGORY_ID);

  return (
    <BooksFilterStyle>
      <div className="category">
        {category.map(item => (
          <Button
            size="medium"
            scheme={currentCategory === item.id?.toString() ? 'primary' : 'normal'}
            key={item.id}
            onClick={() => {
              handleCategorys(item.id);
            }}
          >
            {item.name}
          </Button>
        ))}
      </div>
      <div className="new">
        <Button size="medium" scheme="normal">
          신간
        </Button>
      </div>
    </BooksFilterStyle>
  );
}

const BooksFilterStyle = styled.div`
  display: flex;
  gap: 24px;

  .category {
    display: flex;
    gap: 8px;
  }
`;
