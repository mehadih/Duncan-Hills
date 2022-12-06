import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import {Img} from "../Img";
import banner from '../../public/images/dynamic/map.jpg';

const MyComponent = () => {
    return (
        <StyledComponent className={'map'}>
            <div className="map__inner">
                <a target='_blank' href="https://www.google.com/maps"/>
                <Img src={banner}/>
            </div>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  margin-bottom: 200px;

  .map__inner {
    padding-top: calc(520 / 1366 * 100%);
    position: relative;

    a {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 2;
      left: 0;
      top: 0;
    }
  }

  @media (max-width: 767px) {
    margin-bottom: 50px;
  }

`;

export default MyComponent;
