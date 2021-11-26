import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import BookItem from './BookItem';

function BooksList() {
  const { books, totalItems, isLoading, error } = useSelector(state => state.booksReducer);
  return (
    <Section>
      <div className="container">
        <TotalResults>{books.length > 0 ? `Found ${totalItems} results` : null}</TotalResults>
        <BooksWrap>
          {!isLoading &&
            books.map(book => {
              return <BookItem book={book} key={book.id} />;
            })}
        </BooksWrap>
      </div>
    </Section>
  );
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

export default BooksList;
