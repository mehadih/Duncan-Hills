import React, {useLayoutEffect} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import OverviewWithImage from "../../components/OverviewWithImage";
import AtGlance from "../../components/ProjectDetail/AtGlance";
import Feature from "../../components/ProjectDetail/Feature";
import Distinct from "../../components/ProjectDetail/Distinct";
import Download from "../../components/ProjectDetail/Download";
import FooterTop from "../../components/FooterTop";

import Gallery from "../../components/Gallery";
import img1 from '../../public/images/static/g1.jpg'
import Video from "../../components/Video";
import InnerBanner from "../../components/ProjectDetail/Banner";

import projectReducer, {fetchPosts} from "../api/redux/project";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostDetail} from "../api/redux/project";
import {wrapper} from "../api/store";
import {ApiServices} from "../api/network/ApiServices";
import repeatBg from '../../public/images/static/logo-white.svg';

// import amenities from "../../components/home/Amenities";
import {NextSeo} from "next-seo";
import {useRouter} from "next/router";
// import Gallery from "../../components/ProjectDetail/Gallery";
const MyComponent = () => {

    const getPost = useSelector((state) => state.projectReducer);

    const router = useRouter()
    const dispatch = useDispatch()
    const {slug} = router?.query

    useLayoutEffect(() => {
        let api_services = ApiServices.PROJECT_DETAIL;
        dispatch(fetchPostDetail([api_services + `/${slug}`]))
    }, [slug]);


    const product_title = getPost?.detail[0]?.[0]?.post_title;

    const banner = getPost?.detail[0]?.[0]?.project_details_banner;
    const banner_image = banner?.image;
    const banner_subtitle = banner?.subtitle;

    const overview = getPost?.detail[0]?.[0]?.project_details_overview;
    const glance = getPost?.detail[0]?.[0]?.project_details_glance;
    const feature = getPost?.detail[0]?.[0]?.project_details_amenities;

    const video = getPost?.detail[0]?.[0]?.project_details_video;
    const video_thumb = video?.thumbnail;
    const video_id = video?.url;

    const gallery = getPost?.detail[0]?.[0]?.project_details_gallery;

    const distinct = getPost?.detail[0]?.[0]?.project_details_commodities;

    const brochure = getPost?.detail[0]?.[0]?.project_details_brouchure;


    const footer_top = getPost?.detail[0]?.[0]?.project_details_top_footer;
    const footer_top_title = footer_top?.title;
    const footer_top_image = footer_top?.image;


    const short_desc = overview?.data?.short_description;


    return (
        <StyledComponent>
            <NextSeo
                title={product_title + ' | Duncan Hills By Sanmar'}
                description={short_desc}
            />
            <InnerBanner pageTitle={banner_subtitle} title={product_title} img={banner_image}/>
            <OverviewWithImage data={overview}/>
            <AtGlance data={glance}/>
            <Feature data={feature}/>
            <Video background={'#F2EEE8'} alignment={'center'} img={video_thumb} video_id={video_id}/>
            <Gallery img={img1} background={'#252E47'} topBg={'#F2EEE8'} titleColor={'#252E47'} data={gallery}/>
            <Distinct data={distinct}/>
            <Download data={brochure}/>
            <FooterTop title={footer_top_title} img={footer_top_image} bgColor={footer_top?.color}/>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  .videos .video__box .video__box__inner .shadow-right {
    display: none;
  }

  .gallery {
    background-image: url(${repeatBg});

    .shadow-right, .shadow-bottom {
      display: none;
    }
  }

  .distinct {
    background-image: url(${repeatBg});
  }

  overflow: hidden;

  .video {
    padding-top: 0 !important;
    //padding-bottom: 250px;
  }

  .gallery .gallery-title {
    padding-top: 200px;
  }


  .jeYzzZ .shadow-right {
    display: none;
  }

  .jOGVic h2 {
    display: none;
  }

  .egcJSx h2 {
    padding-top: 190px;
    @media (max-width: 991px) {
      padding-top: 145px;
    }
  }


  @media (max-width: 767px) {
    .gallery-title {
      padding-top: 120px !important;
    }

  }



`;


// export const getServerSideProps = wrapper.getServerSideProps(
//     (store) => async ({req, query}) => {
//         let api_services = ApiServices.PROJECT_DETAIL
//         await store.dispatch(fetchPostDetail([api_services + `/${query.slug}`]))
//     })

export default MyComponent;
