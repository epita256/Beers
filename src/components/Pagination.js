import React from 'react';
import styled, { css } from 'styled-components';
import Arrow from '../assets/arrow';

const Pagination = ({ count, onClick }) => {

  return (
    <PaginationContainer>
      <PaginationButton onClick={() => onClick()}>
        <Arrow />
      </PaginationButton>
      {count}
      <PaginationButton isRight onClick={() => onClick(true)}>
        <Arrow />
      </PaginationButton >
    </PaginationContainer>
  )

}

const PaginationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-start: 1;
  grid-column-end: 4;
  justify-items: center;
  align-items: center;
  margin-top: 50px;
  width: 20%;
  border-radius: 5px;
  border: 1px solid #926800;
  margin-top: 50px;
  background-color: #e6aa14;
`

const PaginationButton = styled.button`
  height: 40px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  outline: unset;
  border: none;
  background-color: unset;
  border-radius: 3px;
  transition: all 0.5s ease-out;

  :hover {
    background-color: #e8e3c28f;
  }
  ${({ isRight }) => isRight && css`
     transform: rotate(180deg);
  `}
`
export default Pagination;