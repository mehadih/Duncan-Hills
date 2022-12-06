import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import q1 from '../../public/images/dynamic/q1.jpg';
import q2 from '../../public/images/dynamic/12.jpg';
import q3 from '../../public/images/dynamic/q2.1.jpg';
import q4 from '../../public/images/dynamic/q3.jpg';
import {Img} from "../Img";
import {title} from "../../styles/globalStyleVars";
import {ParallaxProvider, Parallax} from "react-scroll-parallax";
import ReactHtmlParser from "react-html-parser";

const MyComponent = ({data}) => {
    return (
        <ParallaxProvider>
            <StyledComponent className={'quotes pt-200 pb-200 '}>
                <div className="quotes__items row">
                    <Col sm={2} className={'quotes__items__left pr-0'}>

                        <Parallax className={'parrallax_two'} speed={15}
                                  easing="easeInQuad">
                            <img src={data?.image3} alt=""/>
                        </Parallax>

                    </Col>
                    <Col sm={{span: 6, offset: 1}} className={'quotes__items__center p-0'}>
                        <div className={'quotes__items__center__inner'}>
                            <Img src={data?.image1}/>
                            <div className="quotes__items__center__inner__text">
                                <Parallax className={'parrallax_two'} speed={8}
                                          easing="easeInQuad">
                                    <h4>{ReactHtmlParser(data?.title)}</h4>
                                </Parallax>
                                <Parallax className={'parrallax_two'} speed={4}
                                          easing="easeInQuad">
                                    <p>{data?.subtitle}</p>
                                </Parallax>
                            </div>

                        </div>
                        <div className="quotes__items__center__inner__bottom">
                            <Parallax className={'parrallax_two'} speed={12} easing="easeInQuad">
                                <img src={data?.image2} alt=""/>
                            </Parallax>
                        </div>

                    </Col>
                    <Col sm={{span: 2, offset: 1}} className={'quotes__items__right'}>
                        <Parallax className={'parrallax_two'} speed={25} easing="easeInQuad">
                            <img src={data?.image4} alt=""/>
                        </Parallax>
                    </Col>

                </div>
            </StyledComponent>
        </ParallaxProvider>
    );
};

const StyledComponent = styled.section`
  position: relative;
  overflow: hidden;

  .quotes__items {
    &__left {
      padding-top: 10%;

      img {
        max-width: 100%;
      }
    }

    &__center {
      &__inner {
        position: relative;
        padding-top: calc(620 / 630 * 100%);

        &__text {
          position: absolute;
          bottom: 42px;
          left: 40px;
          right: 40px;
          text-align: center;
          z-index: 2;

          h4 {
            margin-bottom: 50px;
            color: #f2eee8;
            font-size: 80px;
            line-height: 80px;
            text-transform: uppercase;
            font-family: ${title};
          }

          p {
            color: #f2eee8;
            font-size: 20px;
            text-transform: uppercase;
          }
        }

        &__bottom {
          position: absolute;
          right: -80px;
          bottom: -100px;
        }
      }
    }

    &__right {
      text-align: right;
      padding-top: 30%;

      img {
        max-width: 100%;
      }
    }
  }

  @media (max-width: 991px) {
    .quotes__items__center__inner__text h4 {
      font-size: 45px;
      line-height: 50px;
    }
  }

  @media (max-width: 767px) {


    .quotes__items__left {
      position: absolute;
      top: 0;
      padding-top: 0;
      min-width: 33.33%;
      max-width: 40%;
    }

    .quotes__items__center {
      min-width: 100%;
      margin: 0;
      padding-left: 30px !important;
      padding-right: 30px !important;

      &__inner__text {
        left: 20px;
        right: 20px;
        top: 0;
        bottom: 0;
        margin: auto;
        height: fit-content;

        h4 {
          font-size: 35px;
          line-height: 40px;
          margin-bottom: 30px;
        }
      }

      &__inner__bottom {
        right: -15px;
        bottom: 0;
        position: relative;
        text-align: right;
      }
    }

    .quotes__items__right {
      padding-top: 0;
      text-align: right;
      min-width: 33.33%;
      position: absolute;
      margin: 0;
      bottom: 15%;
      right: -50px;
    }

  }

`;

export default MyComponent;
