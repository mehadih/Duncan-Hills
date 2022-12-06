import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import Banner from '../../public/images/dynamic/banner.jpg'
import BannerTop from '../../public/images/dynamic/banner-top.jpg'
import {hover} from "../../styles/globalStyleVars";

const MyComponent = ({data}) => {

    // offset
    const [offset, setOffset] = useState(90)
    useEffect(() => {
        setOffset(Number(localStorage.getItem('containeroffset')))
    }, [])

    return (
        <StyledComponent offset={offset} className={'banner-divider'}>
            <img className={'top'} src={data?.image2} alt=""/>
            <img src={data?.image1} alt=""/>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  position: relative;
  margin-top: 200px;

  img {
    width: 100%;
    object-fit: contain;

    &.top {
      position: absolute;
      width: fit-content;
      left: ${props => props.offset}px;
      top: -130px;

    }
  }

  @media (max-width: 991px) {
    margin-top: 100px;
  }

  @media (max-width: 767px) {
    margin-top: 0;
    padding-bottom: 50px;
    background-color: ${hover};
    .top {
      left: 0 !important;
      top: auto !important;
      bottom: 0px;
      height: 100px !important;
    }
  }

`;

export default MyComponent;
