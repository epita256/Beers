import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { selectBeerInfo } from '../reducer/beers/selectors';
import { getBeerInfo } from '../reducer/beers/actions';

import BeerName from '../atoms/BeerName';
import BeerTagline from '../atoms/BeerTagline';
import BeerAbv from '../atoms/BeerAbv';
import BeerInfo from '../atoms/BeerInfo';

import Close from '../assets/close';

const Modal = ({ show, onClose, id }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    show && dispatch(getBeerInfo(id))
  }, [dispatch, show]);

  const {
    data
  } = useSelector(selectBeerInfo, shallowEqual);

  if (!show) return null
  return (
    <ModalWrapper>
      <Closecontainer onClick={onClose}>
        <Close />
      </Closecontainer>
      <ContentModalContainer>
        {data?.map(el => (
          <>
            <BeerNameWrapper>
              <div>
                <BeerName style={{ textAlign: "left", marginBottom: "20px" }}>
                  {el.name}
                </BeerName>
                <BeerTagline>
                  {el.tagline}
                </BeerTagline>
              </div>
              <BeerAbv>
                {el.abv}%
              </BeerAbv>
            </BeerNameWrapper>
            <BeerInfo style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              height: "80%"
            }}>
              {el.description}
            </BeerInfo>
          </>
        ))}
      </ContentModalContainer>
    </ModalWrapper>
  )

}

const BeerNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ModalWrapper = styled.div`
  position: fixed;
  background-color: #00000082;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentModalContainer = styled.div`
  height: 40%;
  width: 20%;
  background-color: black;
  position: fixed;
  background-color: #e8dac2;
  border-radius: 10px;
  padding: 20px;
`

const Closecontainer = styled.div`
  position: fixed;
  right: 40%;
  top: 30%;
  z-index: 2;

  :hover {
    cursor: pointer;
  }
`

export default Modal;
