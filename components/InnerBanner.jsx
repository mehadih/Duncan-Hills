import {Img} from "./Img";
import React from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import {ParallaxBanner, ParallaxBannerLayer, ParallaxProvider} from "react-scroll-parallax";
import Title from "./Title";

const InnerBanner = ({title, pageTitle, img, full}) => {

    return (
        <StyledInnerBanner full={full} className="InnerBanner">
            <Container>
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
                    </Col>
                </Row>
            </Container>

        </StyledInnerBanner>
    );
};

const StyledInnerBanner = styled.section`
  position: relative;
  padding-top: 200px;

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

  @media (max-width: 991px) {
    padding-top: 150px;
    .InnerBanner__parallax {
      padding-top: calc(200 / 345 * 100%);
    }
  }

`;

export default InnerBanner;
