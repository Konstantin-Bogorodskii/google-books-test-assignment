import React, { useState } from 'react';
import Header from './Header';
import BooksList from './BooksList';

function Home() {
  const [searchValue, setSearchValue] = useState('');
  const handleSearchValue = e => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Header searchValue={searchValue} handleSearchValue={handleSearchValue} />
      <BooksList searchValue={searchValue} />
    </>
  );
}

export default Home;
