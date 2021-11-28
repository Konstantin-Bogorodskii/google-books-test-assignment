import React from 'react';
import styled from 'styled-components';

function Loader() {
  return <LoaderWrap></LoaderWrap>;
}

const LoaderWrap = styled.div`
  width: 6rem;
  height: 6rem;
  border: 5px solid var(--color-blue);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
