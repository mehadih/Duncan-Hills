import {Provider} from 'react-redux';
import store from './api/store'
import {wrapper} from "./api/store";
import Menu from "../components/Menu";
import GlobalStyle from "../styles/globalStyle";
import {DefaultSeo} from "next-seo";
import SEO from '../next-seo.config';
import 'bootstrap/dist/css/bootstrap.min.css';
import "lightgallery.js/dist/css/lightgallery.css";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {AnimatePresence} from "framer-motion";
import Router, {useRouter} from 'next/router'
import {useEffect, useState} from "react";
import Footer from "../components/Footer";

function MyApp({Component, pageProps}) {

    const router = useRouter()

    return (
        // <Provider store={store}>
        <>
            <ToastContainer position="top-right" autoClose={4000} closeOnClick hideProgressBar={true}/>
            <DefaultSeo {...SEO}/>
            <GlobalStyle/>
            <Menu/>
            <AnimatePresence exitBeforeEnter>
                <Component key={router?.pathname} {...pageProps} />
            </AnimatePresence>
            <Footer/>
        </>

        // </Provider>
    )
}

export default wrapper.withRedux(MyApp)
