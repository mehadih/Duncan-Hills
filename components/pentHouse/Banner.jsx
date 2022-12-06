import {Img} from "../Img";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import {ParallaxBanner, ParallaxBannerLayer, ParallaxProvider} from "react-scroll-parallax";
import Title from "../Title";
import {transition} from "../../styles/globalStyleVars";
import arrow from '../../public/images/static/arrow.svg';
import Sticky from 'react-stickynode';
import {Link, animateScroll as scroll} from "react-scroll";

const InnerBanner = ({title, pageTitle, img}) => {

    const [windowWidth, setWindowWidth] = useState(0)
    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])

    return (
        <StyledInnerBanner className="InnerBanner">
            <Container fluid className={'p-0'}>
                <Row>
                    <Col sm={12}>
                        <p>{pageTitle} </p>
                        <Title text={title} center fontSize={80} lineHeight={80}/>
                    </Col>

                    <Col sm={12}>
                        <ParallaxProvider>
                            <ParallaxBanner id="hero-banner"
                                            className="InnerBanner__parallax"

                            >
                                <ParallaxBannerLayer
                                    expanded={false}
                                    translateY={[0, 50]}
                                    shouldAlwaysCompleteAnimation={true}
                                    shouldDisableScalingTranslations={true}

                                >
                                    <Img src={img} alt=""/>
                                </ParallaxBannerLayer>
                            </ParallaxBanner>
                        </ParallaxProvider>

                        {windowWidth > 767 ?
                            <Sticky top={0}>
                                <div className="inner-menu">
                                    <ul>
                                        <li><Link to={'overview'} spy={true} smooth={true} duration={250}
                                        >Overview</Link></li>
                                        <li><Link spy={true} smooth={true} duration={250}
                                                  to={'kensington'}>Kensington</Link></li>
                                        <li><Link spy={true} smooth={true} duration={250}
                                                  to={'knightsbridge'}>knightsbridge</Link></li>
                                        <li><Link spy={true} smooth={true} duration={250}
                                                  to={'belgravia'}>belgravia</Link></li>
                                        <li><Link spy={true} smooth={true} duration={250}
                                                  to={'cavendish'}>cavendish</Link></li>
                                        <li><Link spy={true} smooth={true} duration={250}
                                                  to={'brochure'}>brochure</Link></li>

                                    </ul>
                                </div>
                            </Sticky>

                            :

                            <div className="inner-menu">
                                <ul>
                                    <li><Link to={'overview'} spy={true} smooth={true} duration={250}
                                    >Overview</Link></li>
                                    <li><Link spy={true} smooth={true} duration={250}
                                              to={'kensington'}>Kensington</Link></li>
                                    <li><Link spy={true} smooth={true} duration={250}
                                              to={'knightsbridge'}>knightsbridge</Link></li>
                                    <li><Link spy={true} smooth={true} duration={250}
                                              to={'belgravia'}>belgravia</Link></li>
                                    <li><Link spy={true} smooth={true} duration={250}
                                              to={'cavendish'}>cavendish</Link></li>
                                    <li><Link spy={true} smooth={true} duration={250}
                                              to={'brochure'}>brochure</Link></li>

                                </ul>
                            </div>
                        }


                    </Col>

                </Row>
            </Container>

        </StyledInnerBanner>
    );
};

const StyledInnerBanner = styled.section`
  position: relative;
  padding-top: 200px;
  overflow: hidden;

  p {
    font-size: 16px;
    text-transform: uppercase;
    line-height: 24px;
    color: #b2a89f;
    text-align: center;
  }

  .title {
    margin-bottom: 0;
  }

  .InnerBanner__parallax {
    padding-top: calc(480 / 1170 * 100%);
    position: relative;
    margin-top: 20px;

    .container {
      position: absolute;
      margin: auto;
      left: 50%;
      z-index: 2;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  }

  .inner-menu {
    height: 80px;
    background-color: #C9CACC;

    ul {
      display: flex;
      width: 100%;
      justify-content: center;

      li {
        &:not(:nth-last-of-type(1)) {
          margin-right: 50px;
        }


        a {
          font-size: 16px;
          line-height: 24px;
          color: #34342e;
          height: 80px;
          justify-content: center;
          align-items: center;
          display: flex;
          text-transform: uppercase;
          position: relative;

          &:after {
            content: '';
            position: absolute;
            height: 1px;
            background-color: #34342E;
            width: 0;
            left: 0;
            bottom: 30px;
            transition: width ${transition};
          }

          &:hover {
            &:after {
              width: 100%;
            }
          }

          &.active {
            &:after {
              width: 100%;
            }
          }
        }
      }
    }
  }

  @media (max-width: 991px) {
    padding-top: 150px;
    .InnerBanner__parallax {
      padding-top: calc(200 / 345 * 100%);
    }

    .inner-menu ul li:not(:nth-last-of-type(1)) {
      margin-right: 30px;
    }
  }

  @media (max-width: 767px) {

    .inner-menu {
      height: 60px;

      ul {
        justify-content: flex-start;
        padding-left: 15px;
        padding-right: 15px;

        li {
          width: 100%;
          margin: 0 !important;

          &:not(:nth-of-type(1)) {
            display: none;
          }

          a {
            width: 100%;
            justify-content: flex-start;
            height: 60px;

            &:after {
              display: none;
            }

            &:nth-of-type(1):after {
              content: '';
              background: url(${arrow});
              background-repeat: no-repeat;
              border-radius: 50%;
              background-position: center;
              height: 24px;
              width: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #34342E;
              transform: rotate(90deg);
              position: absolute;
              right: 0;
              left: auto;
              top: 0;
              bottom: 0;
              margin: auto;
            }
          }
        }
      }
    }
  }


`;

export default InnerBanner;
