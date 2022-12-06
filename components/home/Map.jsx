import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import Button from "../Button";
import Map from '../../public/images/dynamic/map.png'
import ReactHtmlParser from "react-html-parser";

const MyComponent = ({data}) => {
    return (
        <StyledComponent className={'map pb-200'}>
            <Container>
                <Row>
                    <Col sm={8} className={'map__map'}>

                        <img src={data?.image} alt=""/>

                    </Col>

                    <Col sm={4} className={'map__content'}>
                        <div className={'map__content__inner'}>
                            {ReactHtmlParser(data?.description)}
                            {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum*/}
                            {/*    has*/}
                            {/*    been the industry's standard dummy text ever since the 1500s.</p>*/}
                            <Button fontSize={'20'} textTransform={'capitalize'} height={35} fontWeight={400}
                                    text={'Visit the Marketing Suite'} paddingTop={'2px'} background={'#F2EEE8'}
                                    hoverBackground={'#8F6D4F'} color={'#F2EEE8'} hoverColor={'#8F6D4F'}
                                    margin={'40px 0 0 0'}
                                    width={'260'}/>
                        </div>

                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  .map__map {
    //padding-top: calc(720 / 800 * 100%);
    position: relative;

    img {
      width: 100%;
      object-fit: cover;
    }

  }

  .map__content {
    display: flex;
    align-items: center;

    p {
      font-size: 20px;
      line-height: 28px;
    }
  }

  @media (max-width: 991px) {
    .col-sm-8, .col-sm-4 {
      min-width: 100%;
    }

    .map__content {
      margin-top: 40px;
    }
  }
`;

export default MyComponent;
