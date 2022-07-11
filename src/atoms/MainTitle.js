import styled from 'styled-components';

const MainTitle = styled.div`
  display: flex;
  position: relative;
  width:  '100%';
  height: '100%';
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: #ffffff;
  text-align: center;
  ${(props) => props.style};
`

export default MainTitle;
