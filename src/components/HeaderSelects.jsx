import React, { useState } from 'react';
import styled from 'styled-components';
import MySelect from '../UI/MySelect';

function HeaderSelects() {
  const [categorie, setCategorie] = useState('all');
  const [sort, setSort] = useState('relevance');

  const handleCategorie = e => {
    setCategorie(e.target.value);
    // setBooks([...books].sort((a, b) => a[e.target.value].localCompare()))
  };

  const handleSort = e => {
    setSort(e.target.value);
  };

  console.log(categorie, sort);

  return (
    <SelectsGroup>
      <MySelect
        options={[
          { value: 'art' },
          { value: 'biography' },
          { value: 'computers' },
          { value: 'history' },
          { value: 'medical' },
          { value: 'poetry' },
        ]}
        defaultValue="all"
        id="categories"
        label="Categories"
        value={categorie}
        onChange={handleCategorie}
      />
      <MySelect
        options={[{ value: 'newest' }]}
        defaultValue="relevance"
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

export default HeaderSelects;
