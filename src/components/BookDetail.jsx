import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBook, fetchBookSuccess, fetchBookError } from '../store/reducers/selectedBookSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../UI/Loader';
import { API_BOOK, API_KEY } from '../api/api';
import axios from 'axios';
import Header from './Header';
import styled from 'styled-components';

function BookDetail() {
  const { book, isLoading, error } = useSelector(state => state.bookReducer);

  //   extraLarge:
  // large:
  // medium:
  // small:
  // smallThumbnail:
  // thumbnail:

  const { bookID } = useParams();
  const dispatch = useDispatch();

  const fetchSelectedProduct = async () => {
    dispatch(fetchBook());
    setTimeout(() => {
      const response = axios
        .get(`${API_BOOK}${bookID}?key=${API_KEY}`)
        .then(res => dispatch(fetchBookSuccess(res.data)))
        .catch(err => dispatch(fetchBookError(err.message)));
    }, 1000);
  };

  useEffect(() => {
    if (bookID && bookID !== '') {
      fetchSelectedProduct();
    }
  }, []);

  if (isLoading) {
    return (
      <LoaderBox>
        <Loader />
      </LoaderBox>
    );
  } else {
    // const {
    //   title = '',
    //   authors = [],
    //   imageLinks = { smallThumbnail: '' },
    //   categories = [''],
    //   description = '',
    // } = book.volumeInfo;
    console.log(book.volumeInfo);

    return (
      <>
        <Header />
        <Section>
          <Wrap className="container">
            {/* <Img>
              <img src={imageLinks.large} alt={title} />
            </Img>
            <BookText>
              <Category>{categories.toSting()}</Category>
              <h3>{title}</h3>
              <p>{authors.join(', ')}</p>
              <p>{description}</p>
            </BookText> */}
          </Wrap>
        </Section>
      </>
    );
  }
}

const LoaderBox = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-alto);
`;

const Section = styled.section`
  padding: var(--main-offset) 0;
  background: var(--color-alto);
  min-height: 60vh;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Img = styled.div`
  width: calc(60% - var(--pre-big-offset));
  height: 40rem;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const BookText = styled.div`
  display: flex;
  flex-direction: column;
`;
const Category = styled.div``;

export default BookDetail;
