import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import Img1 from '../../public/images/dynamic/z1.jpg'
import Img2 from '../../public/images/dynamic/z1.1.jpg'
import Img3 from '../../public/images/dynamic/m2.1.jpg'
import Img4 from '../../public/images/dynamic/m2.2.jpg'
import Img5 from '../../public/images/dynamic/m3.jpg'
import Img6 from '../../public/images/dynamic/m3.2.jpg'
import Img7 from '../../public/images/dynamic/m4.jpg'
import Img8 from '../../public/images/dynamic/m4.2.jpg'

import Logo from '../../public/images/static/logo.svg'
import Title from "../Title";
import {Links} from "../Link";
import {Img} from '../Img'
import ReactHtmlParser from "react-html-parser";
import {ParallaxProvider, Parallax} from "react-scroll-parallax";

const MyComponent = ({data}) => {
    return (

        <StyledWrap>
            {
                data && data.length > 0 &&
                data.map((element, index) => {

                    return (
                        <ParallaxProvider>
                            <StyledComponent className={'zigzag pb-200'} key={index}>
                                <Container>
                                    <Row>
                                        <Col className={'zigzag__img pr-0'} sm={{span: 6}}>
                                            <div className="zigzag__img__inner">

                                                <Img src={element?.image1}/>

                                            </div>

                                            <img className={'bottom'} src={element?.image2} alt=""/>

                                        </Col>
                                        <Col className={'zigzag__text'} sm={{span: 6}}>
                                            <img src={element?.logo} alt=""/>
                                            <Title text={element?.title} fontWeight={400} fontSize={'48'}
                                                   margin={'0 0 40px 0'}
                                                   lineHeight={'48'}/>
                                            <h4>{element?.subtitle}</h4>
                                            {ReactHtmlParser(element?.description)}

                                        <Links link={`/project/${element?.slug}`} text={'read more'} margin={'24px 0 0  0'}/>

                                            <div className="shadow-right">
                                                <svg width="259.228" height="212.153"
                                                     viewBox="0 0 259.228 212.153">
                                                    <g id="Group_18012" data-name="Group 18012"
                                                       transform="translate(-1018.773 -2192.973)">
                                                        <path id="Path_6956" data-name="Path 6956"
                                                              d="M154.828,48.652a36.264,36.264,0,0,0,.4-6.738A43.2,43.2,0,0,0,138.578,7.827C131.047,2.278,122.327-.1,110.04-.1H86.259V43.5C70.8,41.517,55.343,47.859,46.227,59.75,40.678,67.28,38.3,76,38.3,88.287v23.781H81.9A59.575,59.575,0,0,0,81.106,120a43.2,43.2,0,0,0,16.647,34.087c7.531,5.549,16.251,7.927,28.538,7.927h23.781V117.221a59.566,59.566,0,0,0,7.927.793,43.2,43.2,0,0,0,34.086-16.647c5.549-7.531,7.927-16.251,7.927-28.538V49.048H154.828ZM120.742,79.171a36.267,36.267,0,0,1-.4-6.738V53.012h29.33A38.775,38.775,0,0,1,136.2,72.829,30.474,30.474,0,0,1,120.742,79.171ZM92.6,6.242h17.44c11.1,0,19.025,1.982,25.367,7.134A35.675,35.675,0,0,1,149.676,42.31a48.8,48.8,0,0,1-.793,7.927v.4H118.76v21.4a35.818,35.818,0,0,0-5.153-10.305A39.875,39.875,0,0,0,93,47.463V6.242Zm25.763,83.235V108.5H87.052a36.238,36.238,0,0,1,13.08-18.232,34.425,34.425,0,0,1,17.836-6.738A26.246,26.246,0,0,1,118.364,89.476ZM90.619,49.048a35.762,35.762,0,0,1,20.61,13.872,39.422,39.422,0,0,1,6.738,17.043,50.535,50.535,0,0,1-7.927.4H90.619ZM44.642,106.52V89.08c0-11.1,1.982-19.025,7.134-25.367,6.738-9.116,17.44-14.269,29.33-14.269a54.161,54.161,0,0,1,7.531.793h.4V81.946h24.574a32.445,32.445,0,0,0-13.476,5.945,41.587,41.587,0,0,0-13.476,18.232H44.642Zm99.485,50.337h-17.44c-11.1,0-19.025-1.982-25.367-7.134a35.675,35.675,0,0,1-14.269-28.934,39.09,39.09,0,0,1,1.189-9.513v-.4h31.708v-21.4a44.615,44.615,0,0,0,5.153,10.7,41.587,41.587,0,0,0,18.232,13.476v43.2Zm1.982-45.184a35.5,35.5,0,0,1-24.574-28.538c1.585,0,3.567-.4,5.549-.4h19.025v28.934Zm48.355-39.239c0,11.1-1.982,19.025-7.134,25.367A35.675,35.675,0,0,1,158.4,112.069a39.09,39.09,0,0,1-9.512-1.189h-.4V81.153H123.913a32.444,32.444,0,0,0,13.476-5.945A37.2,37.2,0,0,0,151.261,55.39h42.806V72.433Z"
                                                              transform="translate(980.473 2243.117)" fill="#8f6d4f"
                                                              opacity="0.2"/>
                                                        <path id="Path_6957" data-name="Path 6957"
                                                              d="M95.947,24.018a17.94,17.94,0,0,0,.2-3.333A21.374,21.374,0,0,0,87.908,3.822C84.183,1.076,79.869-.1,73.79-.1H62.026V21.469a21.61,21.61,0,0,0-19.8,8.039C39.476,33.234,38.3,37.547,38.3,43.626V55.391H59.869a29.472,29.472,0,0,0-.392,3.922,21.374,21.374,0,0,0,8.235,16.863C71.437,78.92,75.751,80.1,81.83,80.1H93.594V57.94a29.468,29.468,0,0,0,3.922.392A21.373,21.373,0,0,0,114.379,50.1c2.745-3.726,3.922-8.039,3.922-14.118V24.214H95.947Zm-16.863,15.1a17.942,17.942,0,0,1-.2-3.333V26.175H93.4a19.182,19.182,0,0,1-6.667,9.8A15.076,15.076,0,0,1,79.085,39.116ZM65.163,3.037H73.79c5.49,0,9.412.98,12.549,3.529A17.649,17.649,0,0,1,93.4,20.881a24.14,24.14,0,0,1-.392,3.922V25H78.1V35.586a17.72,17.72,0,0,0-2.549-5.1,19.726,19.726,0,0,0-10.2-7.059V3.037ZM77.908,44.214v9.412H62.418a17.927,17.927,0,0,1,6.471-9.02,17.03,17.03,0,0,1,8.824-3.333A12.984,12.984,0,0,1,77.908,44.214Zm-13.726-20a17.692,17.692,0,0,1,10.2,6.863,19.5,19.5,0,0,1,3.333,8.431,25,25,0,0,1-3.922.2H64.183ZM41.437,52.645V44.018c0-5.49.98-9.412,3.529-12.549a17.751,17.751,0,0,1,14.51-7.059A26.794,26.794,0,0,1,63.2,24.8h.2V40.488H75.555a16.051,16.051,0,0,0-6.667,2.941,20.573,20.573,0,0,0-6.667,9.02H41.437Zm49.216,24.9H82.026c-5.49,0-9.412-.98-12.549-3.529A17.649,17.649,0,0,1,62.418,59.7,19.338,19.338,0,0,1,63.006,55v-.2H78.692V44.214a22.072,22.072,0,0,0,2.549,5.294,20.573,20.573,0,0,0,9.02,6.667V77.547Zm.98-22.353A17.56,17.56,0,0,1,79.477,41.077c.784,0,1.765-.2,2.745-.2h9.412V55.194Zm23.922-19.412c0,5.49-.98,9.412-3.529,12.549a17.649,17.649,0,0,1-14.314,7.059,19.338,19.338,0,0,1-4.706-.588h-.2V40.1H80.653a16.05,16.05,0,0,0,6.667-2.941,18.4,18.4,0,0,0,6.863-9.8h21.177v8.431Z"
                                                              transform="translate(1159.7 2193.073)" fill="#8f6d4f"
                                                              opacity="0.2"/>
                                                    </g>
                                                </svg>

                                            </div>

                                        </Col>
                                    </Row>
                                </Container>
                            </StyledComponent>
                        </ParallaxProvider>
                    );

                })
            }

        </StyledWrap>


    );
};

