import React, {useLayoutEffect} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import InnerBanner from "../components/InnerBanner";
import wb from '../public/images/dynamic/wb.jpg';
import PlainText from "../components/PlainText";
import Testimonial from "../components/whyInvest/Testimonial";
import Video from "../components/Video";
import videoImg from '../public/images/dynamic/wv.jpg'
import Gallery from "../components/Gallery";
import Contact from "../components/whyInvest/Contact";
import FooterTop from "../components/FooterTop";
import {wrapper} from "./api/store";
import {ApiServices} from "./api/network/ApiServices";
import {fetchData} from "./api/redux/whyInvest";
import {useDispatch, useSelector} from "react-redux";
import {NextSeo} from "next-seo";


const MyComponent = () => {
    const whyInvestData = useSelector((state) => state.whyinvestReducer);

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        let api_services = ApiServices.INVEST;
        dispatch(fetchData([api_services]))
    }, []);

    const allWhyInvestData = whyInvestData?.data[0];


    const banner = allWhyInvestData?.banner;
    const reliable = allWhyInvestData?.reliable;
    const testimonial = allWhyInvestData?.testimonial;
    const video = allWhyInvestData?.video;
    const gallery = allWhyInvestData?.gallery;
    const contact = allWhyInvestData?.office_address;
    const footer = allWhyInvestData?.top_footer;


    return (
        <StyledComponent className={'why-invest'}>
            <NextSeo
                title={'Why-Invest | Duncan Hills By Sanmar'}
                description={'Duncan Hills by Sanmar sets a new benchmark for luxury in Chattogram and Bangladesh. ' +
                    'Bringing a level of aesthetics and quality that is unsurpassed and a lifestyle that is without equal, ' +
                    'Duncan Hills possesses the finest expertise from across the globe. Encompassing of four projects and ' +
                    'six residential towers, Sanmar Kensington, Sanmar Knightsbridge, Sanmar Belgravia and Sanmar Cavendish, ' +
                    'Duncan Hills is suited for a lifestyle that desires the best.'}

            />
            <InnerBanner pageTitle={banner?.subtitle} title={banner?.title} img={banner?.image}/>
            <PlainText title={reliable?.title} short_desc={reliable?.short_description} desc={reliable?.description}/>
            <Testimonial data={testimonial}/>
            <Video img={video?.thumbnail} video_id={video?.url}/>
            <Gallery topBg={'#F2EEE8'} titleColor={'#34342E'} data={gallery}/>
            <Contact data={contact}/>
            <FooterTop title={footer?.title} img={footer?.image} address={footer?.address}/>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  .video {
    padding-top: 0;
    padding-bottom: 200px;

    .title {
      display: none;
    }
  }


  .gallery {
    //padding-top: 200px;
  }

`;
// export const getServerSideProps = wrapper.getServerSideProps(
//     (store) => async () => {
//         let api_services = ApiServices.INVEST;
//         await store.dispatch(fetchData([api_services]))
//     });

export default MyComponent;
