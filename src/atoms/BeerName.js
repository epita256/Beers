import styled from 'styled-components';

const BeerName = styled.div`
  font-size: 30px;
  font-weight: 900;
  color: #613b00;
  text-shadow: #b79703 0px 0px 3px;
  ${(props) => props.style};
`

export default BeerName;