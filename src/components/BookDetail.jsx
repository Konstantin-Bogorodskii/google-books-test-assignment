import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBook, fetchBookSuccess, fetchBookError } from '../store/reducers/selectedBookSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../UI/Loader';
import { API_BOOK, API_KEY } from '../api/api';
import axios from 'axios';
import styled from 'styled-components';

function BookDetail() {
  const { bookID } = useParams();
  const dispatch = useDispatch();

  const fetchSelectedProduct = async () => {
    dispatch(fetchBook());
    const response = await axios
      .get(`${API_BOOK}${bookID}?key=${API_KEY}`)
      .then(res => dispatch(fetchBookSuccess(res.data)))
      .catch(err => dispatch(fetchBookError(err.message)));
  };

  useEffect(() => {
    if (bookID && bookID !== '') {
      fetchSelectedProduct();
    }
  }, []);

  const { book, isLoading, error } = useSelector(state => state.bookReducer);

  if (!isLoading && book) {
    const {
      title = '',
      authors = [],
      imageLinks = {
        smallThumbnail:
          'https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg',
      },
      categories = [''],
      description = '',
    } = book.volumeInfo;

    if (error) {
      return <h1>{error}</h1>;
    }

    return (
      <Section>
        <Wrap className="container">
          <Img>
            <img src={imageLinks.smallThumbnail || imageLinks.thumbnail} alt={title} />
          </Img>
          <BookText>
            <Category>{categories.toString()}</Category>
            <h3>{title}</h3>
            <p>{authors.join(', ')}</p>
            <p>{description}</p>
          </BookText>
        </Wrap>
      </Section>
    );
  } else {
    return (
      <Section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Loader />
      </Section>
    );
  }
}

const Section = styled.section`
  padding: var(--main-offset) 0;
  background: var(--color-alto);
  min-height: 60vh;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;
const Img = styled.div`
  width: 100%;
  height: 45rem;
  background: white;
  max-width: 35rem;
  padding: var(--pre-big-offset);
  margin-right: var(--second-offset);

  @media (max-width: 999px) {
    margin-bottom: var(--second-offset);
  }

  @media (max-width: 500px) {
    margin-right: 0;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const BookText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60rem;

  h3 {
    margin: 0;
    margin-bottom: var(--second-offset);
    font: var(--bold-title);
    color: #000;

    @media (max-width: 500px) {
      font-size: 3rem;
    }
  }

  p {
    margin: 0;
    margin-bottom: var(--small-offset);
    font: var(--normal-small-font);
    color: var(--color-dark);
  }
`;
const Category = styled.div`
  margin-bottom: var(--second-offset);
  color: var(--color-grey);
  font: var(--bold-main-font);
`;

export default BookDetail;
