import React from 'react';
import styled from "styled-components";
import Link from 'next/link'
import {Container, Row, Col} from "react-bootstrap";
import img from '../public/images/static/extracted_logos_sanmar_belgravia_logo.svg'
import {Img} from "./Img";
import Title from "./Title";
import ReactHtmlParser from "react-html-parser";
import {title} from "../styles/globalStyleVars";

const OverviewWithImage = ({data}) => {
    const overview_short_desc = data?.short_description;
    const overview_title = data?.title;
    const overview_description = data?.description;
    const overview_icon = data?.icon;


    return (
        <StyledOverviewWithImage id={'overview'} className='overview pt-200 pb-200'>
            <div className="shadow-right">
                <svg xmlns="http://www.w3.org/2000/svg" width="189.26" height="188.797" viewBox="0 0 189.26 188.797">
                    <path id="Path_6955" data-name="Path 6955"
                          d="M174.345,56.817a42.338,42.338,0,0,0,.463-7.867,50.441,50.441,0,0,0-19.435-39.8C146.581,2.676,136.4-.1,122.056-.1H94.291V50.8C76.245,48.488,58.2,55.891,47.555,69.774,41.076,78.566,38.3,88.746,38.3,103.091v27.764H89.2a69.552,69.552,0,0,0-.925,9.255,50.441,50.441,0,0,0,19.435,39.8c8.792,6.478,18.972,9.255,33.317,9.255h27.764V136.871a69.542,69.542,0,0,0,9.255.925,50.44,50.44,0,0,0,39.8-19.435c6.478-8.792,9.255-18.972,9.255-33.317V57.28H174.345Zm-39.8,35.631a42.34,42.34,0,0,1-.463-7.867V61.907H168.33A45.269,45.269,0,0,1,152.6,85.044,35.578,35.578,0,0,1,134.55,92.448ZM101.7,7.3h20.361c12.957,0,22.211,2.314,29.615,8.329a41.65,41.65,0,0,1,16.659,33.78,56.968,56.968,0,0,1-.925,9.255v.463H132.236V84.118a41.817,41.817,0,0,0-6.016-12.031,46.553,46.553,0,0,0-24.062-16.659V7.3Zm30.078,97.175V126.69H95.217a42.307,42.307,0,0,1,15.27-21.286,40.191,40.191,0,0,1,20.823-7.867A30.642,30.642,0,0,1,131.773,104.479ZM99.382,57.28a41.752,41.752,0,0,1,24.062,16.2c3.7,5.09,6.478,11.568,7.867,19.9a59,59,0,0,1-9.255.463H99.382ZM45.7,124.377V104.016C45.7,91.06,48.018,81.8,54.033,74.4,61.9,63.758,74.394,57.742,88.276,57.742a63.232,63.232,0,0,1,8.792.925h.463V95.687h28.69a37.879,37.879,0,0,0-15.733,6.941c-6.941,5.09-12.494,12.957-15.733,21.286H45.7Zm116.147,58.768H141.491c-12.957,0-22.211-2.314-29.615-8.329a41.65,41.65,0,0,1-16.659-33.78,45.638,45.638,0,0,1,1.388-11.106v-.463h37.019V104.479a52.087,52.087,0,0,0,6.016,12.494c5.09,6.941,12.957,12.494,21.286,15.733v50.439Zm2.314-52.752a42.307,42.307,0,0,1-21.286-15.27c-3.7-5.09-6.016-10.643-7.4-18.047,1.851,0,4.165-.463,6.478-.463h22.211v33.78Zm56.454-45.811c0,12.957-2.314,22.211-8.329,29.615a41.65,41.65,0,0,1-33.78,16.659,45.637,45.637,0,0,1-11.106-1.388h-.463V94.761h-28.69a37.878,37.878,0,0,0,15.733-6.941,43.429,43.429,0,0,0,16.2-23.137h49.976v19.9Z"
                          transform="translate(189.16 -38.3) rotate(90)" fill="#8f6d4f" opacity="0.2"/>
                </svg>
            </div>
            <Container>
                <Row>
                    <Col md={12} className={'titles'}>
                        {ReactHtmlParser(overview_short_desc)}


                    </Col>
                </Row>
                <Row className='pt-75'>
                    <Col md={{span: 3}} className='overview__img'>
                        <div className='overview__img__single'>
                            <Img src={overview_icon}/>
                        </div>
                    </Col>
                    <Col md={{span: 9}}>
                        <div className='overview__text'>
                            <Title text={overview_title} fontSize={'24'} fontWeight={'700'} color={'#252E47'}
                                   lineHeight={'32'}/>
                            {ReactHtmlParser(overview_description)}
                        </div>
                    </Col>
                </Row>

            </Container>

        </StyledOverviewWithImage>
    );
};
const StyledOverviewWithImage = styled.section`
  overflow: hidden;
  background-color: #FFFFFF;
  position: relative;

  .shadow-right {
    position: absolute;
    top: 292px;
    right: -94px;
    height: fit-content;
  }

  @media (max-width: 767px) {
    padding-bottom: 90px;
  }

  .pt-75 {
    padding-top: 75px;
  }

  .titles {
    p {
      font-size: 48px;
      font-weight: 400;
      line-height: 48px;
      color: #252E47;
      font-family: ${title};
    }
  }


  .overview {
    &__img {
      //padding-right: 186px;
      &__single {
        position: relative;
        width: 112px;
        height: 100px;
        //padding-top: calc(100/112*100%);             
      }
    }

    &__text {
      p {
        font-size: 20px;
        line-height: 28px;
        font-weight: 400;
      }

      h2 {
        font-family: 'Oregon LDO' !important;
        margin-bottom: 17px;
        font-weight: bold;
        @media (max-width: 767px) {
          margin-bottom: 17px;
          font-size: 20px;
          line-height: 28px;
          margin-top: 40px;
        }
      }
    }

  }

  @media (max-width: 767px) {
    p {
      font-size: 36px !important;
      line-height: 36px !important;
    }

    .overview__text p {
      font-size: 20px !important;
      line-height: 28px !important;

    }
  }

`
export default OverviewWithImage;