import styled from 'styled-components';

const BeerAbv = styled.div`
  width: fit-content;
  align-self: flex-end;
  font-size: 21px;
  color: #613b00;
  background-color: #e8e3c28f;
  border-radius: 100%;
  padding: 5px;
  ${(props) => props.style};
`
export default BeerAbv;