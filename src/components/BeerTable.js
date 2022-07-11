import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import ImageContainer from '../atoms/ImageContainer';
import BeerName from '../atoms/BeerName';
import BeerTagline from '../atoms/BeerTagline';
import BeerAbv from '../atoms/BeerAbv';
import BeerInfo from '../atoms/BeerInfo';
import Wrapper from '../atoms/Wrapper';

import Loading from './Loading';
import Modal from './Modal';

import { selectBeersForPage } from '../reducer/beers/selectors';
import { getBeersForPage } from '../reducer/beers/actions';


export const BeerPage = ({ }) => {
  const dispatch = useDispatch()

  const [showModal, setIsShowModal] = useState({
    isShow: false,
    id: 0,
  })
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      dispatch(getBeersForPage(`${currentPage}`))
      setCurrentPage((currentPage) => currentPage + 1)
      setFetching(false);
    }
  }, [dispatch, fetching]);

  const {
    data,
    isLoading
  } = useSelector(selectBeersForPage, shallowEqual);

  const scroll = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 10) {
      setFetching(true)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scroll)
    return () => {
      document.removeEventListener('scroll', scroll)
    }
  }, [])

  return (
    <>
      <BackToHome>
        <Link href='/'>Back to homepage</Link>
      </BackToHome>
      <Wrapper>
        {data?.map((el, id) => (
          <BeerContainer key={id} onClick={() => setIsShowModal({ isShow: true, id: el.id })}>
            <ImageContainer animation margin='0 80px 0 0'>
              <Image src={el.image || '/img/beer.png'} alt='beer image' layout='fill' objectFit='contain' />
            </ImageContainer>
            <BeerInfo>
              <BeerName>{el.name}</BeerName>
              <BeerTagline>{el.tagline}</BeerTagline>
              <BeerAbv><i>{el.abv}%</i></BeerAbv>
            </BeerInfo>
          </BeerContainer>
        ))
        }
        <Modal show={showModal.isShow} id={showModal.id} onClose={() => setIsShowModal({ ...showModal, isShow: false })} />
      </Wrapper>
      {isLoading && <Loading />}
    </>
  )
}

const BackToHome = styled.div`
a {
  position: fixed;
  height: 36px;
  width: 255px;
  bottom: 0;
  right: 5%;
  margin: 40px;
  color: #916400;
  font-size: 30px;
  text-align: center;
    :hover {
      background: #ffe6af;
    }
}
`

const BeerContainer = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  margin: 20px;
  padding: 10px;
  transition: all 0.5s ease-out;
  color: #585858;
  height: 250px;
  background: url('/img/bg.png') no-repeat center / 100%;
  box-shadow: rgb(230 168 14) 0 1px 20px 11px, rgb(230 168 14) 0 0 3px 4px inset;
  border-radius: 25px;
  width: 70%;
  overflow: hidden;
  
  :hover {
    color: black;
    cursor: pointer;
    background: url('/img/bg.gif') no-repeat center / 100%;

     > div:first-child {
      animation: 0.3s tremor ease-out infinite;
      animation-iteration-count: infinite;

  }
}
`
