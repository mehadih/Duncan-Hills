import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import banner from '../../public/images/dynamic/about3.jpg';
import {Img} from "../Img";
import Title from "../Title";
import ReactHtmlParser from "react-html-parser";

const MyComponent = ({title,desc,img}) => {
    return (
        <StyledComponent className={'about-text pt-230 pb-230'}>
            <Img src={img}/>
            <Container>
                <Row>
                    <Col sm={{span: 10, offset: 1}}>
                        <Title fontSize={80} center margin={'0 0 60px 0'} lineHeight={80} color={'#F2EEE8'}
                               text={title}/>
                        {ReactHtmlParser(desc)}
                        {/*<p>Duncan Hills by Sanmar sets a new benchmark for luxury in Chattogram and Bangladesh. Bringing*/}
                        {/*    a level of aesthetics and quality that is unsurpassed and a lifestyle that is without equal,*/}
                        {/*    Duncan Hills possesses the finest expertise from across the globe. Encompassing of four*/}
                        {/*    projects and six residential towers, Sanmar Kensington, Sanmar Knightsbridge, Sanmar*/}
                        {/*    Belgravia and Sanmar Cavendish, Duncan Hills is suited for a lifestyle that desires the*/}
                        {/*    bests. Atkins, one of the largest and top global architectural firms, created the master*/}
                        {/*    plan for Duncan Hills and the six residential towers with complete finesse and careful*/}
                        {/*    consideration.</p>*/}

                        {/*<p>In collaboration with Sanmar's in-house interior team, Taylor Howes, one of London's finest*/}
                        {/*    interior designer companies, has finished the interiors of Duncan Hills in utmost*/}
                        {/*    discretion, with their detailed, delicate and luxurious touch.</p>*/}
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  position: relative;

  p {
    font-size: 20px;
    line-height: 28px;
    color: #F2EEE8;
    text-align: center;

    &:not(:nth-last-of-type(1)) {
      margin-bottom: 28px;
    }
  }
`;

export default MyComponent;
