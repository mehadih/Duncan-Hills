import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import Title from "../Title";
import 'swiper/css';
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation, EffectCreative, Autoplay} from "swiper";
import {Img} from "../Img";
import w1 from "../../public/images/dynamic/a1.1.jpg";
import w2 from "../../public/images/dynamic/a1.jpg";
import shadow from '../../public/images/static/amenities.jpg'
import shadowRight from '../../public/images/static/ameni-shadow.svg'
import {title} from "../../styles/globalStyleVars";
import thumb from '../../public/images/dynamic/te.jpg';
import ReactHtmlParser from "react-html-parser";

const MyComponent = ({background, data}) => {
    // console.log(data?.slider)
    const nextsRef = useRef()
    const prevsRef = useRef()

    const [current, setCurrent] = useState('')

    const handleSliderCurrent = () => {
        setTimeout(() => {
            if (document.querySelector('.amenities__big .swiper-pagination-current')) {
                setCurrent(document.querySelector('.amenities__big .swiper-pagination-current').innerHTML)
            }

        }, 200)
    }

    return (
        <StyledComponent background={background} className={'amenities pb-200 as-image-text-slider'}>
            <Container>
                <div className="shadow-left">
                    <svg width="312.199" height="306.272" viewBox="0 0 312.199 306.272">
                        <g id="Group_18014" data-name="Group 18014" transform="translate(-155.801 -2108.943)">
                            <path id="Path_6944" data-name="Path 6944"
                                  d="M226.017,78.435a58.42,58.42,0,0,0,.638-10.854,69.6,69.6,0,0,0-26.817-54.91C187.707,3.731,173.66-.1,153.867-.1h-38.31V70.134c-24.9-3.192-49.8,7.023-64.488,26.178-8.939,12.131-12.77,26.178-12.77,45.971v38.31h70.234a95.969,95.969,0,0,0-1.277,12.77,69.6,69.6,0,0,0,26.817,54.91c12.131,8.939,26.178,12.77,45.971,12.77h38.31v-72.15a95.954,95.954,0,0,0,12.77,1.277,69.6,69.6,0,0,0,54.91-26.817c8.939-12.131,12.77-26.178,12.77-45.971V79.073H226.017ZM171.106,127.6a58.422,58.422,0,0,1-.638-10.854V85.458h47.248c-3.831,12.77-11.493,24.263-21.709,31.925A49.091,49.091,0,0,1,171.106,127.6ZM125.773,10.116h28.094c17.878,0,30.648,3.192,40.864,11.493,14.685,10.854,22.986,28.094,22.986,46.61a78.606,78.606,0,0,1-1.277,12.77v.638H167.914v34.479a57.7,57.7,0,0,0-8.3-16.6,64.234,64.234,0,0,0-33.2-22.986v-66.4Zm41.5,134.083v30.648H116.835a58.376,58.376,0,0,1,21.07-29.371c7.662-5.746,16.6-9.577,28.732-10.854C167.276,137.176,167.276,140.368,167.276,144.2ZM122.581,79.073a57.609,57.609,0,0,1,33.2,22.347c5.108,7.023,8.939,15.962,10.854,27.455a81.406,81.406,0,0,1-12.77.638H122.581ZM48.516,171.654V143.561c0-17.878,3.192-30.648,11.493-40.864C70.863,88.012,88.1,79.712,107.257,79.712a87.249,87.249,0,0,1,12.131,1.277h.638v51.079h39.587c-8.939,1.915-15.962,5.108-21.709,9.577-9.577,7.023-17.239,17.878-21.709,29.371H48.516Zm160.262,81.089H180.684c-17.878,0-30.648-3.192-40.864-11.493-14.685-10.854-22.986-28.094-22.986-46.61a62.972,62.972,0,0,1,1.915-15.324v-.639h51.079V144.2a71.871,71.871,0,0,0,8.3,17.239c7.023,9.577,17.878,17.239,29.371,21.709v69.6Zm3.192-72.788a58.376,58.376,0,0,1-29.371-21.07c-5.108-7.023-8.3-14.685-10.216-24.9,2.554,0,5.746-.639,8.939-.639H211.97v46.61Zm77.9-63.211c0,17.878-3.192,30.648-11.493,40.864-10.854,14.685-28.094,22.986-46.61,22.986a62.97,62.97,0,0,1-15.324-1.916H215.8V130.791H176.214c8.939-1.915,15.962-5.108,21.709-9.577,10.854-7.662,18.516-19.155,22.347-31.925h68.957v27.455Z"
                                  transform="translate(169.195 2154.171)" fill="#8f6d4f" opacity="0.2"/>
                            <path id="Path_7054" data-name="Path 7054"
                                  d="M113.178,31.226a23.3,23.3,0,0,0,.255-4.33,27.762,27.762,0,0,0-10.7-21.9C97.9,1.428,92.294-.1,84.4-.1H69.117V27.916A28.069,28.069,0,0,0,43.394,38.358C39.828,43.2,38.3,48.8,38.3,56.7V71.976H66.316a38.282,38.282,0,0,0-.509,5.094,27.762,27.762,0,0,0,10.7,21.9c4.839,3.566,10.442,5.094,18.337,5.094h15.281V75.287a38.275,38.275,0,0,0,5.094.509,27.762,27.762,0,0,0,21.9-10.7c3.566-4.839,5.094-10.442,5.094-18.337V31.481H113.178Zm-21.9,19.611a23.3,23.3,0,0,1-.255-4.33V34.028h18.847a24.916,24.916,0,0,1-8.659,12.734A19.582,19.582,0,0,1,91.275,50.837ZM73.192,3.975H84.4c7.131,0,12.225,1.273,16.3,4.584a22.924,22.924,0,0,1,9.169,18.592,31.355,31.355,0,0,1-.509,5.094V32.5H90V46.253a23.016,23.016,0,0,0-3.311-6.622,25.622,25.622,0,0,0-13.244-9.169V3.975ZM89.747,57.459V69.684H69.626a23.285,23.285,0,0,1,8.4-11.716,22.121,22.121,0,0,1,11.461-4.33A16.865,16.865,0,0,1,89.747,57.459ZM71.919,31.481A22.98,22.98,0,0,1,85.162,40.4a25.332,25.332,0,0,1,4.33,10.952A32.472,32.472,0,0,1,84.4,51.6H71.919ZM42.375,68.411V57.2c0-7.131,1.273-12.225,4.584-16.3a23.057,23.057,0,0,1,18.847-9.169,34.8,34.8,0,0,1,4.839.509H70.9V52.62H86.69a20.848,20.848,0,0,0-8.659,3.82,26.723,26.723,0,0,0-8.659,11.716h-27ZM106.3,100.756H95.1c-7.131,0-12.225-1.273-16.3-4.584a22.924,22.924,0,0,1-9.169-18.592,25.118,25.118,0,0,1,.764-6.112v-.255H90.765V57.459a28.669,28.669,0,0,0,3.311,6.877A26.723,26.723,0,0,0,105.792,73v27.761Zm1.273-29.034A22.808,22.808,0,0,1,91.784,53.384c1.019,0,2.292-.255,3.566-.255h12.225V71.722Zm31.072-25.214c0,7.131-1.273,12.225-4.584,16.3a22.924,22.924,0,0,1-18.592,9.169,25.118,25.118,0,0,1-6.112-.764H109.1v-19.1H93.312a20.848,20.848,0,0,0,8.659-3.82,23.9,23.9,0,0,0,8.914-12.734h27.506V46.508Z"
                                  transform="translate(117.501 2109.043)" fill="#b2a89f" opacity="0.2"/>
                        </g>
                    </svg>

                </div>
                <div className="slider-nav">
                    <ul>
                        <li ref={prevsRef}>
                            <svg width="72.914" height="22.828" viewBox="0 0 72.914 22.828">
                                <g id="Button_-_Nav_-_Left" data-name="Button - Nav - Left"
                                   transform="translate(-1032.086 -2228.586)">
                                    <line id="Line_3549" data-name="Line 3549" x2="70"
                                          transform="translate(1034 2240)" fill="none" stroke="#34342e"
                                          stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3550" data-name="Line 3550" x1="10" y2="10"
                                          transform="translate(1033.5 2230)" fill="none" stroke="#34342e"
                                          stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3551" data-name="Line 3551" x1="10" y1="10"
                                          transform="translate(1033.5 2240)" fill="none" stroke="#34342e"
                                          stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </li>
                        <li>
                            <svg width="2" height="22" viewBox="0 0 2 22">
                                <line id="Line_3552" data-name="Line 3552" y2="20"
                                      transform="translate(1 1)" fill="none" stroke="#34342e"
                                      stroke-linecap="round" stroke-width="2"/>
                            </svg>
                        </li>
                        <li ref={nextsRef}>
                            <svg width="72.914" height="22.828"
                                 viewBox="0 0 72.914 22.828">
                                <g id="Button_-_Nav_-_Right" data-name="Button - Nav - Right"
                                   transform="translate(-1037.5 -5796.586)">
                                    <line id="Line_3549" data-name="Line 3549" x1="70"
                                          transform="translate(1038.5 5808)" fill="none" stroke="#34342e"
                                          stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3550" data-name="Line 3550" x2="10" y2="10"
                                          transform="translate(1099 5798)" fill="none" stroke="#34342e"
                                          stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3551" data-name="Line 3551" y1="10" x2="10"
                                          transform="translate(1099 5808)" fill="none" stroke="#34342e"
                                          stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </li>
                    </ul>

                    <p>0{current}<span>/0{data?.slider?.length}</span></p>
                </div>

                <Row>
                    <Col sm={{span: 5, offset: 3}}>
                        <Title margin={'0 0 0px 0'} fontSize={80} lineHeight={80} center text={data?.title}/>
                    </Col>
                </Row>

                <Row>
                    <Col className={'amenities__big'} sm={{span: 5, offset: 3}}>
                        <div className="amenities__big__slider">


                            <Swiper
                                Swiper
                                modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                                loop={true}
                                autoplay={{
                                    delay: 8000,
                                    disableOnInteraction: false,
                                }}
                                initialSlide={1}
                                pagination={{
                                    // el: '.swiper-pagination',
                                    type: "fraction",
                                }}
                                navigation={{
                                    prevEl: prevsRef.current,
                                    nextEl: nextsRef.current,
                                }}
                                onBeforeInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevsRef.current;
                                    swiper.params.navigation.nextEl = nextsRef.current;
                                }}

                                speed={900}
                                onSlideChange={(s) => handleSliderCurrent()}
                            >
                                {
                                    data?.slider && data?.slider?.length > 0 &&
                                    data?.slider.map((element, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="single">
                                                    <div className="single__img">
                                                        <Img src={element?.image}/>
                                                    </div>
                                                </div>
                                            </SwiperSlide>

                                        );
                                    })
                                }


                            </Swiper>
                        </div>


                    </Col>

                    <Col className={'amenities__right'} sm={4}>
                        <Swiper
                            Swiper
                            modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                            loop={true}
                            autoplay={{
                                delay: 8000,
                                disableOnInteraction: false,
                            }}
                            initialSlide={2}
                            pagination={{
                                el: '.swiper-pagination',
                                type: "fraction",
                            }}

                            navigation={{
                                prevEl: prevsRef.current,
                                nextEl: nextsRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevsRef.current;
                                swiper.params.navigation.nextEl = nextsRef.current;
                            }}

                            speed={900}
                            onSlideChange={(s) => handleSliderCurrent()}

                        >
                            {
                                data?.slider && data?.slider?.length > 0 &&
                                data?.slider.map((element, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            {ReactHtmlParser(element?.description)}
                                            <h4>{element?.name}</h4>
                                            <p>{element?.designation}</p>
                                        </SwiperSlide>

                                    );
                                })
                            }


                        </Swiper>


                    </Col>
                </Row>


            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  overflow: hidden;
  background-color: ${p => p.background ? p.background : '#FFF'};


  .container {
    position: relative;

    .slider-nav {
      position: absolute;
      bottom: 50px;
      width: 33.333333%;
      right: 0;
      z-index: 3;
      padding-left: 20px;

      ul {
        display: flex;

        li {
          &:nth-of-type(2) {
            padding: 0 20px;
          }

          &:not(:nth-of-type(2)) {
            cursor: pointer;
          }
        }

      }

      p {
        position: absolute;
        font-size: 36px;
        line-height: 40px;
        font-family: ${title};
        color: #736640;
        bottom: -10px;
        right: 15px;

        span {
          font-size: 20px;
          color: rgba(115, 102, 64, 0.50);
        }
      }
    }
  }

  .amenities__big {
    padding-right: 40px;
    position: relative;


    &__slider {
      position: relative;
      background-color: #DDD;

      .shadow {
        position: absolute;
        bottom: -50px;
        right: calc(100% - 43px);
        z-index: 2;
        width: 120px;

        img {
          width: 100%;
          object-fit: cover;
        }
      }

      .shadow-right {
        position: absolute;
        bottom: -52px;
        right: -49px;
      }

      .single {
        padding-top: calc(400 / 370 * 100%);
      }
    }

    &__thumb {
      width: 30%;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      left: 15px;
      height: fit-content;
      z-index: 3;

      &__inner {
        .single {
          padding-top: 100%;
          background-color: #EEE;
        }
      }
    }
  }

  .amenities__right {
    padding-top: 50px;
    position: relative;

    p {
      font-size: 20px;
      line-height: 28px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      white-space: normal;
      @media (max-width: 1024px) {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        white-space: normal;
      }
    }

    h4 {
      font-size: 24px;
      font-weight: bold;
      line-height: 32px;
      margin-top: 28px;
      margin-bottom: 0px;
      color: #736640;
    }

  }

  @media (max-width: 950px) {

    .col-sm-5, .col-sm-4 {
      min-width: 50%;
      margin-left: 0;
    }

    .amenities__big__slider .shadow {
      z-index: 1;
      width: 120px;
      right: 0;
      left: calc(23% + 180px);
    }

    .slider-nav {
      bottom: 0 !important;
      width: 50% !important;

      li {
        &:not(:nth-of-type(2)) {
          max-width: 30%;
        }

        svg {
          max-width: 100%;
        }
      }
    }

  }

  @media (max-width: 767px) {
    .container {
      padding: 0;
    }

    .title {
      margin-bottom: 0;
    }

    .col-sm-5, .col-sm-4 {
      min-width: 100%;
      margin-left: 0;
    }

    .amenities__big {
      padding-right: 30px;
      padding-left: 30px;

      &__thumb {
        height: 150px;
        width: 55%;
        bottom: -75px;

        div {
          height: 100%;
          width: 100%;
        }

        .single {
          padding: 0 !important;
        }
      }
    }

    .amenities__big__slider .shadow {
      left: 45%;
    }

    .amenities__right {
      margin-top: 40px;
      padding-top: 0;
      padding-right: 30px;
      padding-left: 30px;
    }

    .container .slider-nav {
      bottom: -40px !important;
      width: 100% !important;
    }
  }

  @media (max-width: 500px) {
    .container .slider-nav {
      bottom: 0px !important;
      width: 100% !important;
    }

    .slider-nav ul {
      max-width: 55%;

      li:not(:nth-of-type(2)) {
        width: 45%;

        svg {
          max-width: 100%;
        }
      }
    }

    .amenities__right {
      margin-bottom: 60px;
    }
  }

  .swiper-pagination {
    opacity: 0;
    visibility: hidden;
  }

  .shadow-left {
    position: absolute;
    left: 0;
    top: 10%;
  }
`;

export default MyComponent;
