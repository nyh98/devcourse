import { useEffect, useState } from 'react';
import { Category } from '../models/category.model';
import { fetchCategory } from '../api/category.api';
import { useLocation } from 'react-router-dom';

export const useCategory = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const location = useLocation();

  const setActive = () => {
    const params = new URLSearchParams(location.search);
    if (params.get('catagory_id')) {
      setCategory(prev => prev.map(item => ({ ...item, isActive: item.id === Number(params.get('catagory_id')) })));
    }
  };
  useEffect(() => {
    fetchCategory()
      .then(category => {
        if (!category) return;
        const categoryWithAll = [{ id: null, name: '전체' }, ...category];

        setCategory(categoryWithAll);
      })
      .catch(() => {
        const categoryWithAll = [
          { id: null, name: '전체' },
          { id: 1, name: '동화' },
          { id: 2, name: '소설' },
          { id: 3, name: '사회' },
        ];
        setActive();
        setCategory(categoryWithAll);
      });
  }, []);

  return { category };
};
