import React, {useLayoutEffect} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import MissionVision from "../components/MissionVision";
import Contact from "../components/contact/Contact";
import Map from "../components/contact/Map";
import {wrapper} from "./api/store";
import {ApiServices} from "./api/network/ApiServices";
import {fetchData} from "./api/redux/contact";
import {useDispatch, useSelector} from "react-redux";
import {get} from "./api/network/AxiosService";
import {NextSeo} from "next-seo";
import Title from "../components/Title";

const MyComponent = () => {
    const getPost = useSelector((state) => state.contactReducer);

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        let api_services = ApiServices.CONTACT;
        dispatch(fetchData([api_services]))

    }, []);

    const banner = getPost?.data[0]?.banner;
    const banner_title = banner?.title;
    const address = getPost?.data[0]?.office_address;

    return (
        <StyledComponent className={'contact'}>
            <NextSeo
                title={'Contact | Duncan Hills By Sanmar'}
                description={'Duncan Hills by Sanmar sets a new benchmark for luxury in Chattogram and Bangladesh. ' +
                    'Bringing a level of aesthetics and quality that is unsurpassed and a lifestyle that is without equal, ' +
                    'Duncan Hills possesses the finest expertise from across the globe. Encompassing of four projects and ' +
                    'six residential towers, Sanmar Kensington, Sanmar Knightsbridge, Sanmar Belgravia and Sanmar Cavendish, ' +
                    'Duncan Hills is suited for a lifestyle that desires the best.'}

            />
            <div className="contact-title">
                <Container>
                    <Row>
                        <Col>
                            <p>Contact Us</p>
                            <Title center margin={'0 0 20px 0'} fontSize={80} lineHeight={80}
                                   text={'dedicated to serve'}/>
                        </Col>
                    </Row>
                </Container>

            </div>
            <MissionVision title={banner_title} data={banner}/>
            <Contact data={address}/>
            <Map/>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  .modal--content__form {
    background-color: #736640;
  }

  .mission-vision {
    background-color: #fff;
    padding-top: 0 !important;
  }

  .contact-title {
    padding-top: 200px;

    p {
      color: #B2A89F;
      font-size: 16px;
      line-height: 24px;
      text-transform: uppercase;
      text-align: center;
    }
  }

  @media (max-width: 767px) {
    .contact-title {
      padding-top: 160px;
    }

    .section-title {
      padding-right: 130px !important;

      h4 {
        font-size: 35px !important;
        line-height: 35px !important;
      }
    }
  }
`;

// export const getServerSideProps = wrapper.getServerSideProps(
//     (store) => async () => {
//         let api_services = ApiServices.CONTACT;
//         await store.dispatch(fetchData([api_services]))
//     });

export default MyComponent;
