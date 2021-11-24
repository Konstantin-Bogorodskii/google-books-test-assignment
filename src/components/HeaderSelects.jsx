import React from 'react';
import styled from 'styled-components';

function HeaderSelects() {
  return (
    <SelectsGroup>
      <Select>
        <label htmlFor="categories">Categories</label>
        <select name="categories" id="categories">
          <option defaultValue>All</option>
          <option>Art</option>
          <option>Biography</option>
          <option>Computers</option>
          <option>History</option>
          <option>Medical</option>
          <option>Poetry</option>
        </select>
      </Select>
      <Select>
        <label htmlFor="sortby">Sort by</label>
        <select name="sortby" id="sortby">
          <option>Relevance</option>
          <option defaultValue>Newest</option>
        </select>
      </Select>
    </SelectsGroup>
  );
}

const SelectsGroup = styled.div`
  z-index: 20;
`;
const Select = styled.div``;

export default HeaderSelects;
