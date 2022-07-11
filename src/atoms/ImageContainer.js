import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  margin: ${(props) => props.margin};
`

export default ImageContainer;
