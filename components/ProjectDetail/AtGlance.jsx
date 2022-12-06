import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Link from 'next/link'
import {Container, Row, Col} from "react-bootstrap";
import img from '../../public/images/static/glance.jpg'
import {Img} from "../Img";
import Title from "../Title";
import ReactHtmlParser from "react-html-parser";

const AtGlance = ({data}) => {

    const title = data?.title;
    const image = data?.image;
    const description = data?.description;

    // offset
    const [offset, setOffset] = useState(90)
    useEffect(() => {
        setOffset(Number(localStorage.getItem('containeroffset')))
    }, [])

    return (
        <StyledOverviewWithImage id={'glance'} className='atglance'>
            <Container className='p-0' fluid>
                <Row>
                    <Col sm={12} lg={5} md={12} className='px-0 pr-0'>
                        <div className="atglance__img">
                            <Img src={image}/>
                        </div>
                    </Col>
                    <Col sm={12} lg={7} md={12} className='atglance__content'
                         style={{paddingRight: offset + 15 + 'px'}}>
                        <div className='atglance__content__title'>
                            <Title text={title} fontSize={'80'} fontWeight={'400'} color={'#252E47'} lineHeight={'80'}/>
                            {ReactHtmlParser(description)}
                        </div>

                    </Col>
                </Row>
            </Container>
        </StyledOverviewWithImage>
    );
};
const StyledOverviewWithImage = styled.section`
  background-color: #FFFFFF;

  .atglance {
    &__img {
      position: relative;
      padding-top: calc(620 / 628 * 100%);
      @media (max-width: 767px) {
        position: relative;
        padding-top: calc(360 / 375 * 100%);
      }
    }

    &__content {
      color: #252E47;
      display: flex;
      align-items: center;
      padding-left: 70px;

      @media (max-width: 991px) {
        padding-top: 50px;
      }
      @media (max-width: 767px) {
        padding-right: 15px !important;
        padding-left: 30px;
      }

      &__title {
        width: 100%;

        h1 {
          font-size: 80px;
          line-height: 80px;
          font-weight: 400;
          text-transform: uppercase;
        }

        table {
          margin-top: 20px;

          tr {
            display: flex;
            width: 100%;
            border-bottom: 1px solid rgba(115, 102, 64, 0.2);
            padding-top: 20px;
            padding-bottom: 20px;

            &:last-child {
              border-bottom: none;
              padding-bottom: 0;

              td {
                padding-bottom: 0;
              }
            }

          }

          &:last-child {
            margin-bottom: 0;

          }

          td {
            font-weight: 400;
            flex: 0 0 65%;
            font-size: 16px;
            line-height: 24px;

            &:first-child {
              font-weight: 600;
              flex: 0 0 35%;
              padding-left: 0px;
              color: #B2A89F;
            }

          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .title {
      margin-bottom: 0 !important;
    }
  }


`;
export default AtGlance;