import React, {useLayoutEffect} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import Banner from "../components/pentHouse/Banner";
import bannerImg from '../public/images/dynamic/pentbanner.jpg';
import About from "../components/About";
import DescWithSlider from "../components/pentHouse/DescWithSlider";
import FooterTop from "../components/FooterTop";
import {wrapper} from "./api/store";
import {ApiServices} from "./api/network/ApiServices";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "./api/redux/penthouse";
import {SwiperSlide} from "swiper/react";
import {Img} from "../components/Img";
import {NextSeo} from "next-seo";
import Download from "../components/ProjectDetail/Download";


const MyComponent = () => {
    const penthouseData = useSelector((state) => state.penthouseReducer);

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        let api_services = ApiServices.PENT_HOUSE;
        dispatch(fetchData([api_services]))
    }, []);


    const allPenthouseData = penthouseData?.data?.page_data?.[0];

    const banner = allPenthouseData?.banner;
    const about = allPenthouseData?.overview;

    const footer = allPenthouseData?.top_footer;

    const title = footer?.title;
    const image = footer?.image;

    const pentHouseList = penthouseData?.data?.penthouse_list;


    const brochure = allPenthouseData?.brochoure;

    return (
        <StyledComponent className={'pent-house'}>
            <NextSeo
                title={'Penthouse | Duncan Hills By Sanmar'}
                description={'Duncan Hills by Sanmar sets a new benchmark for luxury in Chattogram and Bangladesh. ' +
                    'Bringing a level of aesthetics and quality that is unsurpassed and a lifestyle that is without equal, ' +
                    'Duncan Hills possesses the finest expertise from across the globe. Encompassing of four projects and ' +
                    'six residential towers, Sanmar Kensington, Sanmar Knightsbridge, Sanmar Belgravia and Sanmar Cavendish, ' +
                    'Duncan Hills is suited for a lifestyle that desires the best.'}

            />
            <Banner img={banner?.image} title={banner?.title} pageTitle={banner?.subtitle}/>
            <About subTitle={about?.subtitle} title={about?.title} desc={about?.description}/>
            <div className={'repeated'}>
                {
                    pentHouseList && pentHouseList?.length > 0 &&
                    pentHouseList?.map((element, index) => {
                        return (
                            <DescWithSlider id={element?.id} key={index} ClassName={element?.class_name}
                                            bg={element?.background_color} element={element}/>
                        );
                    })
                }
            </div>

            <Download data={brochure}/>

            <FooterTop title={title} img={image} address={footer?.address}/>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  overflow: hidden;

  .about {
    padding-bottom: 0;
  }

  .repeated {
    width: 100%;

    .pent-house-des {
      &:nth-of-type(1) {
        padding-top: 0;
      }

      &.diff {
        padding-top: 0 !important;
        margin-top: 0 !important;

        .pent-house-des__top {
          transform: none;
          //margin-left: 33.33%;
        }

        .desc-p {
          margin-top: 60px !important;
        }
      }
    }
  }
`;
// export const getServerSideProps = wrapper.getServerSideProps(
//     (store) => async () => {
//         let api_services = ApiServices.PENT_HOUSE;
//         await store.dispatch(fetchData([api_services]))
//     });

export default MyComponent;