const StyledComponent = styled.section`
  overflow: hidden;

  .zigzag__img {
    padding-left: 75px;

    &__inner {
      padding-top: calc(600 / 500 * 100%);
      position: relative;
    }

    .bottom {
      object-fit: contain;
      margin: -70px 0 0 -60px;
      position: relative;
      z-index: 2;
    }
  }

  .zigzag__text {
    padding-left: 70px;
    position: relative;

    img {
      margin: 40px 0 40px 0;
    }

    h4 {
      font-size: 24px;
      font-weight: bold;
      line-height: 32px;
      margin-bottom: 25px;
      text-transform: uppercase;
    }

    p {
      font-size: 20px;
      line-height: 28px;
    }


    .shadow-right {
      position: absolute;
      right: 0;
      bottom: 30px;

      svg {
        height: 150px;
      }
    }

  }

  @media (max-width: 1150px) {
    .zigzag__text .shadow-right {
      bottom: 0px;

      svg {
        height: 100px;
      }
    }
  }

  @media (max-width: 900px) {
    .zigzag__img {
      min-width: 100%;
    }

    .zigzag__text {
      min-width: 100%;
      margin: 0;
      padding-left: 15px !important;
      margin-top: 40px;

      img {
        display: none;
      }


      .shadow-right {
        bottom: -50px;
        right: -60px;

        svg {
          height: 100px;
          width: 100px;
        }
      }

    }
  }

  @media (max-width: 768px) {
    .zigzag__img {
      min-width: 100%;
      padding-left: 0px;

      .bottom {
        max-width: 48%;
        margin: -40px 0 0 15px !important;
      }
    }


    .zigzag__text {
      h4 {
        font-size: 20px;
        line-height: 28px;
      }

      .links {
        margin-top: 40px;
      }
    }


  }


`;


const StyledWrap = styled.section`
  .zigzag:nth-of-type(even) {
    #Path_6957 {
      display: none;
    }

    @media (min-width: 901px) {
      .row {
        flex-direction: row-reverse;
      }

      .zigzag__img {
        padding-left: 0;
        padding-right: 75px !important;

        .bottom {
          margin-right: -60px;
          float: right;
        }
      }

      .zigzag__text {
        padding-left: 15px !important;
        padding-right: 70px;
        bottom: 0;

        .shadow-right {
          left: 0;
          width: fit-content;
          margin: auto;
        }
      }

    }

  }
`;

export default MyComponent;
