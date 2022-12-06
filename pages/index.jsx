import {useEffect} from "react";
import {useSelector} from "react-redux";
import Post from "../components/home/Post";
import {ApiServices} from "./api/network/ApiServices";
import {fetchHome} from "./api/redux/home";
import {wrapper} from "./api/store";
import Title from "../components/Title";
import Button from "../components/Button";
import {Links} from "../components/Link";
import Banner from "../components/home/Banner";
import About from "../components/About";
import ZigZag from "../components/home/ZigZag";
import BannerDivider from "../components/home/BannerDivider";
import Quintess from "../components/home/Quintess";
import WhyInvest from "../components/home/WhyInvest";
import Gallery from "../components/home/Gallery";
import FreshAir from "../components/home/FreshAir";
import VirtualTour from "../components/VirtualTour";
import Map from "../components/home/Map";
import FooterTop from '../components/FooterTop';
import Amenities from "../components/ImageTextSlider";
import {NextSeo} from "next-seo";
import {SwiperSlide} from "swiper/react";
import {Img} from "../components/Img";


const Home = () => {
    const homeData = useSelector((state) => state.homeReducer);
    const allHomeData = homeData?.posts?.[0];

    const Home_Iconic = allHomeData?.home_iconic;

    const properties = allHomeData?.properties;

    const amenities = allHomeData?.amenities;

    const bannarImages = allHomeData?.image_fullbox;

    const quintess = allHomeData?.quintess;

    const invest = allHomeData?.invest;

    const gallery = allHomeData?.gallery;

    // const virtualTour=allHomeData?;

    const greenest = allHomeData?.greenest;
    const map = allHomeData?.map;

    const footer = allHomeData?.top_footer;
    const title = footer?.title;
    const image = footer?.bg_image;


    return (
        <>
            <NextSeo
                title={'Duncan Hills By Sanmar'}
                description={'Duncan Hills by Sanmar sets a new benchmark for luxury in Chattogram and Bangladesh. ' +
                    'Bringing a level of aesthetics and quality that is unsurpassed and a lifestyle that is without equal, ' +
                    'Duncan Hills possesses the finest expertise from across the globe. Encompassing of four projects and ' +
                    'six residential towers, Sanmar Kensington, Sanmar Knightsbridge, Sanmar Belgravia and Sanmar Cavendish, ' +
                    'Duncan Hills is suited for a lifestyle that desires the best.'}

            />
            <Banner/>
            <About link={'/about'} subTitle={Home_Iconic?.subtitle}
                   title={Home_Iconic?.title} desc={Home_Iconic?.description}/>
            <ZigZag data={properties}/>
            <Amenities data={amenities}/>
            <BannerDivider data={bannarImages}/>
            <Quintess data={quintess}/>
            <WhyInvest investSlider={invest?.slider} title={invest?.title}/>
            <Gallery data={gallery}/>
            <VirtualTour/>
            <FreshAir data={greenest}/>
            <Map data={map}/>
            <FooterTop title={title} img={image} address={footer?.address}/>
        </>
    );

};


Home.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
    let api_services = ApiServices.HOME;
    await store.dispatch(fetchHome([api_services]));
});

export default Home;
