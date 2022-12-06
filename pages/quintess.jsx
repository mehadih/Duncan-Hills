import React, {useEffect, useLayoutEffect} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import InnerBanner from "../components/InnerBanner";
import banner from '../public/images/dynamic/quintess-banner.jpg';
import AboutText from "../components/About";
import FooterTop from "../components/FooterTop";
import Video from "../components/Video";
import Images from "../components/quintess/Images";
import videoBanner from '../public/images/dynamic/qv.jpg'
import ImageTextSlider from "../components/ImageTextSlider";
import Gallery from "../components/Gallery";
import Contact from "../components/quintess/Contact";
import qf from '../public/images/dynamic/qf.jpg'
import {wrapper} from "./api/store";
import {ApiServices} from "./api/network/ApiServices";
import {fetchData} from "./api/redux/quintess";
import Home from "./index";
import {useDispatch, useSelector} from "react-redux";
import ReactHtmlParser from "react-html-parser";
import {NextSeo} from "next-seo";

const MyComponent = () => {

    const getPost = useSelector((state) => state.quintessReducer);


    const dispatch = useDispatch()

    useLayoutEffect(() => {
        let api_services = ApiServices.QUIN;
        dispatch(fetchData([api_services]))
    }, []);



    const banner = getPost?.data[0]?.banner;
    const banner_title = banner?.title;
    const banner_subtitle = banner?.subtitle;
    const banner_image = banner?.image;


    const about = getPost?.data[0]?.distinction;
    const about_title = about?.title;
    const about_subtitle = about?.subtitle;
    const about_desc = about?.description;

    const img_grp = getPost?.data[0]?.image_group;

    const video = getPost?.data[0]?.video;
    const video_thumb = video?.thumbnail;
    const video_url = video?.url;

    const benefits = getPost?.data[0]?.benefits;
    const gallery = getPost?.data[0]?.gallery;

    const address = getPost?.data[0]?.office_address;

    const footer_top = getPost?.data[0]?.top_footer;
    const footer_top_title = footer_top?.title;
    const footer_top_image = footer_top?.image;


    return (
        <StyledComponent className={'quintess'}>
            <NextSeo
                title={'Quintess | Duncan Hills By Sanmar'}
                description={'Duncan Hills by Sanmar sets a new benchmark for luxury in Chattogram and Bangladesh. ' +
                    'Bringing a level of aesthetics and quality that is unsurpassed and a lifestyle that is without equal, ' +
                    'Duncan Hills possesses the finest expertise from across the globe. Encompassing of four projects and ' +
                    'six residential towers, Sanmar Kensington, Sanmar Knightsbridge, Sanmar Belgravia and Sanmar Cavendish, ' +
                    'Duncan Hills is suited for a lifestyle that desires the best.'}

            />
            <InnerBanner pageTitle={'Quintess'} title={banner_title} img={banner_image}/>
            <AboutText title={about_title} subTitle={about_subtitle} desc={about_desc}/>
            <Images data={img_grp}/>
            <Video right background={'#34342E'} img={video_thumb} video_id={video_url}/>
            <ImageTextSlider background={'#34342E'} data={benefits}/>
            <Gallery data={gallery}/>
            <Contact data={address}/>
            <FooterTop title={footer_top_title} img={footer_top_image} bgColor={footer_top?.color}
                       address={footer_top?.address}/>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  .video {
    padding-top: 0 !important;
  }

  .as-image-text-slider {
    padding-top: 200px;

    .title h2, .amenities__right p, .container .slider-nav p, .container .slider-nav p span {
      color: #F2EEE8;
    }

    svg line {
      stroke: #F2EEE8;
    }

    @media (max-width: 768px) {
      padding-top: 120px;
    }
  }
`;

// export const getServerSideProps = wrapper.getServerSideProps(
//     (store) => async () => {
//         let api_services = ApiServices.QUIN;
//         await store.dispatch(fetchData([api_services]))
//     });

export default MyComponent;
