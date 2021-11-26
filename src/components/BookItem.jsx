import React from 'react';
import styled from 'styled-components';

function BookItem({ book }) {
  const { title, authors = [], imageLinks = null, categories = [''] } = book.volumeInfo;
  return (
    <Wrap>
      <img src={imageLinks.smallThumbnail} alt={title} />
      <BookText>
        <Category>{categories[0]}</Category>
        <h3>{title}</h3>
        <p>{authors.join(',')}</p>
      </BookText>
    </Wrap>
  );
}

const Wrap = styled.div`
  background-color: var(--color-light);
  border: none;
  box-shadow: 2px 2px 6px 0px var(--color-dark);
  border-radius: 0.5rem;
  padding: var(--small-offset);
  transition: transform 0.3s ease-in;
  height: 100%;

  img {
    display: block;
    width: 100%;
    object-fit: contain;
    margin-bottom: var(--second-offset);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 2px 2px 26px 0px var(--color-dark);
  }
`;
const Category = styled.div`
  font: var(--bold-small-font);
  margin-bottom: var(--small-offset);
  color: var(--color-grey);
  text-decoration: underline;
`;

const BookText = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0;
    margin-bottom: var(--second-offset);
    font: var(--bold-main-font);
    color: var(--color-dark);
    max-height: 4rem;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    margin: 0;
    font: var(--normal-small-font);
    color: var(--color-grey);
  }
`;

export default BookItem;
