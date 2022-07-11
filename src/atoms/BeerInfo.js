import styled from 'styled-components';

const BeerInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-right: 35px;
  justify-content: space-around;
  ${(props) => props.style};
`
export default BeerInfo;