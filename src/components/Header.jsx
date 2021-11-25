import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderSelects from './HeaderSelects';
import { API_URL, API_KEY } from '../api/api';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getBooks } from '../store/reducers/booksSlice';
import BooksList from './BooksList';

function Header() {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    if (searchValue.length === 0) {
      return alert('Пожалуйста, заполните поле ввода!');
    }
    setIsLoading(true);
    setTimeout(() => {
      const response = axios
        .get(`${API_URL}${searchValue}&:keyes&key=${API_KEY}`)
        .then(res => dispatch(getBooks(res.data)))
        .catch(err => alert(err.message))
        .finally(() => setIsLoading(false));
    }, 500);
  };

  const handleSearchValue = e => {
    setSearchValue(e.target.value);
  };

  return (
    <HeaderWrap>
      <Wrap className="container">
        <Filter></Filter>
        <Title>Search for Books</Title>
        <SearchForm action="#" onSubmit={handleSubmit}>
          <SearchInput
            value={searchValue}
            onChange={handleSearchValue}
            type="text"
            placeholder="Book Search..."
          />
          <SearchButton className="btn-reset" type="submit">
            <img src="/images/search.svg" alt="Search for book" />
          </SearchButton>
        </SearchForm>
        <HeaderSelects />
        {isLoading ? <h1>Идёт загрузка</h1> : <BooksList />}
      </Wrap>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.header`
  background-image: url('../../images/header-bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 80vh;
  background-attachment: fixed;
  position: relative;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: var(--main-offset);
  color: var(--color-white);
  font: var(--bold-title);
  text-align: center;
  z-index: 20;
`;

const Filter = styled.div`
  &::after {
    background-color: var(--color-dark);
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 10;
  }
`;

const SearchForm = styled.form`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 0.6rem;
  height: 4.5rem;
  width: 100%;
  max-width: 70rem;
  z-index: 20;
  margin-bottom: var(--main-offset);
`;
const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: var(--small-offset) 7.5rem var(--small-offset) var(--second-offset);
  background: var(--color-alto);
  border: none;
  outline: none;
  font: var(--normal-small-font);
  color: var(--color-dark);
  transition: background-color 0.3s ease-in-out;

  &:focus {
    background-color: var(--color-grey);
    color: var(--color-light);
    font-size: 1.6rem;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 65px;
  border: none;
  outline: none;
  background: var(--color-grey);
  transition: all 0.5s linear 0;

  &:hover,
  &:focus {
    opacity: 0.7;
    background: var(--color-blue);
  }
`;
