import React, {useEffect, useLayoutEffect} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import InnerBanner from "../components/InnerBanner";
import bannerImg from '../public/images/dynamic/inner-banner.jpg';
import About from "../components/About";
import BigBanner from "../components/about/BigBanner";
import Quotes from "../components/about/Quotes";
import AboutText from "../components/about/AboutText";
import Video from "../components/Video";
import MissinVision from '../components/MissionVision'
import Vision from "../components/about/Vision";
import Ceo from "../components/about/Ceo";
import FooterTop from "../components/FooterTop";
import aboutReducer, {fetchData} from "./api/redux/about";
import {ApiServices} from "./api/network/ApiServices";
import {wrapper} from "./api/store";
import {useDispatch, useSelector} from "react-redux";
import {NextSeo} from "next-seo";

const MyComponent = () => {

    const aboutData = useSelector((state) => state.aboutReducer);

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        let api_services = ApiServices.ABOUT;
        dispatch(fetchData([api_services]))

    }, []);


    const allAboutData = aboutData?.data[0];
    const banner = allAboutData?.banner;
    const about = allAboutData?.history;
    const aboutText = allAboutData?.duncan;

    const corporate = allAboutData?.corporate;
    const missionVision = allAboutData?.mission_vision;
    const vision = allAboutData?.sanmar;
    const ceo = allAboutData?.ceo;
    const qoute = allAboutData?.masonry;

    const footer = allAboutData?.top_footer;
    const title = footer?.title;
    const image = footer?.bg_image;






    return (
        <StyledComponent className={'about'}>
            <NextSeo
                title={'About | Duncan Hills By Sanmar'}
                description={'Duncan Hills by Sanmar sets a new benchmark for luxury in Chattogram and Bangladesh. ' +
                    'Bringing a level of aesthetics and quality that is unsurpassed and a lifestyle that is without equal, ' +
                    'Duncan Hills possesses the finest expertise from across the globe. Encompassing of four projects and ' +
                    'six residential towers, Sanmar Kensington, Sanmar Knightsbridge, Sanmar Belgravia and Sanmar Cavendish, ' +
                    'Duncan Hills is suited for a lifestyle that desires the best.'}

            />
            <InnerBanner pageTitle={banner?.subtitle} title={banner?.title} img={banner?.image}/>
            <About subTitle={about?.subtitle} title={about?.title} desc={about?.description}/>
            <BigBanner/>
            <Quotes data={qoute}/>
            <AboutText title={aboutText?.title} desc={aboutText?.description} img={aboutText?.image}/>
            <Video img={corporate?.image} title={corporate?.title} video_id={corporate?.url}/>
            <MissinVision data={missionVision}/>
            <Vision title={vision?.title} subtitle={vision?.subtitle} desc={vision?.description} img={vision?.image}/>
            <Ceo data={ceo}/>
            <FooterTop title={title} img={image} address={footer?.address}/>
            {/*?sf*/}
        </StyledComponent>
    );
};

const StyledComponent = styled.section`

`;
// export const getServerSideProps = wrapper.getServerSideProps(
//     (store) => async () => {
//         let api_services = ApiServices.ABOUT;
//         await store.dispatch(fetchData([api_services]))
//     });


export default MyComponent;
