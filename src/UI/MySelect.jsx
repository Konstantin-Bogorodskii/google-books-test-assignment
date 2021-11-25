import React from 'react';
import styled from 'styled-components';

function MySelect({ options, defaultValue, id, label, value, onChange }) {
  return (
    <Wrap>
      <Label htmlFor={id}>{label}</Label>
      <Select value={value} id={id} onChange={onChange}>
        <Option value={defaultValue}>
          {defaultValue[0].toUpperCase() + defaultValue.slice(1)}
        </Option>
        {options.map(option => {
          return (
            <Option key={option.value} value={option.value}>
              {option.value[0].toUpperCase() + option.value.slice(1)}
            </Option>
          );
        })}
      </Select>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 578px) {
    margin-bottom: var(--main-offset);
  }
`;
const Label = styled.label`
  display: inline-block;
  color: var(--color-white);
  font: var(--bold-main-font);
  margin-right: var(--small-offset);
`;
const Select = styled.select`
  position: relative;
  width: 15rem;
  margin: 0;
  padding: 0.6rem 0.8rem 0.6rem 1rem;
  height: 2.8rem;
  font: var(--normal-small-font);
  color: var(--color-grey);
  text-shadow: 0 1p var(--color-alto);
  background: var(--color-alto);
  border: 0;
  border-radius: 0;
  -webkit-appearance: none;
  cursor: pointer;

  &:focus {
    z-index: 3;
    color: #394349;
    outline: 2px solid var(--color-blue);
  }
`;
const Option = styled.option`
  margin: 3px;
  padding: 6px 8px;
  text-shadow: none;
  background: #f2f2f2;
  border-radius: 3px;
  cursor: pointer;
`;

export default MySelect;
