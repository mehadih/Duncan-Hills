import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import Title from "../Title";
import {hover, title} from "../../styles/globalStyleVars";
import 'swiper/css';
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation, EffectCreative, Autoplay} from "swiper";
import {Img} from '../Img';
import w1 from '../../public/images/dynamic/w1.jpg'
import w2 from '../../public/images/dynamic/w2.jpg'
import w3 from '../../public/images/dynamic/w3.jpg'


const MyComponent = ({investSlider, title}) => {
    const nextRef = useRef()
    const prevRef = useRef()

    useEffect(() => {
        document.querySelector('.why-invest__slider__center').addEventListener('mouseover', () => {
            document.querySelector('.why-invest').classList.add('hovered')
        })
        document.querySelector('.demo-two__btn__prev').addEventListener('mouseover', () => {
            document.querySelector('.why-invest').classList.add('hovered')
        })
        document.querySelector('.demo-two__btn__next').addEventListener('mouseover', () => {
            document.querySelector('.why-invest').classList.add('hovered')
        })
        document.querySelector('.why-invest__slider__center').addEventListener('mouseleave', () => {
            document.querySelector('.why-invest').classList.remove('hovered')
        })
    }, [])

    return (
        <StyledComponent className={'why-invest pt-200 pb-200'}>
            <Container>
                <Row className={'why-invest__title'}>
                    <Col sm={{span: 10, offset: 1}}>
                        <Title margin={'0 0 100px 0'} center color={'#F2EEE8'} fontSize={80} lineHeight={80}
                               text={title}/>
                        <div className="shadow-big">
                            <svg width="161.713" height="162.109" viewBox="0 0 161.713 162.109">
                                <path id="Path_7054" data-name="Path 7054"
                                      d="M154.828,48.652a36.264,36.264,0,0,0,.4-6.738A43.2,43.2,0,0,0,138.578,7.827C131.047,2.278,122.327-.1,110.04-.1H86.259V43.5C70.8,41.517,55.343,47.859,46.227,59.75,40.678,67.28,38.3,76,38.3,88.287v23.781H81.9A59.575,59.575,0,0,0,81.106,120a43.2,43.2,0,0,0,16.647,34.087c7.531,5.549,16.251,7.927,28.538,7.927h23.781V117.221a59.566,59.566,0,0,0,7.927.793,43.2,43.2,0,0,0,34.086-16.647c5.549-7.531,7.927-16.251,7.927-28.538V49.048H154.828ZM120.742,79.171a36.267,36.267,0,0,1-.4-6.738V53.012h29.33A38.775,38.775,0,0,1,136.2,72.829,30.474,30.474,0,0,1,120.742,79.171ZM92.6,6.242h17.44c11.1,0,19.025,1.982,25.367,7.134A35.675,35.675,0,0,1,149.676,42.31a48.8,48.8,0,0,1-.793,7.927v.4H118.76v21.4a35.818,35.818,0,0,0-5.153-10.305A39.875,39.875,0,0,0,93,47.463V6.242Zm25.763,83.235V108.5H87.052a36.238,36.238,0,0,1,13.08-18.232,34.425,34.425,0,0,1,17.836-6.738A26.246,26.246,0,0,1,118.364,89.476ZM90.619,49.048a35.762,35.762,0,0,1,20.61,13.872,39.422,39.422,0,0,1,6.738,17.043,50.535,50.535,0,0,1-7.927.4H90.619ZM44.642,106.52V89.08c0-11.1,1.982-19.025,7.134-25.367,6.738-9.116,17.44-14.269,29.33-14.269a54.161,54.161,0,0,1,7.531.793h.4V81.946h24.574a32.445,32.445,0,0,0-13.476,5.945,41.587,41.587,0,0,0-13.476,18.232H44.642Zm99.485,50.337h-17.44c-11.1,0-19.025-1.982-25.367-7.134a35.675,35.675,0,0,1-14.269-28.934,39.09,39.09,0,0,1,1.189-9.513v-.4h31.708v-21.4a44.615,44.615,0,0,0,5.153,10.7,41.587,41.587,0,0,0,18.232,13.476v43.2Zm1.982-45.184a35.5,35.5,0,0,1-24.574-28.538c1.585,0,3.567-.4,5.549-.4h19.025v28.934Zm48.355-39.239c0,11.1-1.982,19.025-7.134,25.367A35.675,35.675,0,0,1,158.4,112.069a39.09,39.09,0,0,1-9.512-1.189h-.4V81.153H123.913a32.444,32.444,0,0,0,13.476-5.945A37.2,37.2,0,0,0,151.261,55.39h42.806V72.433Z"
                                      transform="translate(-38.3 0.1)" fill="#f2eee8" opacity="0.2"/>
                            </svg>

                        </div>


                    </Col>

                    <div className="shadow-small">
                        <svg width="80" height="80.196" viewBox="0 0 80 80.196">
                            <path id="Path_7055" data-name="Path 7055"
                                  d="M95.947,24.018a17.94,17.94,0,0,0,.2-3.333A21.374,21.374,0,0,0,87.908,3.822C84.183,1.076,79.869-.1,73.79-.1H62.026V21.469a21.61,21.61,0,0,0-19.8,8.039C39.476,33.234,38.3,37.547,38.3,43.626V55.391H59.869a29.472,29.472,0,0,0-.392,3.922,21.374,21.374,0,0,0,8.235,16.863C71.437,78.92,75.751,80.1,81.83,80.1H93.594V57.94a29.468,29.468,0,0,0,3.922.392A21.373,21.373,0,0,0,114.379,50.1c2.745-3.726,3.922-8.039,3.922-14.118V24.214H95.947Zm-16.863,15.1a17.942,17.942,0,0,1-.2-3.333V26.175H93.4a19.182,19.182,0,0,1-6.667,9.8A15.076,15.076,0,0,1,79.085,39.116ZM65.163,3.037H73.79c5.49,0,9.412.98,12.549,3.529A17.649,17.649,0,0,1,93.4,20.881a24.14,24.14,0,0,1-.392,3.922V25H78.1V35.586a17.72,17.72,0,0,0-2.549-5.1,19.726,19.726,0,0,0-10.2-7.059V3.037ZM77.908,44.214v9.412H62.418a17.927,17.927,0,0,1,6.471-9.02,17.03,17.03,0,0,1,8.824-3.333A12.984,12.984,0,0,1,77.908,44.214Zm-13.726-20a17.692,17.692,0,0,1,10.2,6.863,19.5,19.5,0,0,1,3.333,8.431,25,25,0,0,1-3.922.2H64.183ZM41.437,52.645V44.018c0-5.49.98-9.412,3.529-12.549a17.751,17.751,0,0,1,14.51-7.059A26.794,26.794,0,0,1,63.2,24.8h.2V40.488H75.555a16.051,16.051,0,0,0-6.667,2.941,20.573,20.573,0,0,0-6.667,9.02H41.437Zm49.216,24.9H82.026c-5.49,0-9.412-.98-12.549-3.529A17.649,17.649,0,0,1,62.418,59.7,19.338,19.338,0,0,1,63.006,55v-.2H78.692V44.214a22.072,22.072,0,0,0,2.549,5.294,20.573,20.573,0,0,0,9.02,6.667V77.547Zm.98-22.353A17.56,17.56,0,0,1,79.477,41.077c.784,0,1.765-.2,2.745-.2h9.412V55.194Zm23.922-19.412c0,5.49-.98,9.412-3.529,12.549a17.649,17.649,0,0,1-14.314,7.059,19.338,19.338,0,0,1-4.706-.588h-.2V40.1H80.653a16.05,16.05,0,0,0,6.667-2.941,18.4,18.4,0,0,0,6.863-9.8h21.177v8.431Z"
                                  transform="translate(-38.3 0.1)" fill="#f2eee8" opacity="0.2"/>
                        </svg>

                    </div>
                </Row>
            </Container>

            <div className="why-invest__slider">

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
                            modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                            loop={true}
                            allowTouchMove={false}
                            autoplay={{
                                delay: 7000,
                                disableOnInteraction: false,
                            }}
                            initialSlide="4"
                            pagination={false}
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

                            <SwiperSlide>
                                <div className="single">
                                    <Img src={w1}/>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single">
                                    <Img src={w1}/>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single">
                                    <Img src={w1}/>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single">
                                    <Img src={w1}/>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </Col>

                    <Col sm={6} className={'why-invest__slider__center'}>


                        <Swiper
                            Swiper
                            modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                            loop={true}
                            autoplay={{
                                delay: 7000,
                                disableOnInteraction: false,
                            }}
                            allowTouchMove={false}
                            initialSlide={1}
                            pagination={true}
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

                            <SwiperSlide>
                                <div className="single">
                                    <div className="single__img">
                                        <Img src={w2}/>
                                        <p>Duncan Hills is a high-end gated condominium that aims to embody luxury at
                                            every
                                            step with enough breathing space around it and exclusive amenities that
                                            provides
                                            international life standard.</p>
                                    </div>
                                    <h4>Lifestyle project</h4>
                                    <p>Duncan Hills is a high-end gated condominium that aims to embody luxury at
                                        every
                                        step with enough breathing space around it and exclusive amenities that
                                        provides
                                        international life standard.</p>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single">
                                    <div className="single__img">
                                        <Img src={w2}/>
                                        <p>Duncan Hills is a high-end gated condominium that aims to embody luxury at
                                            every
                                            step with enough breathing space around it and exclusive amenities that
                                            provides
                                            international life standard.</p>
                                    </div>
                                    <h4>Lifestyle project</h4>
                                    <p>Duncan Hills is a high-end gated condominium that aims to embody luxury at
                                        every
                                        step with enough breathing space around it and exclusive amenities that
                                        provides
                                        international life standard.</p>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single">
                                    <div className="single__img">
                                        <Img src={w2}/>
                                        <p>Duncan Hills is a high-end gated condominium that aims to embody luxury at
                                            every
                                            step with enough breathing space around it and exclusive amenities that
                                            provides
                                            international life standard.</p>
                                    </div>
                                    <h4>Lifestyle project</h4>
                                    <p>Duncan Hills is a high-end gated condominium that aims to embody luxury at
                                        every
                                        step with enough breathing space around it and exclusive amenities that
                                        provides
                                        international life standard.</p>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single">
                                    <div className="single__img">
                                        <Img src={w2}/>
                                        <p>Duncan Hills is a high-end gated condominium that aims to embody luxury at
                                            every
                                            step with enough breathing space around it and exclusive amenities that
                                            provides
                                            international life standard.</p>
                                    </div>
                                    <h4>Lifestyle project</h4>
                                    <p>Duncan Hills is a high-end gated condominium that aims to embody luxury at
                                        every
                                        step with enough breathing space around it and exclusive amenities that
                                        provides
                                        international life standard.</p>
                                </div>
                            </SwiperSlide>


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
                            pagination={false}
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

                            <SwiperSlide>
                                <div className="single">
                                    <Img src={w3}/>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single">
                                    <Img src={w3}/>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single">
                                    <Img src={w3}/>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single">
                                    <Img src={w3}/>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                </div>
            </div>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  background-color: ${hover};
  position: relative;
  overflow: hidden;

  .container {
    position: relative;
  }

  .why-invest__title {
    .col-sm-10 {
      position: relative;
    }

    .shadow-big {
      position: absolute;
      z-index: 2;
      top: -50px;
      right: -40px;
    }

    .shadow-small {
      position: absolute;
      z-index: 2;
      top: 100px;
      right: -100px;
    }
  }

  .why-invest__slider {
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

        &:after {
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.3);
          z-index: 4;
          top: 0;
          bottom: 0;
        }
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

      .swiper-pagination {
        opacity: 0;
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

        &:after {
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.3);
          z-index: 4;
          top: 0;
          bottom: 0;
        }
      }
    }
  }


  .navs {
    opacity: 0;
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
      min-width: 100%;
      margin: 0;
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
      display: none;
    }

    .why-invest__slider__center {
      min-width: 100%;
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
  }

`;

export default MyComponent;
