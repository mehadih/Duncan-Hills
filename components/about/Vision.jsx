import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import Banner from '../../public/images/dynamic/vision.jpg';
import Title from "../Title";
import Button from "../Button";
import ReactHtmlParser from "react-html-parser";

const MyComponent = ({title,subtitle,desc,img}) => {
    return (
        <StyledComponent className={'vision pb-200'}>
            <img className={'vision__banner'} src={img} alt=""/>

            <Container>
                <div className="shadow-right">
                    <svg width="204.393" height="204.894" viewBox="0 0 204.393 204.894">
                        <path id="Path_6959" data-name="Path 6959"
                              d="M185.583,61.518a45.835,45.835,0,0,0,.5-8.516A54.607,54.607,0,0,0,165.044,9.919C155.525,2.906,144.5-.1,128.974-.1H98.917V55.006c-19.538-2.5-39.075,5.511-50.6,20.539C41.306,85.064,38.3,96.085,38.3,111.615v30.058H93.406a75.3,75.3,0,0,0-1,10.019,54.608,54.608,0,0,0,21.04,43.083c9.518,7.013,20.54,10.019,36.069,10.019h30.058V148.185a75.287,75.287,0,0,0,10.019,1,54.607,54.607,0,0,0,43.083-21.04c7.014-9.518,10.019-20.539,10.019-36.069V62.019h-57.11ZM142.5,100.093a45.839,45.839,0,0,1-.5-8.516V67.029h37.071a49.009,49.009,0,0,1-17.033,25.048A38.517,38.517,0,0,1,142.5,100.093ZM106.932,7.915h22.042c14.027,0,24.046,2.5,32.062,9.017A45.091,45.091,0,0,1,179.071,53.5a61.672,61.672,0,0,1-1,10.019v.5H140V91.075a45.271,45.271,0,0,0-6.512-13.025,50.4,50.4,0,0,0-26.05-18.035V7.915Zm32.563,105.2v24.046H99.919A45.8,45.8,0,0,1,116.45,114.12c6.012-4.509,13.025-7.514,22.543-8.516A33.175,33.175,0,0,1,139.495,113.118Zm-35.067-51.1a45.2,45.2,0,0,1,26.05,17.534c4.008,5.511,7.014,12.524,8.516,21.541a63.872,63.872,0,0,1-10.019.5H104.427Zm-58.112,72.64V112.617c0-14.027,2.5-24.046,9.017-32.062C63.849,69.033,77.375,62.52,92.4,62.52a68.456,68.456,0,0,1,9.518,1h.5V103.6h31.06a41.008,41.008,0,0,0-17.033,7.514c-7.514,5.511-13.526,14.027-17.033,23.044h-53.1Zm125.742,63.622H150.015c-14.027,0-24.046-2.5-32.062-9.017a45.09,45.09,0,0,1-18.035-36.57,49.407,49.407,0,0,1,1.5-12.023v-.5H141.5V113.118a56.39,56.39,0,0,0,6.512,13.526c5.511,7.514,14.027,13.526,23.044,17.033v54.605Zm2.5-57.11a45.8,45.8,0,0,1-23.044-16.532c-4.008-5.511-6.513-11.522-8.015-19.538,2,0,4.509-.5,7.014-.5h24.046v36.57Zm61.117-49.6c0,14.027-2.5,24.046-9.017,32.062a45.091,45.091,0,0,1-36.57,18.035,49.406,49.406,0,0,1-12.023-1.5h-.5V102.6h-31.06a41.007,41.007,0,0,0,17.033-7.514,47.017,47.017,0,0,0,17.534-25.048h54.1V91.576Z"
                              transform="translate(-38.3 0.1)" fill="#8f6d4f" opacity="0.2"/>
                    </svg>

                </div>

                <div className="shadow-bottom">
                    <svg width="75.606" height="75.792" viewBox="0 0 75.606 75.792">
                        <path id="Path_6960" data-name="Path 6960"
                              d="M92.781,22.693a16.955,16.955,0,0,0,.185-3.15A20.2,20.2,0,0,0,85.183,3.606C81.662,1.012,77.586-.1,71.841-.1H60.722V20.284a20.423,20.423,0,0,0-18.716,7.6C39.412,31.4,38.3,35.479,38.3,41.224V52.343H58.684a27.853,27.853,0,0,0-.371,3.706A20.2,20.2,0,0,0,66.1,71.985c3.521,2.594,7.6,3.706,13.342,3.706H90.557V54.752a27.85,27.85,0,0,0,3.706.371A20.2,20.2,0,0,0,110.2,47.339c2.594-3.521,3.706-7.6,3.706-13.342V22.878H92.781ZM76.844,36.962a16.956,16.956,0,0,1-.185-3.15v-9.08H90.372A18.129,18.129,0,0,1,84.071,34,14.248,14.248,0,0,1,76.844,36.962ZM63.687,2.865h8.154c5.189,0,8.895.927,11.86,3.336a16.679,16.679,0,0,1,6.671,13.528A22.813,22.813,0,0,1,90,23.434v.185H75.918V33.626a16.746,16.746,0,0,0-2.409-4.818,18.643,18.643,0,0,0-9.636-6.671V2.865ZM75.733,41.78v8.895H61.093a16.942,16.942,0,0,1,6.115-8.524A16.1,16.1,0,0,1,75.547,39,12.271,12.271,0,0,1,75.733,41.78Zm-12.972-18.9A16.72,16.72,0,0,1,72.4,29.364a18.431,18.431,0,0,1,3.15,7.968,23.627,23.627,0,0,1-3.706.185h-9.08Zm-21.5,26.87V41.595c0-5.189.927-8.895,3.336-11.86a16.776,16.776,0,0,1,13.713-6.671,25.322,25.322,0,0,1,3.521.371h.185V38.259H73.509a15.169,15.169,0,0,0-6.3,2.78,19.443,19.443,0,0,0-6.3,8.524H41.265ZM87.778,73.283H79.624c-5.189,0-8.895-.927-11.86-3.336a16.679,16.679,0,0,1-6.671-13.528,18.276,18.276,0,0,1,.556-4.447v-.185H76.474V41.78a20.859,20.859,0,0,0,2.409,5,19.443,19.443,0,0,0,8.524,6.3v20.2ZM88.7,52.157A16.6,16.6,0,0,1,77.215,38.815c.741,0,1.668-.185,2.594-.185H88.7V52.157Zm22.608-18.346c0,5.189-.927,8.895-3.336,11.86a16.679,16.679,0,0,1-13.528,6.671A18.276,18.276,0,0,1,90,51.787h-.185v-13.9H78.327a15.169,15.169,0,0,0,6.3-2.78,17.392,17.392,0,0,0,6.486-9.265h20.013v7.968Z"
                              transform="translate(-38.3 0.1)" fill="#8f6d4f" opacity="0.2"/>
                    </svg>
                </div>

                <Row>
                    <Col>
                        <Title fontSize={48} margin={'80px 0 50px 0'} lineHeight={48}
                               text={title}/>
                        <h5>{subtitle}</h5>
                        {ReactHtmlParser(desc)}
                        {/*<p>Founded in 1999, Sanmar Properties has become a pioneer in residential, commercial and*/}
                        {/*    shopping mall development, as well as, land subdivision development. With its headquarters*/}
                        {/*    now located in Dhaka, Sanmar has grown rapidly in stature due to its pioneering, innovative*/}
                        {/*    and sustainable approach to real estate development.*/}
                        {/*</p>*/}
                        {/*<p>Sanmar is a world-class company, fully committed to making life better. By always partnering*/}
                        {/*    with renowned professionals across diverse fields of expertise, as well as harboring a team*/}
                        {/*    of passionate and dedicated personnel, Sanmar has always ensured the delivery of projects on*/}
                        {/*    time in full.</p>*/}

                        <Button textTransform={'unset'} fontWeight={400} src={'/'} width={222} lineHeight={'20px'}
                                fontSize={20}
                                margin={'40px 0 0 0'}
                                paddingTop={'5px'}
                                text={'Visit mysanmar.com'}
                                background={'#F2EEE8'}
                                color={'#FFF'}
                                hoverColor={'#8F6D4F'}
                                hoverBackground={'#8F6D4F'}
                                height={36}/>
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  position: relative;
  overflow: hidden;

  .container {
    position: relative;
  }

  .vision__banner {
    width: 100%;
  }

  .shadow-right {
    position: absolute;
    top: 200px;
    right: 30%;

    svg {
      height: 150px;
    }
  }

  .shadow-bottom {
    position: absolute;
    left: -60px;
    bottom: -120px;
  }

  h5 {
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    margin-bottom: 25px;
  }

  p {
    font-size: 20px;
    line-height: 28px;

    &:not(:nth-last-of-type(1)) {
      margin-bottom: 28px;
    }
  }

  @media (max-width: 767px) {
    .title {
      margin-top: 40px;
    }

    .shadow-right {
      right: -100px;
    }
  }
`;

export default MyComponent;
