import Image from 'next/image';
import styled from 'styled-components';

import ImageContainer from '../atoms/ImageContainer';

const Loading = () => (
  <LoadingContainer>
    <ImageContainer width='25%' height='50%'>
      <Image src='/img/loading.gif' layout='fill' objectFit='contain' />
    </ImageContainer>
    <StyledDiv>Loading...</StyledDiv>
  </LoadingContainer>
)

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #0000008c;
`

const StyledDiv = styled.div`
    margin: 15px 0;
    font-size: 70px;
    font-weight: 900;
    color: #e1e1e1;
    width: 25%;
    text-align: center;
`

export default Loading;