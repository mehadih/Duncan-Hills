import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import Title from "../Title";
import {hover, title} from "../../styles/globalStyleVars";
import 'swiper/css';
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css/thumbs";
import {Pagination, Navigation, EffectCreative, Autoplay, Thumbs, FreeMode} from "swiper";
import {Img} from '../Img';
import w1 from '../../public/images/dynamic/g1.1.jpg'
import w2 from '../../public/images/dynamic/g1.jpg'
import w3 from '../../public/images/dynamic/g3.jpg'


const MyComponent = ({data}) => {
    const nextRef = useRef()
    const prevRef = useRef()
    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    useEffect(() => {
        const getMiddleDots = document.querySelectorAll('.as-gallery .why-invest__slider__center .swiper-pagination-bullet')
        const getLeftDots = document.querySelectorAll('.as-gallery .why-invest__slider__left .swiper-pagination-bullet')
        const getRightDots = document.querySelectorAll('.as-gallery .why-invest__slider__right .swiper-pagination-bullet')

        getMiddleDots.forEach((e, i) => {
            e.addEventListener('click', (a, b) => {
                getLeftDots[i].click()
                getRightDots[i].click()
            })
        })

    }, [data]);

    return (
        <StyledComponent className={'why-invest pb-200 as-gallery'}>
            <Container>
                <Row className={'why-invest__title'}>
                    <Col>
                        <Title margin={'0 0 0px 0'} center color={'#F2EEE8'} fontSize={120} lineHeight={110}
                               text={data?.title}/>
                    </Col>
                </Row>


            </Container>

            <div className="why-invest__slider">

                <div className="shadow-small">
                    <svg width="164.152" height="165.482" viewBox="0 0 164.152 165.482">
                        <g id="Group_18012" data-name="Group 18012" transform="translate(-1112.14 -10135.968)">
                            <path id="Path_7061" data-name="Path 7061"
                                  d="M115.64,32.257a24.069,24.069,0,0,0,.263-4.472A28.675,28.675,0,0,0,104.855,5.161C99.857,1.478,94.069-.1,85.914-.1H70.131V28.837A28.992,28.992,0,0,0,43.561,39.622c-3.683,5-5.261,10.786-5.261,18.94V74.347H67.237a39.539,39.539,0,0,0-.526,5.261,28.675,28.675,0,0,0,11.049,22.623c5,3.683,10.786,5.261,18.94,5.261h15.784V77.766a39.534,39.534,0,0,0,5.261.526,28.675,28.675,0,0,0,22.623-11.049c3.683-5,5.261-10.786,5.261-18.94V32.52H115.64ZM93.017,52.512a24.071,24.071,0,0,1-.263-4.472V35.15H112.22A25.735,25.735,0,0,1,103.276,48.3,20.226,20.226,0,0,1,93.017,52.512ZM74.34,4.109H85.914c7.366,0,12.627,1.315,16.836,4.735a23.678,23.678,0,0,1,9.47,19.2,32.385,32.385,0,0,1-.526,5.261v.263H91.7V47.777a23.772,23.772,0,0,0-3.42-6.84A26.465,26.465,0,0,0,74.6,31.467V4.109Zm17.1,55.243V71.979H70.657a24.051,24.051,0,0,1,8.681-12.1,22.848,22.848,0,0,1,11.838-4.472A17.42,17.42,0,0,1,91.439,59.352ZM73.024,32.52A23.735,23.735,0,0,1,86.7,41.727a26.165,26.165,0,0,1,4.472,11.312,33.54,33.54,0,0,1-5.261.263H73.024ZM42.509,70.664V59.089c0-7.366,1.315-12.627,4.735-16.836a23.815,23.815,0,0,1,19.467-9.47,35.947,35.947,0,0,1,5,.526h.263V54.354h16.31A21.534,21.534,0,0,0,79.338,58.3a27.6,27.6,0,0,0-8.944,12.1H42.509Zm66.029,33.409H96.963c-7.366,0-12.627-1.315-16.836-4.735a23.678,23.678,0,0,1-9.47-19.2,25.945,25.945,0,0,1,.789-6.313v-.263H92.491V59.352a29.612,29.612,0,0,0,3.42,7.1,27.6,27.6,0,0,0,12.1,8.944v28.674Zm1.315-29.989a23.558,23.558,0,0,1-16.31-18.94c1.052,0,2.368-.263,3.683-.263h12.627v19.2ZM141.946,48.04c0,7.366-1.315,12.627-4.735,16.836a23.678,23.678,0,0,1-19.2,9.47,25.944,25.944,0,0,1-6.313-.789h-.263V53.828H95.121a21.533,21.533,0,0,0,8.944-3.946,24.689,24.689,0,0,0,9.207-13.153h28.411V48.04Z"
                                  transform="translate(1073.84 10136.067)" fill="#8f6d4f" opacity="0.2"/>
                            <path id="Path_7063" data-name="Path 7063"
                                  d="M73.792,14.749a11.046,11.046,0,0,0,.121-2.052,13.159,13.159,0,0,0-5.07-10.382C66.549.624,63.893-.1,60.15-.1H52.907V13.179a13.3,13.3,0,0,0-12.193,4.95c-1.69,2.294-2.414,4.95-2.414,8.692v7.243H51.579a18.144,18.144,0,0,0-.241,2.414,13.159,13.159,0,0,0,5.07,10.382c2.294,1.69,4.95,2.414,8.692,2.414h7.243V35.633a18.142,18.142,0,0,0,2.414.241A13.159,13.159,0,0,0,85.14,30.8c1.69-2.294,2.414-4.95,2.414-8.692V14.869H73.792Zm-10.382,9.3a11.046,11.046,0,0,1-.121-2.052V16.077h8.933a11.81,11.81,0,0,1-4.1,6.036A9.282,9.282,0,0,1,63.41,24.044ZM54.839,1.832H60.15c3.38,0,5.795.6,7.726,2.173a10.866,10.866,0,0,1,4.346,8.813,14.862,14.862,0,0,1-.241,2.414v.121H62.806v6.519a10.909,10.909,0,0,0-1.569-3.139,12.145,12.145,0,0,0-6.277-4.346V1.832Zm7.847,25.351v5.795H53.149a11.037,11.037,0,0,1,3.984-5.553,10.485,10.485,0,0,1,5.432-2.052A7.994,7.994,0,0,1,62.686,27.183Zm-8.45-12.314a10.892,10.892,0,0,1,6.277,4.225,12.007,12.007,0,0,1,2.052,5.191,15.392,15.392,0,0,1-2.414.121H54.235Zm-14,17.5V27.062c0-3.38.6-5.795,2.173-7.726a10.929,10.929,0,0,1,8.933-4.346,16.5,16.5,0,0,1,2.294.241h.121v9.658h7.485a9.882,9.882,0,0,0-4.1,1.811,12.667,12.667,0,0,0-4.1,5.553h-12.8Zm30.3,15.332H65.221c-3.38,0-5.795-.6-7.726-2.173a10.866,10.866,0,0,1-4.346-8.813,11.906,11.906,0,0,1,.362-2.9V33.7h9.658V27.183a13.589,13.589,0,0,0,1.569,3.259,12.667,12.667,0,0,0,5.553,4.1V47.705Zm.6-13.762a10.811,10.811,0,0,1-7.485-8.692c.483,0,1.086-.121,1.69-.121h5.795v8.813ZM85.864,21.992c0,3.38-.6,5.795-2.173,7.726a10.866,10.866,0,0,1-8.813,4.346,11.906,11.906,0,0,1-2.9-.362H71.86V24.648H64.376a9.882,9.882,0,0,0,4.1-1.811A11.33,11.33,0,0,0,72.705,16.8H85.743v5.191Z"
                                  transform="translate(1188.738 10252.176)" fill="#8f6d4f" opacity="0.2"/>
                        </g>
                    </svg>

                </div>

                <div className="d-flex nav-wrap">
                    <Col sm={{span: 6, offset: 3}}>
                        <div className={'navs'}>
                            <div className="demo-two__btn__prev " ref={prevRef}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38.414" height="30.828"
                                     viewBox="0 0 38.414 30.828">
                                    <g id="Group_13211" data-name="Group 13211" transform="translate(1.414 1.414)">
                                        <line id="Line_3546" data-name="Line 3546" x2="36" transform="translate(0 14)"
                                              fill="none" stroke="#f2eee8" stroke-linecap="round" stroke-width="2"/>
                                        <line id="Line_3547" data-name="Line 3547" y1="14" x2="14" fill="none"
                                              stroke="#f2eee8" stroke-linecap="round" stroke-width="2"/>
                                        <line id="Line_3548" data-name="Line 3548" x2="14" y2="14"
                                              transform="translate(0 14)" fill="none" stroke="#f2eee8"
                                              stroke-linecap="round" stroke-width="2"/>
                                    </g>
                                </svg>
                            </div>

                            <div className="demo-two__btn__next" ref={nextRef}>
                                <svg width="38.414" height="30.829"
                                     viewBox="0 0 38.414 30.829">
                                    <g id="Group_13211" data-name="Group 13211"
                                       transform="translate(-818.573 -2890.544)">
                                        <line id="Line_3546" data-name="Line 3546" x1="36"
                                              transform="translate(819.573 2905.958)" fill="none" stroke="#f2eee8"
                                              stroke-linecap="round" stroke-width="2"/>
                                        <line id="Line_3547" data-name="Line 3547" x1="14" y1="14"
                                              transform="translate(841.573 2891.958)" fill="none" stroke="#f2eee8"
                                              stroke-linecap="round" stroke-width="2"/>
                                        <line id="Line_3548" data-name="Line 3548" x1="14" y2="14"
                                              transform="translate(841.573 2905.958)" fill="none" stroke="#f2eee8"
                                              stroke-linecap="round" stroke-width="2"/>
                                    </g>
                                </svg>
                            </div>

                        </div>
                    </Col>

                </div>


                <div className="d-flex">
                    <Col sm={3} className={'pl-0 why-invest__slider__left'}>

                        <Swiper
                            Swiper
                            modules={[FreeMode, Autoplay, Pagination, Navigation, Thumbs]}
                            loop={true}
                            allowTouchMove={false}
                            autoplay={{
                                delay: 7000,
                                disableOnInteraction: false,
                            }}

                            initialSlide="4"
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            thumbs={{swiper: thumbsSwiper}}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            // effect={"creative"}
                            // creativeEffect={{
                            //     prev: {
                            //         shadow: true,
                            //         translate: [0, 0, -400],
                            //     },
                            //     next: {
                            //         translate: ["100%", 0, 0],
                            //     },
                            // }}
                            speed={900}
                        >
                            {
                                data?.images && data?.images?.length > 0 &&
                                data?.images?.map((element, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="single">
                                                <Img src={element?.image}/>
                                            </div>
                                        </SwiperSlide>

                                    );
                                })
                            }

                            {/*<SwiperSlide>*/}
                            {/*    <div className="single">*/}
                            {/*        <Img src={w1}/>*/}
                            {/*    </div>*/}
                            {/*</SwiperSlide>*/}

                            {/*<SwiperSlide>*/}
                            {/*    <div className="single">*/}
                            {/*        <Img src={w1}/>*/}
                            {/*    </div>*/}
                            {/*</SwiperSlide>*/}

                            {/*<SwiperSlide>*/}
                            {/*    <div className="single">*/}
                            {/*        <Img src={w1}/>*/}
                            {/*    </div>*/}
                            {/*</SwiperSlide>*/}

                            {/*<SwiperSlide>*/}
                            {/*    <div className="single">*/}
                            {/*        <Img src={w1}/>*/}
                            {/*    </div>*/}
                            {/*</SwiperSlide>*/}
                        </Swiper>

                    </Col>

                    <Col sm={6} className={'why-invest__slider__center'}>

                        <Swiper
                            Swiper
                            modules={[Autoplay, Pagination, Navigation, Thumbs]}
                            loop={true}
                            allowTouchMove={false}
                            autoplay={{
                                delay: 7000,
                                disableOnInteraction: false,
                            }}
                            initialSlide={1}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            onSwiper={setThumbsSwiper}
                            // onSlideChange={() => {
                            //     setThumbsSwiper
                            // }}
                            // effect={"creative"}
                            // creativeEffect={{
                            //     prev: {
                            //         shadow: true,
                            //         translate: [0, 0, -400],
                            //     },
                            //     next: {
                            //         translate: ["100%", 0, 0],
                            //     },
                            // }}
                            speed={900}
                        >
                            {
                                data?.images && data?.images?.length > 0 &&
                                data?.images?.map((element, index) => {
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

                    </Col>
                    <Col sm={3} className={'pr-0 why-invest__slider__right'}>
                        <Swiper
                            Swiper
                            modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                            loop={true}
                            allowTouchMove={false}
                            autoplay={{
                                delay: 7000,
                                disableOnInteraction: false,
                            }}
                            initialSlide="4"
                            pagination={{
                                clickable: true,
                            }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            // effect={"creative"}
                            // creativeEffect={{
                            //     prev: {
                            //         shadow: true,
                            //         translate: [0, 0, -400],
                            //     },
                            //     next: {
                            //         translate: ["100%", 0, 0],
                            //     },
                            // }}
                            speed={900}
                        >
                            {
                                data?.images && data?.images?.length > 0 &&
                                data?.images?.map((element, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="single">
                                                <Img src={element?.image}/>
                                            </div>
                                        </SwiperSlide>

                                    );
                                })
                            }

                        </Swiper>
                    </Col>
                </div>
            </div>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
    // background-color: ${hover};
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    height: 250px;
    background-color: ${hover};
    top: 0;
    width: 100%;
    left: 0;
  }

  .container {
    position: relative;

  }

  .why-invest__title {
    .col-sm-10 {
      position: relative;
    }


  }

  .why-invest__slider {
    position: relative;

    .shadow-small {
      position: absolute;
      z-index: 2;
      bottom: -100px;
      right: 10px;
    }

    &__left {
      padding-right: 35px;

      .single {
        padding-top: 100%;
        position: relative;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;

        }
      }

      .swiper-pagination {
        opacity: 0;
        visibility: hidden;
      }
    }

    &__center {
      padding: 0 35px;
      position: relative;

      .single {
        position: relative;

        p {
          font-size: 20px;
          line-height: 28px;
          color: #F2EEE8;
          display: none;
        }

        &__img {
          padding-top: calc(420 / 630 * 100%);
          position: relative;
          background-color: #DDD;

          p {
            font-size: 20px;
            line-height: 28px;
            color: #F2EEE8;
            position: absolute;
            bottom: 40px;
            left: 40px;
            right: 40px;
            z-index: 2;
            display: block;
          }
        }

        h4 {
          font-size: 36px;
          line-height: 43px;
          color: #f2eee8;
          text-transform: uppercase;
          margin-top: 40px;
          margin-left: 40px;
          font-family: ${title};
        }
      }

      .swiper-wrapper {
        padding-bottom: 60px;
      }
    }

    &__right {
      padding-left: 35px;

      .single {
        padding-top: 100%;
        position: relative;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;


        }
      }

      .swiper-pagination {
        opacity: 0;
        visibility: hidden;
      }
    }
  }


  .navs {
    opacity: 0 !important;
    transition: opacity .02s ease;

    .demo-two__btn__prev {
      position: absolute;
      height: 80px;
      width: 80px;
      border-radius: 100%;
      border: 1px solid #F2EEE8;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 5;
      left: 0;
      top: 110px;
      cursor: pointer;
    }

    .demo-two__btn__next {
      position: absolute;
      height: 80px;
      width: 80px;
      border-radius: 100%;
      border: 1px solid #F2EEE8;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 5;
      right: 0;
      top: 110px;
      cursor: pointer;
    }

  }

  &.hovered {
    .navs {
      opacity: 1;
    }
  }


  @media (max-width: 950px) {
    .nav-wrap .col-sm-6 {
      //min-width: 100%;
      margin: 0;
    }

    .shadow-small {
      display: none;
    }

    .navs {
      opacity: 1;

      .demo-two__btn__prev, .demo-two__btn__next {
        height: 45px;
        width: 45px;

        svg {
          height: 20px;
        }
      }

      .demo-two__btn__prev {
        left: 10px;
      }

      .demo-two__btn__next {
        right: 10px;
      }
    }

    .why-invest__slider__left, .why-invest__slider__right {

    }

    .why-invest__slider__center {
      //min-width: 100%;
      padding-left: 0;
      padding-right: 0;


      .single {
        h4 {
          margin-left: 0;
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 20px;
          padding-left: 15px;
          padding-right: 80px;
        }

        p {
          padding-left: 15px;
          padding-right: 15px;
          display: block;
        }

        &__img {
          p {
            display: none;
          }
        }
      }

    }
  }

  @media (max-width: 768px) {
    .why-invest__title .shadow-big {
      position: absolute;
      z-index: 2;
      top: -150px;
      right: auto;
      left: -100px;
    }

    .why-invest__title .shadow-small {
      position: absolute;
      z-index: 2;
      top: -100px;
      right: 0;
    }

    .title {
      margin-bottom: 20px;
    }

  }

  @media (max-width: 767px) {
    &:before {
      height: 30%;
    }
  }


  @media (max-width: 600px) {
    .why-invest__slider__left {
      max-width: 40px;
      max-height: calc(80% - 50px);
      padding-right: 15px;

      .swiper {
        height: calc(80% - 50px);


        .swiper-wrapper, .swiper-slide, .single {
          height: 100%;
        }
      }
    }

    .why-invest__slider__center {
      max-width: calc(100% - 80px)
    }

    .why-invest__slider__right {
      max-width: 40px;
      max-height: calc(80% - 50px);
      padding-left: 15px;

      .swiper {
        height: calc(80% - 50px);

        .swiper-wrapper, .swiper-slide, .single {
          height: 100%;
        }
      }

    }

  }


  .swiper-pagination {
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .swiper-pagination-bullet {
      height: 12px;
      width: 12px;
      opacity: 1;
      background: transparent;
      border: 1px solid #736640;
      margin-right: 13px;

      &.swiper-pagination-bullet-active {
        background-color: #736640;
        height: 20px;
        width: 20px;
        border-color: #C19A5B;
      }
    }

  }


`;

export default MyComponent;
