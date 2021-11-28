import React, { useState } from 'react';
import styled from 'styled-components';
import MySelect from '../UI/MySelect';
import { useDispatch } from 'react-redux';
import { changeSort, changeCategory } from '../store/reducers/booksSlice';

function HeaderSelects() {
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  const dispatch = useDispatch();

  const handleCategory = e => {
    setCategory(e.target.value);
    dispatch(changeCategory(e.target.value));
  };

  const handleSort = e => {
    setSort(e.target.value);
    dispatch(changeSort(e.target.value));
  };

  return (
    <SelectsGroup>
      <MySelect
        options={[
          { value: '', text: 'All' },
          { value: 'art', text: 'Art' },
          { value: 'biography', text: 'Biography' },
          { value: 'computers', text: 'Computers' },
          { value: 'history', text: 'History' },
          { value: 'medical', text: 'Medical' },
          { value: 'poetry', text: 'Poetry' },
        ]}
        id="categories"
        label="Categories"
        value={category}
        onChange={handleCategory}
      />
      <MySelect
        options={[
          { value: 'relevance', text: 'Relevance' },
          { value: 'newest', text: 'Newest' },
        ]}
        id="sortby"
        label="Sort by"
        value={sort}
        onChange={handleSort}
      />
    </SelectsGroup>
  );
}

const SelectsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 70rem;
  z-index: 20;

  @media (max-width: 578px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export default React.memo(HeaderSelects);
