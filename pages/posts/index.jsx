import Post from "../../components/post/Post";
import {useDispatch, useSelector} from "react-redux";
import {ApiServices} from "../api/network/ApiServices";
import {fetchPosts} from "../api/redux/post";
import {useEffect} from "react";
import {wrapper} from "../api/store";
import {NextSeo} from "next-seo";

const Home = () => {

    const dispatch = useDispatch()
    const getPost = useSelector(state => state.postReducer)
    let api_services = ApiServices.POSTS


    useEffect(() => {

        // let param = {
        //     [ApiParamKey.type]: 'type',
        //     [ApiParamKey.location]: 'location'
        // }
        // let headers = {
        //     auth: '2JSU0A013FASDFI'
        // }
        // dispatch(fetchPosts([api_services, param, headers]))


    }, [])

    return (
        <>
            <NextSeo
                title={`Post | Web`}
                description={'Building materials store in Dhaka'}
                // canonical={``}
                // openGraph={{
                //     url: 'https://www.url.ie/a',
                //     title: 'Open Graph Title',
                //     description: 'Open Graph Description',
                //     images: [
                //         {
                //             url: 'https://www.example.ie/og-image-01.jpg',
                //             width: 800,
                //             height: 600,
                //             alt: 'Og Image Alt',
                //             type: 'image/jpeg',
                //         }
                //     ],
                //     site_name: 'Mobil Bangladesh',
                // }}
                // twitter={{
                //     handle: '@handle',
                //     site: '@site',
                //     cardType: 'summary_large_image',
                // }}
            />
            <Post getPost={getPost}/>
        </>
    )


}


export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async () => {
        let api_services = ApiServices.POSTS
        await store.dispatch(fetchPosts([api_services]))
    })


export default Home;



