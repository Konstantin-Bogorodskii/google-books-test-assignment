import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import BookItem from './BookItem';
import { fetchBooks, fetchMoreBooks, fetchBooksError } from '../store/reducers/booksSlice';
import { API_URL, API_KEY } from '../api/api';
import axios from 'axios';

function BooksList({ searchValue }) {
  const { books, totalItems, startIndex, error } = useSelector(state => state.booksReducer);
  const dispatch = useDispatch();

  if (error) {
    return <h1>{error}</h1>;
  }

  const handleLoadMore = async () => {
    dispatch(fetchBooks());
    const response = await axios
      .get(`${API_URL}${searchValue}&startIndex=${startIndex}&maxResults=30&:keyes&key=${API_KEY}`)
      .then(res => dispatch(fetchMoreBooks(res.data)))
      .catch(err => dispatch(fetchBooksError(err.message)));
  };

  if (books.length > 0) {
    return (
      <Section>
        <div className="container">
          <TotalResults>{`Found ${totalItems} results`}</TotalResults>
          <BooksWrap>
            {books.map(book => {
              return <BookItem book={book} key={book.id} />;
            })}
          </BooksWrap>
          <ShowMore className="btn-reset" onClick={handleLoadMore}>
            Show More
          </ShowMore>
        </div>
      </Section>
    );
  } else {
    return <h1>Начните поиск...</h1>;
  }
}

const Section = styled.section`
  padding: var(--main-offset) 0;
`;
const TotalResults = styled.h2`
  margin: 0;
  margin-bottom: var(--second-offset);
  font: var(--bold-main-font);
  color: var(--color-dark);
  text-align: center;
`;

const BooksWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: var(--second-offset);
  align-items: flex-start;
`;

const ShowMore = styled.button`
  display: block;
  margin: var(--main-offset) auto 0;
  overflow: hidden;
  border-radius: 0.4rem;
  padding: 1.5rem 5.5rem;
  font: var(--normal-main-font);
  transition: background-color 0.3 ease-in-out;
  color: var(--color-white);
  background-color: var(--color-grey);
  text-align: center;

  &:hover,
  &:focus {
    box-shadow: 0 0 5px var(--color-blue), 0 0 12px var(--color-blue);
    background-color: var(--color-blue);
  }
`;

export default BooksList;
