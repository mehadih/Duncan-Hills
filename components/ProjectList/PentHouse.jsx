import React from 'react';
import img from "../../public/images/static/penthouse.jpg";
import styled from "styled-components";
import {Img} from "../Img";
import {Row, Col, Container} from "react-bootstrap";
import Link from 'next/link'
import {transition} from "../../styles/globalStyleVars";

const PentHouse = ({data}) => {
    const penthouse_title = data?.title;
    const penthouse_subtitle = data?.subtitle;
    const penthouse_img = data?.image;
    const penthouse_desc = data?.short_desc;

    return (
        <StyledPentHouse className='penthouse pb-200'>
            <Container>
                <div className='penthouse__img'>
                    <Img src={penthouse_img}/>
                    <Row className='d-flex justify-content-center'>
                        <Link href={'/'}><a/></Link>
                        <Col md={7} className='penthouse__img__content text-center'>
                            <div className='penthouse__img__content__top'>
                                <h2>{penthouse_title}</h2>
                            </div>
                            <div className='penthouse__img__content__bottom'>
                                <h2>{penthouse_subtitle}</h2>
                                <p>{penthouse_desc}</p>
                                <Link href='/'>
                                    <a>
                                        <div className='go-btn hover'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="38.414" height="30.828"
                                                 viewBox="0 0 38.414 30.828">
                                                <g id="Group_13211" data-name="Group 13211"
                                                   transform="translate(-818.573 -2890.544)">
                                                    <line id="Line_3546" data-name="Line 3546" x1="36"
                                                          transform="translate(819.573 2905.958)" fill="none"
                                                          stroke="#736640"
                                                          stroke-linecap="round" stroke-width="2"/>
                                                    <line id="Line_3547" data-name="Line 3547" x1="14" y1="14"
                                                          transform="translate(841.573 2891.958)" fill="none"
                                                          stroke="#736640"
                                                          stroke-linecap="round" stroke-width="2"/>
                                                    <line id="Line_3548" data-name="Line 3548" x1="14" y2="14"
                                                          transform="translate(841.573 2905.958)" fill="none"
                                                          stroke="#736640"
                                                          stroke-linecap="round" stroke-width="2"/>
                                                </g>
                                            </svg>

                                        </div>
                                    </a>
                                </Link>

                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </StyledPentHouse>
    );
};
const StyledPentHouse = styled.section`
  background-color: #FFFFFF;

  .row {
    margin-left: 0;
    margin-right: 0;
  }

  .penthouse {
    &__img {
      padding-top: calc(550 / 1170 * 100%);
      position: relative;
      overflow: hidden;
      @media (max-width: 768px) {
        padding-top: calc(345 / 345 * 100%);
      };

      &:after {
        width: 100%;
        height: 100%;
        position: absolute !important;
        top: 0px;
        content: '';
        background: rgba(0, 0, 0, 0.4);
      }

      &__content {
        z-index: 1;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: fit-content;
        transform: translateY(calc(50% - 20px));
        transition: transform ${transition};

        h2 {
          text-transform: uppercase;
          color: #F2EEE8;
          font-size: 24px;
          font-weight: bold;
          line-height: 32px;
          margin-bottom: 42px;
        }


        &__bottom {
          opacity: 0;
          transition: opacity ${transition};

          h2 {
            margin-bottom: 20px;
          }

          p {
            font-size: 20px;
            line-height: 28px;
            color: #F2EEE8 !important;

          }

          .go-btn {
            height: 80px;
            width: 80px;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            //opacity: 0;
            background-color: #736640;
            transition: opacity ${transition};
            z-index: 6;
            left: 0;
            right: 0;
            margin: 0 auto;
            margin-top: 40px;

            svg {
              line {
                transition: stroke ${transition};
              }
            }

            &.hover:after {
              background-color: #F2EEE8;
              border-radius: 100%;
            }

            &:hover {
              svg line {
                stroke: #F2EEE8;
              }
            }
          }
        }


      }

      &:hover {
        .penthouse__img__content {
          transform: none;

          .penthouse__img__content__bottom {
            opacity: 1;
          }
        }
      }
    }

  }
`
export default PentHouse;