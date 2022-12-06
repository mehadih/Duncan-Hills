import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import MissionBg from '../public/images/dynamic/mission.jpg';
import MissionBg2 from '../public/images/dynamic/mission2.jpg';
import {Img} from "./Img";
import {title} from "../styles/globalStyleVars";
import ReactHtmlParser from "react-html-parser";

const MyComponent = ({data, title}) => {

    const mission = data?.description1?.[0];
    const vision = data?.description2?.[0];
    const desc1 = data?.description1;
    const desc2 = data?.description2

    return (
        <StyledComponent className={'mission-vision pt-200 pb-200'}>
            <Container>
                <Row>
                    <Col sm={12} className={'mission-vision-col'}>
                        <div className="mission-vision__banner">
                            <Img src={data?.image1}/>
                        </div>
                        <img src={data?.image2} className={'left'} alt=""/>

                    </Col>


                    <Col className={'mission-vision__content flex-wrap'} sm={{span: 8, offset: 4}}>

                        {title &&
                            <Col sm={12} className={'section-title'}>
                                <h4>Customers above all</h4>
                            </Col>
                        }

                        <Col sm={6}>
                            {!title && <h4>{mission?.title}</h4>}
                            {!title && ReactHtmlParser(mission?.description)}
                            {title && ReactHtmlParser(desc2)}

                        </Col>
                        <Col sm={6}>
                            {!title && <h4>{vision?.title}</h4>}
                            {!title && ReactHtmlParser(vision?.description)}
                            {title && ReactHtmlParser(desc2)}

                        </Col>
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  background-color: #F2EEE8;

  .col-sm-12.mission-vision-col {
    padding-left: 200px;
    position: relative;

    img.left {
      position: absolute;
      max-width: calc(33.33% - 15px);
      object-fit: contain;
      left: 15px;
      bottom: 0;
      transform: translateY(50%);
    }
  }

  .mission-vision__banner {
    padding-top: calc(600 / 970 * 100%);
    position: relative;
  }


  .mission-vision__content {
    padding-left: 50px;
    margin-top: 70px;
    display: flex;

    .section-title {
      padding-left: 30px;

      h4 {
        font-size: 48px;
        line-height: 48px;
        color: #736640;
        margin-bottom: 40px;
        font-family: ${title};
      }
    }

    h4 {
      font-size: 48px;
      line-height: 48px;
      color: #736640;
      margin-bottom: 40px;
      font-family: ${title};
    }


    p {
      font-size: 20px;
      line-height: 28px;
    }

    .col-sm-6 {
      &:nth-of-type(even) {
        padding-left: 30px;
      }

      &:nth-of-type(odd) {
        padding-right: 30px;
      }
    }

  }

  @media (max-width: 991px) {

    .col-sm-12.mission-vision-col {
      padding: 0;
      margin: 0;
    }

    img.left {
      left: auto !important;
      right: 0;
      width: 13%;
    }

    .mission-vision__content {
      min-width: 100%;
      margin: 0;
      flex-wrap: wrap;
      margin-top: 40px;
      padding-left: 0;

      .col-sm-6 {
        min-width: 100%;
        padding: 0px !important;

        &:nth-last-of-type(1) {
          margin-top: 45px;
        }
      }

      h4 {
        font-size: 36px;
        line-height: 36px;
        margin-bottom: 30px;
      }
    }
  }

  @media (max-width: 767px) {
    .mission-vision__banner {
      width: calc(100% - 20px)
    }

    .mission-vision__content {
      padding-left: 15px;
      padding-right: 15px;

      .section-title {
        padding-left: 0;
      }
    }

    img.left {
      width: 25%;
    }
  }


`;

export default MyComponent;
