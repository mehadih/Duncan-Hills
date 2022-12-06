import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import bg from '../../public/images/dynamic/fresh.jpg';
import shadow from '../../public/images/dynamic/fresh2.jpg';
import Title from "../Title";
import ReactHtmlParser from "react-html-parser";

const MyComponent = ({data}) => {
    return (
        <StyledComponent className={'fresh-air pb-160 pt-200'}>
            <Container>
                <Row>
                    <Col sm={12} className={'fresh-air__banner'}>
                        <img src={data?.image1} alt=""/>
                        <div className="cut-img">
                            <img src={data?.image2} alt=""/>
                        </div>

                    </Col>

                    <Col sm={8} className={'fresh-air__content'}>
                        <Title margin={'70px 0 50px 0'} fontSize={48} lineHeight={48} text={data?.title}/>
                        <h4>{data?.subtitle}</h4>
                        {ReactHtmlParser(data?.description)}
                        {/*<p>The Duncan Hills is an exclusive, private residential area, adjacent to the Forest Research*/}
                        {/*    Institute, which is Chattogram’s heaven on earth. Minutes away from CDA Avenue, Nasirabad*/}
                        {/*    Housing Society and the GEC Circle, Duncan Hills has access to a lot that Chattogram has to*/}
                        {/*    offer, such as education, hospitals, places of worship and culture and entertainment.*/}
                        {/*</p>*/}
                        {/*<p>Duncan Hills is the perfect blend of urban city living and the serenity of suburban living.*/}
                        {/*    Luscious mountain greens, exotic plants and flowers and a plethora of colorful birds*/}
                        {/*    painting the vibrant blue skies, this location is a hidden sanctuary.</p>*/}
                    </Col>
                </Row>

            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  .fresh-air__banner {
    padding-right: 200px;
    position: relative;

    img {
      object-fit: cover;
      width: 100%;
    }

    .cut-img {
      position: absolute;
      max-width: 33.333333%;
      right: 15px;
      top: 50%;

      img {
        max-width: 100%;
      }
    }
  }

  .fresh-air__content {
    padding-right: 50px;

    h4 {
      font-size: 24px;
      font-weight: bold;
      line-height: 32px;
      text-transform: capitalize;
      margin-bottom: 25px;
    }

    p {
      font-size: 20px;
      line-height: 28px;

      &:not(:nth-last-of-type(1)) {
        margin-bottom: 28px;
      }
    }
  }

  @media (max-width: 768px) {
    .fresh-air__content {
      min-width: calc(100% - 33.33%);

      .title {
        max-width: 40%;
      }

      h4 {
        max-width: 60%;
      }
    }
  }

  @media (max-width: 767px) {
    .fresh-air__banner {
      min-width: 100%;
      padding: 0 15px 0 0;

      .cut-img {
        right: 0;
      }
    }

    .fresh-air__content {
      min-width: 100%;
      padding-right: 15px;

      h4 {
        min-width: 100%;
      }

      .title {
        max-width: calc(100% - 33.33%);
      }

      p:not(:nth-last-of-type(1)) {
        margin-bottom: 10px;
      }

    }

  }


`;

export default MyComponent;
