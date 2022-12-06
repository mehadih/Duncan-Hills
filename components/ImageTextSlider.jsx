import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import Title from "./Title";
import 'swiper/css';
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation, EffectCreative, Autoplay} from "swiper";
import {Img} from "./Img";
import w1 from "../public/images/dynamic/a1.1.jpg";
import w2 from "../public/images/dynamic/a1.jpg";
import shadow from '../public/images/static/amenities.jpg'
import shadowRight from '../public/images/static/ameni-shadow.svg'
import {title} from "../styles/globalStyleVars";
import ReactHtmlParser from "react-html-parser";


const MyComponent = ({background, data}) => {
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
                    <Col>
                        <Title margin={'0 0 50px 0'} fontSize={120} lineHeight={110} center text={data?.title}/>
                    </Col>
                </Row>

                <Row>
                    <Col className={'amenities__big'} sm={8}>
                        <div className="amenities__big__slider">
                            <div className="shadow">
                                <img src={shadow} alt=""/>
                            </div>

                            <img className="shadow-right" src={shadowRight} alt=""/>

                            <Swiper
                                Swiper
                                modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                                loop={true}
                                allowTouchMove={false}
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
                                    data?.slider?.map((element, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="single">
                                                    <div className="single__img">
                                                        <Img src={element?.image1}/>
                                                    </div>
                                                </div>
                                            </SwiperSlide>

                                        );
                                    })
                                }
                            </Swiper>
                        </div>

                        <div className="amenities__big__thumb">
                            <div className="amenities__big__thumb__inner">
                                <Swiper
                                    Swiper
                                    modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                                    loop={true}
                                    allowTouchMove={false}
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
                                        data?.slider?.map((element, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <div className="single">
                                                        <div className="single__img">
                                                            <Img src={element?.image2}/>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>

                                            );
                                        })
                                    }


                                </Swiper>
                            </div>
                        </div>

                    </Col>

                    <Col className={'amenities__right'} sm={4}>
                        <Swiper
                            Swiper
                            modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                            loop={true}
                            allowTouchMove={false}
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
                                data?.slider?.map((element, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <Title fontSize={36} lineHeight={40} margin={'0 0 40px 0'}
                                                   text={element?.subtitle}/>
                                            {ReactHtmlParser(element?.description)}
                                            {/*<p>Unwind at the world-class gym facilities offered by Sanmar or take a step in the*/}
                                            {/*    steam rooms,*/}
                                            {/*    rejuvenate in the Sauna. Float away with exotic facials, nutritional deep-tissue*/}
                                            {/*    massages*/}
                                            {/*    and relaxing spa ambiance at the hands of the trained therapists.</p>*/}
                                        </SwiperSlide>

                                    );
                                })
                            }


                            {/*<SwiperSlide>*/}
                            {/*    <Title fontSize={36} lineHeight={40} margin={'0 0 40px 0'}*/}
                            {/*           text={'World class Gym & Sauna'}/>*/}
                            {/*    <p>Unwind at the world-class gym facilities offered by Sanmar or take a step in the*/}
                            {/*        steam rooms,*/}
                            {/*        rejuvenate in the Sauna. Float away with exotic facials, nutritional deep-tissue*/}
                            {/*        massages*/}
                            {/*        and relaxing spa ambiance at the hands of the trained therapists.</p>*/}
                            {/*</SwiperSlide>*/}
                            {/*<SwiperSlide>*/}
                            {/*    <Title fontSize={36} lineHeight={40} margin={'0 0 40px 0'}*/}
                            {/*           text={'World class Gym & Sauna'}/>*/}
                            {/*    <p>Unwind at the world-class gym facilities offered by Sanmar or take a step in the*/}
                            {/*        steam rooms,*/}
                            {/*        rejuvenate in the Sauna. Float away with exotic facials, nutritional deep-tissue*/}
                            {/*        massages*/}
                            {/*        and relaxing spa ambiance at the hands of the trained therapists.</p>*/}
                            {/*</SwiperSlide>*/}

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
    padding-left: 170px;
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
        padding-top: calc(570 / 600 * 100%);
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
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      white-space: normal;
      @media (max-width: 1024px) {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        white-space: normal;
      }
    }

  }

  @media (max-width: 950px) {
    .col-sm-8, .col-sm-4 {
      min-width: 100%;
      padding: 0 30px;
    }

    .amenities__big__thumb {
      width: 45%;
      top: auto;
      bottom: -200px;
    }

    .amenities__right {
      margin-top: 250px;
      margin-bottom: 100px;

      p {
        display: block;
        overflow: visible;
      }
    }

    .amenities__big__slider .shadow {
      z-index: 1;
      width: 120px;
      right: 0;
      left: calc(23% + 180px);
    }

    .slider-nav {
      bottom: 0 !important;
      width: 100% !important;

    }

  }

  @media (max-width: 767px) {
    .container {
      padding: 0;
    }

    .amenities__big__thumb {
      height: 150px;
      width: 55%;
      bottom: -75px;
      left: 30px;

      div {
        height: 100%;
        width: 100%;
      }

      .single {
        padding: 0 !important;
      }
    }

    .amenities__big__slider .shadow {
      left: 45%;
    }

    .amenities__right {
      margin-top: 120px;
    }
  }

  @media (max-width: 500px) {

    .col-sm-8 {
      padding: 0;
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
`;

export default MyComponent;
