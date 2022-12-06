import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import Title from "./Title";
import {Img} from "./Img";
import banner from '../public/images/dynamic/tour.jpg'
import Button from "./Button";


const MyComponent = () => {
    return (
        <StyledComponent className={'virtual-tour'}>
            <Container>
                <Row>
                    <Col cm={12}>
                        <Title margin={'0 0 20px 0'} center text={'take a virtual tour'} fontSize={80} lineHeight={80}/>
                    </Col>

                    <Col sm={12} className={'virtual-tour__img'}>
                        <Img src={banner}/>
                        <Button fontWeight={400} paddingTop={'5px'} textTransform={'capitalize'} height={36} width={210}
                                text={'Load Virtual Tour'}/>
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  .virtual-tour__img {
    padding-top: calc(620 / 1170 * 100%);
    position: relative;

    .dc-btn {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      left: 0;
      right: 0;
    }
  }

  @media (max-width: 767px) {
    .title {
      margin-bottom: 10px;
    }
  }
`;

export default MyComponent;
