import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.gridColumn || 'repeat(2, 1fr)'};
  justify-items: center;
  align-items: center;
  ${(props) => props.style};
`

export default Wrapper;