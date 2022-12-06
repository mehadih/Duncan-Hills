import React, {useLayoutEffect} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import ProjectList from "../../components/ProjectList/ProjectList";
import PentHouse from "../../components/ProjectList/PentHouse";
import FooterTop from "../../components/FooterTop";
import Gallery from "../../components/Gallery";
import bannerImg from "../../public/images/static/project)banner.jpg";
import InnerBanner from "../../components/InnerBanner";
import {wrapper} from "../api/store";
import {ApiServices} from "../api/network/ApiServices";
import {fetchPosts} from "../api/redux/project";
import {useDispatch, useSelector} from "react-redux";
import projectReducer from "../api/redux/project";
import {get} from "../api/network/AxiosService";
import {NextSeo} from "next-seo";
import {fetchData} from "../api/redux/contact";

const MyComponent = () => {
    const getPost = useSelector((state) => state.projectReducer);

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        let api_services = ApiServices.PROJECT_LIST;
        dispatch(fetchPosts([api_services]))

    }, []);


    const banner = getPost?.posts?.page_data?.[0]?.banner;
    const banner_title = banner?.title;
    const banner_subtitle = banner?.subtitle;
    const banner_image = banner?.image;

    const penthouse = getPost?.posts?.page_data?.[0]?.penthouse;

    const footer_top = getPost?.posts?.page_data?.[0]?.top_footer;
    const footer_top_title = footer_top?.title;
    const footer_top_image = footer_top?.image;

    const projects = getPost?.posts?.product_list;


    return (
        <StyledComponent>
            <NextSeo
                title={'Residences | Duncan Hills By Sanmar'}
                description={'Duncan Hills by Sanmar sets a new benchmark for luxury in Chattogram and Bangladesh. ' +
                    'Bringing a level of aesthetics and quality that is unsurpassed and a lifestyle that is without equal, ' +
                    'Duncan Hills possesses the finest expertise from across the globe. Encompassing of four projects and ' +
                    'six residential towers, Sanmar Kensington, Sanmar Knightsbridge, Sanmar Belgravia and Sanmar Cavendish, ' +
                    'Duncan Hills is suited for a lifestyle that desires the best.'}

            />
            <InnerBanner pageTitle={banner_subtitle} title={banner_title} img={banner_image}/>
            <ProjectList data={projects}/>
            <PentHouse data={penthouse}/>
            <FooterTop title={footer_top_title} img={footer_top_image}/>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`

`;

// export const getServerSideProps = wrapper.getServerSideProps(
//     (store) => async () => {
//         let api_services = ApiServices.PROJECT_LIST;
//         await store.dispatch(fetchPosts([api_services]))
//     });

export default MyComponent;
