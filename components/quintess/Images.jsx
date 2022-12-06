import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import img1 from '../../public/images/dynamic/im1.jpg'
import img2 from '../../public/images/dynamic/im2.jpg'
import img3 from '../../public/images/dynamic/im3.jpg'
import {ParallaxProvider, Parallax} from "react-scroll-parallax";


const MyComponent = ({data}) => {

    const image1 = data?.image1;
    const image2 = data?.image2;
    const image3 = data?.image3;

    return (
        <ParallaxProvider>
            <StyledComponent className={'images pb-200'}>
                <div className="shadow-top">
                    <svg width="80" height="80.197" viewBox="0 0 80 80.197">
                        <path id="Path_7055" data-name="Path 7055"
                              d="M95.947,24.018a17.94,17.94,0,0,0,.2-3.333A21.374,21.374,0,0,0,87.908,3.822C84.183,1.076,79.869-.1,73.79-.1H62.026V21.469a21.61,21.61,0,0,0-19.8,8.039C39.476,33.234,38.3,37.547,38.3,43.626V55.391H59.869a29.472,29.472,0,0,0-.392,3.922,21.374,21.374,0,0,0,8.235,16.863C71.437,78.92,75.751,80.1,81.83,80.1H93.594V57.94a29.468,29.468,0,0,0,3.922.392A21.373,21.373,0,0,0,114.379,50.1c2.745-3.726,3.922-8.039,3.922-14.118V24.214H95.947Zm-16.863,15.1a17.942,17.942,0,0,1-.2-3.333V26.175H93.4a19.182,19.182,0,0,1-6.667,9.8A15.076,15.076,0,0,1,79.085,39.116ZM65.163,3.037H73.79c5.49,0,9.412.98,12.549,3.529A17.649,17.649,0,0,1,93.4,20.881a24.14,24.14,0,0,1-.392,3.922V25H78.1V35.586a17.72,17.72,0,0,0-2.549-5.1,19.726,19.726,0,0,0-10.2-7.059V3.037ZM77.908,44.214v9.412H62.418a17.927,17.927,0,0,1,6.471-9.02,17.03,17.03,0,0,1,8.824-3.333A12.984,12.984,0,0,1,77.908,44.214Zm-13.726-20a17.692,17.692,0,0,1,10.2,6.863,19.5,19.5,0,0,1,3.333,8.431,25,25,0,0,1-3.922.2H64.183ZM41.437,52.645V44.018c0-5.49.98-9.412,3.529-12.549a17.751,17.751,0,0,1,14.51-7.059A26.794,26.794,0,0,1,63.2,24.8h.2V40.488H75.555a16.051,16.051,0,0,0-6.667,2.941,20.573,20.573,0,0,0-6.667,9.02H41.437Zm49.216,24.9H82.026c-5.49,0-9.412-.98-12.549-3.529A17.649,17.649,0,0,1,62.418,59.7,19.338,19.338,0,0,1,63.006,55v-.2H78.692V44.214a22.072,22.072,0,0,0,2.549,5.294,20.573,20.573,0,0,0,9.02,6.667V77.547Zm.98-22.353A17.56,17.56,0,0,1,79.477,41.077c.784,0,1.765-.2,2.745-.2h9.412V55.194Zm23.922-19.412c0,5.49-.98,9.412-3.529,12.549a17.649,17.649,0,0,1-14.314,7.059,19.338,19.338,0,0,1-4.706-.588h-.2V40.1H80.653a16.05,16.05,0,0,0,6.667-2.941,18.4,18.4,0,0,0,6.863-9.8h21.177v8.431Z"
                              transform="translate(-38.3 0.1)" fill="#b2a89f" opacity="0.2"/>
                    </svg>
                </div>
                <div className="shadow-left">
                    <svg width="238.287" height="238.871" viewBox="0 0 238.287 238.871">
                        <path id="Path_6958" data-name="Path 6958"
                              d="M210.007,71.736a53.436,53.436,0,0,0,.584-9.929,63.662,63.662,0,0,0-24.53-50.227C174.964,3.4,162.116-.1,144.011-.1H108.968V64.144c-22.777-2.92-45.555,6.424-58.988,23.945C41.8,99.186,38.3,112.035,38.3,130.14v35.042h64.244a87.785,87.785,0,0,0-1.168,11.681,63.663,63.663,0,0,0,24.53,50.227c11.1,8.176,23.946,11.681,42.051,11.681H203v-66a87.771,87.771,0,0,0,11.681,1.168,63.662,63.662,0,0,0,50.227-24.53c8.177-11.1,11.681-23.945,11.681-42.051V72.32h-66.58ZM159.78,116.707a53.441,53.441,0,0,1-.584-9.929V78.161h43.219a57.136,57.136,0,0,1-19.857,29.2A44.9,44.9,0,0,1,159.78,116.707ZM118.313,9.245h25.7c16.353,0,28.034,2.92,37.378,10.513,13.433,9.929,21.025,25.7,21.025,42.635a71.9,71.9,0,0,1-1.168,11.681v.584H156.859v31.538a52.779,52.779,0,0,0-7.592-15.185A58.756,58.756,0,0,0,118.9,69.984V9.245Zm37.962,122.648v28.034H110.136A53.4,53.4,0,0,1,129.41,133.06c7.008-5.256,15.185-8.761,26.282-9.929A38.675,38.675,0,0,1,156.275,131.892ZM115.393,72.32a52.7,52.7,0,0,1,30.37,20.441c4.672,6.424,8.177,14.6,9.929,25.114a74.463,74.463,0,0,1-11.681.584H115.393ZM47.645,157.006v-25.7c0-16.353,2.92-28.034,10.513-37.378C68.086,80.5,83.855,72.9,101.376,72.9a79.808,79.808,0,0,1,11.1,1.168h.584V120.8h36.21c-8.176,1.752-14.6,4.672-19.857,8.761-8.761,6.424-15.769,16.353-19.857,26.866H47.645Zm146.593,74.173h-25.7c-16.353,0-28.034-2.92-37.378-10.513-13.433-9.929-21.025-25.7-21.025-42.635a57.6,57.6,0,0,1,1.752-14.017v-.584h46.723V131.892a65.741,65.741,0,0,0,7.592,15.769c6.424,8.761,16.353,15.769,26.866,19.857v63.66Zm2.92-66.58a53.4,53.4,0,0,1-26.866-19.273c-4.672-6.424-7.592-13.433-9.345-22.777,2.336,0,5.256-.584,8.177-.584h28.034V164.6Zm71.252-57.82c0,16.353-2.92,28.034-10.513,37.378-9.929,13.433-25.7,21.025-42.635,21.025a57.6,57.6,0,0,1-14.017-1.752h-.584v-43.8h-36.21c8.177-1.752,14.6-4.672,19.857-8.761a54.813,54.813,0,0,0,20.441-29.2h63.076v25.114Z"
                              transform="translate(-38.3 0.1)" fill="#8f6d4f" opacity="0.2"/>
                    </svg>

                </div>
                <Container>
                    <Row>
                        <Col xs={5} className="images__left pr-0">
                            <Parallax easing="easeInQuad" speed={12}>
                                <img src={image3} alt=""/>
                            </Parallax>
                        </Col>
                        <Col xs={7} className="images__right pl-0">
                            <Parallax speed={5} easing="easeInQuad">
                                <img className={'top'} src={image1} alt=""/>
                            </Parallax>
                            <Parallax speed={20} easing="easeInQuad">
                                <img className={'bottom'} src={image2} alt=""/>
                            </Parallax>
                        </Col>
                    </Row>
                </Container>
            </StyledComponent>
        </ParallaxProvider>
    );
};

const StyledComponent = styled.section`
  position: relative;
  overflow: hidden;

  img {
    max-width: 100%;
    object-fit: contain;
  }

  .images__left {
    padding-top: 50px;
  }

  .images__right {
    img {
      &.top {
        z-index: 2;
        position: relative;

      }

      &.bottom {
        margin-top: -250px;
        margin-left: -40px;
      }
    }
  }

  .shadow-top {
    position: absolute;
    top: 0;
    left: 35%;
  }

  .shadow-left {
    position: absolute;
    bottom: -50px;
    left: -100px;
  }
`;

export default MyComponent;
