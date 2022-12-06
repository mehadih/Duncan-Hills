import React from 'react';
import styled from "styled-components";
import Link from 'next/link'
import {Container, Row, Col} from "react-bootstrap";
import img1 from '../../public/images/static/Animation - Commodities.jpg'
import img2 from '../../public/images/static/masonryy2.jpg'
import img3 from '../../public/images/static/masonry3.jpg'
import img4 from '../../public/images/static/masonry4.jpg'
import {Img} from "../Img";
import Title from "../Title";
import {transition} from "../../styles/globalStyleVars";
import ReactHtmlParser from "react-html-parser";

const Distinct = ({data}) => {

    const title = data?.title;
    const text_image = data?.text_image;

    const masonryOption = {
        fitWidth: false,
        columnWidth: 370,
        gutter: 30,
        itemSelector: ".photo-item"
    }
    return (
        <StyledDistinct id={'Commodities'} className='distinct  pb-200'>

            <Container>
                <Row className='distinct__title'>
                    <Col lg={6} sm={12}>
                        <div className='text-center'>
                            <Title text={title} fontSize={'80'} fontWeight={'400'} color={'#F2EEE8'} lineHeight={'80'}
                                   margin={'0px 0px 42px 0px'}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        text_image?.length > 0 && text_image?.map((item) => (
                            <Col md={6} key={item?.id}>
                                <div className='distinct__img'>
                                    <Img src={item?.image}></Img>
                                    <div className='distinct__img__content'>
                                        <h2>{item?.subtitle}</h2>
                                        <div className='distinct__img__content__bottom'>
                                            <p>{ReactHtmlParser(item?.description)}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </StyledDistinct>
    );
};
const StyledDistinct = styled.section`
  background-color: #252E47;
  @media (max-width: 767px) {
    padding-bottom: 150px;
    padding-top: 150px;

  }

  .col-md-6 {
    padding-left: 0px;
    padding-right: 0px;

    @media (max-width: 767px) {
      padding-left: 15px !important;
      padding-right: 15px !important;
      margin-bottom: 40px;
      :nth-child(odd) {
        padding-left: 0px;
        padding-right: 40px;
        padding-top: 0px !important;
      }

      :nth-child(1) {
        padding-top: 0px !important;
      }

      :nth-child(even) {
        padding-left: 40px;
        padding-right: 0px;
        margin-bottom: 40px !important;
      }
    };

    :nth-child(odd) {
      padding-left: 0px;
      padding-right: 40px;
      padding-top: 90px;

    }

    :nth-child(even) {
      padding-left: 40px;
      padding-right: 0px;
      margin-bottom: 80px;
    }
  }

  .distinct {
    &__title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 72px;

      h1 {
        font-size: 80px;
        font-weight: 400;
        line-height: 80px;
        color: #F2EEE8;
      }
    }

    &__img {
      position: relative;
      padding-top: calc(570 / 445 * 100%);
      overflow: hidden;


      @media (max-width: 768px) {
        padding-top: calc(420 / 345 * 100%);

      };


      &:after {
        width: 100%;
        height: 100%;
        position: absolute !important;
        top: 0px;
        content: '';
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
      }

      &__content {
        position: absolute;
        bottom: 40px;
        left: 40px;
        right: 40px;
        z-index: 1;
        transform: translateY(calc(100% - 30px));
        transition: transform ${transition};


        h2 {
          color: #F2EEE8;
          font-weight: 700;
          font-size: 24px;
          line-height: 32px;
          //transition: 0.5s;
          text-transform: uppercase;
          //margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        p {
          font-size: 20px;
          color: #F2EEE8;
          font-weight: 400;
          margin-bottom: 7px;
          transition: 0.5s;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;

          margin-top: 20px;
        }

        &__bottom {
          opacity: 0;
          transition: opacity ${transition};
        }
      }

      &:hover {

        .distinct__img__content {
          transform: none;

          h2 {
            -webkit-line-clamp: 5;
          }

          &__bottom {
            opacity: 1;
          }
        }

      }

    }
  }

  @media (max-width: 767px) {
    padding-top: 0;
    .distinct__title {
      margin-bottom: 0;
    }
  }


`
export default Distinct;