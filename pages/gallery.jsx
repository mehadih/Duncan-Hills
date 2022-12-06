import React, {useLayoutEffect} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import {NextSeo} from "next-seo";
import ProjectList from "../components/gallery/ProjectList";
import {wrapper} from "./api/store";
import {ApiServices} from "./api/network/ApiServices";
import {fetchData} from "./api/redux/gallery";
import {useDispatch, useSelector} from "react-redux";
import InnerBanner from "../components/InnerBanner";
import FooterTop from "../components/FooterTop";

const MyComponent = () => {

    const galleryData = useSelector((state) => state.galleryReducer);

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        let api_services = ApiServices.GALLERY;
        dispatch(fetchData([api_services]))
    }, []);

    const galleryPageData = galleryData?.data?.page_data?.[0];
    const banner = galleryPageData?.banner;

    const footer = galleryPageData?.top_footer;

    const title = footer?.title;
    const image = footer?.image;



    return (
        <StyledComponent>

            <NextSeo
                title={'Gallery | Duncan Hills By Sanmar'}
                description={'Duncan Hills by Sanmar sets a new benchmark for luxury in Chattogram and Bangladesh. ' +
                    'Bringing a level of aesthetics and quality that is unsurpassed and a lifestyle that is without equal, ' +
                    'Duncan Hills possesses the finest expertise from across the globe. Encompassing of four projects and ' +
                    'six residential towers, Sanmar Kensington, Sanmar Knightsbridge, Sanmar Belgravia and Sanmar Cavendish, ' +
                    'Duncan Hills is suited for a lifestyle that desires the best.'}

            />
            <InnerBanner pageTitle={banner?.subtitle} title={banner?.title} img={banner?.image}/>
            <ProjectList data={galleryData?.data?.gallery_content}/>
            <FooterTop title={title} img={image}></FooterTop>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`

`;
// export const getServerSideProps = wrapper.getServerSideProps(
//     (store) => async () => {
//         let api_services = ApiServices.GALLERY;
//         await store.dispatch(fetchData([api_services]))
//     });

export default MyComponent;
