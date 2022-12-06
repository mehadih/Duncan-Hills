import React, {useEffect, useState, useRef} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import {Img} from "../Img";
import banner from '../../public/images/dynamic/pbenner.jpg';
import {title} from "../../styles/globalStyleVars";
import spec1 from '../../public/images/dynamic/spec1.svg';
import spec from '../../public/images/static/spec1.svg'
import spec2 from '../../public/images/static/spec2.svg'
import spec3 from '../../public/images/static/spec3.svg'
import spec4 from '../../public/images/static/spec4.svg'
import spec5 from '../../public/images/static/spec5.svg'
import spec6 from '../../public/images/static/spec6.svg'
import sliderImg from '../../public/images/dynamic/p-slider.jpg';
import {Autoplay, EffectCreative, Navigation, Pagination} from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from 'swiper/react';
import ReactHtmlParser from "react-html-parser";


const MyComponent = ({bg, ClassName, element, id}) => {

    const detail = element?.details;
    const feature_details = element?.feature_details;


    const nextRef = useRef();
    const [paddingTop, setPaddingTop] = useState(200)
    useEffect(() => {
        let getImageHeight = document.querySelector('.pent-house-des__top').clientHeight / 2;
        setPaddingTop(getImageHeight)

    }, [])

    // offset
    const [offset, setOffset] = useState(90)
    useEffect(() => {
        setOffset(Number(localStorage.getItem('containeroffset')))
    }, [])

    return (
        <StyledComponent id={id} className={`pent-house-des ${ClassName ? ClassName : ''}`}
                         style={{marginTop: paddingTop + 200 + 'px', backgroundColor: bg}}>
            <Container fluid className={'p-0'}>
                <Row>
                    <Col sm={{span: 9, offset: ClassName ? 3 : 0}} className={'pent-house-des__top'}>
                        <div className="pent-house-des__top__img">
                            <Img src={detail?.image}/>
                            <h2 style={{left: offset + 'px'}}>{element?.post_title}</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className={'desc-p'} style={{marginTop: -(paddingTop - 80) + 'px'}}>
                <h4>{detail?.subtitle}</h4>
                {ReactHtmlParser(detail?.description)}
            </Container>

            <Container fluid className={'p-0'}>
                <Row>

                </Row>
            </Container>

            <Container fluid className={'spec-with-img'}
                       style={{paddingLeft: offset ? offset + 'px' : '100px', paddingRight: 0}}>
                <Row>
                    <Col sm={6} className={'spec-with-img__content'}>
                        <div className="spec-with-img__content__top">
                            <img src={feature_details?.floor_icon} alt=""/>
                            <h4>{ReactHtmlParser(feature_details?.floor_title)}</h4>
                        </div>

                        <div className="spec-with-img__content__spec">
                            <ul>
                                {
                                    feature_details?.features && feature_details?.features?.length > 0 &&
                                    feature_details?.features.map((element) => {
                                        return (
                                            <li><img src={element?.icon} alt=""/>{element?.title}</li>
                                        );
                                    })
                                }

                            </ul>
                        </div>
                    </Col>

                    <Col sm={6} className={'spec-with-img__slider'}>

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

                        {/*<div className="slide-number">*/}
                        {/*    <p>01/<span>03</span></p>*/}
                        {/*</div>*/}

                        {element?.slider_content && element?.slider_content?.length > 0 &&
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
                                    type: "fraction",
                                }}
                                navigation={{
                                    // prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                                }}
                                onBeforeInit={(swiper) => {
                                    // swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                }}
                                speed={900}
                            >

                                {
                                    element?.slider_content?.map((element) => {
                                        return (
                                            <SwiperSlide>
                                                <div className="spec-with-img__slider__single">
                                                    <Img src={element?.image}/>
                                                    <div className="spec-with-img__slider__single__content">
                                                        <h4>{ReactHtmlParser(element?.title)}</h4>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })
                                }


                            </Swiper>
                        }
                    </Col>
                </Row>
            </Container>

        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  background-color: #3C1F13;
  padding-bottom: 200px;


  .pent-house-des__top {
    transform: translateY(-50%);

    &__img {
      position: relative;
      padding-top: calc(600 / 998 * 100%);

      h2 {
        position: absolute;
        left: 90px;
        bottom: 70px;
        color: #FFFFFF;
        text-transform: uppercase;
        width: 60%;
        font-family: ${title};
        font-size: 48px;
        line-height: 48px;
      }
    }
  }

  .desc-p {
    margin-bottom: 85px;

    h4 {
      font-size: 24px;
      text-transform: uppercase;
      margin-bottom: 25px;
      color: #ffffff;
      font-weight: bold;
    }

    p {
      font-size: 20px;
      line-height: 28px;
      color: #ffffff;

      &:not(:nth-last-of-type(1)) {
        margin-bottom: 28px;
      }
    }
  }

  .spec-with-img {
    &__content {
      &__top {
        display: flex;
        align-items: center;

        h4 {
          font-size: 48px;
          line-height: 48px;
          text-transform: uppercase;
          color: #ffffff;
          font-family: ${title};
          margin-left: 40px;

          span {
            position: relative;
            font-size: 100px;

            margin-right: 12px;
            padding-right: 25px;

            small {
              position: absolute;
              font-size: 25px;
              line-height: 50px;
              right: -10px;
            }
          }
        }
      }

      &__spec {
        margin-top: 40px;

        ul {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;

          li {
            color: #f2eee8;
            font-size: 20px;
            line-height: 28px;
            width: calc(50% - 15px);
            margin-bottom: 20px;

            img {
              width: 40px;
              margin-right: 12px;
            }
          }
        }
      }
    }

    &__slider {
      position: relative;
      height: fit-content;

      .slide-number {
        position: absolute;
        bottom: 60px;
        z-index: 3;
        left: 60px;

        p {
          font-size: 36px;
          line-height: 36px;
          color: #F2EEE8;
          font-family: ${title};

          span {
            font-size: 20px;
            line-height: 24px;
            color: rgba(242, 238, 232, 0.40);
          }
        }
      }

      &__single {
        padding-top: calc(420 / 668 * 100%);
        position: relative;
        min-height: 100%;

        &:after {
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
          left: 0;
          top: 0;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0) 38%, rgba(0, 0, 0, 0.7245491946778712) 100%);
        }

        &__content {
          position: absolute;
          bottom: 50px;
          left: 120px;
          z-index: 2;
          display: flex;

          h4 {
            font-size: 24px;
            text-transform: uppercase;
            font-weight: bold;
            line-height: 28px;
            margin-left: 24px;
            color: #f2eee8;
            opacity: 0;
            transition: opacity .3s ease;
          }
        }
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
        right: 60px;
        top: 0px;
        bottom: 0;
        margin: auto;
        cursor: pointer;
        opacity: 0;
        transition: opacity .3s ease;
      }

      &:hover .demo-two__btn__next {
        opacity: 1;
      }
    }


  }

  .swiper-slide-active {
    .spec-with-img__slider__single__content {
      h4 {
        opacity: 1
      }
    }
  }

  @media (max-width: 1024px) {
    margin-top: 0 !important;
    .pent-house-des__top {
      transform: none !important;
      min-width: 100%;
      margin-left: 0;
    }

    .desc-p {
      margin-top: 60px !important;
    }

    .spec-with-img__content, .spec-with-img__slider {
      min-width: 100%;
    }

    .pent-house-des__top__img h2 {
      left: 70px;
    }
  }

  @media (max-width: 768px) {
    overflow: hidden;
    .pent-house-des__top__img h2 {
      font-size: 30px;
      line-height: 30px;
    }

    .spec-with-img {
      padding-left: 0 !important;
    }

    .spec-with-img__content {
      padding-left: 70px;
    }

    .spec-with-img__slider .slide-number {
      left: 30px;
      bottom: 80px;
    }

    .spec-with-img__slider__single__content {
      bottom: 30px;
      left: 15px;
      right: 15px;

      h4 {
        margin-left: 0;
      }

      br {
        display: none;
      }
    }

    .spec-with-img__slider {
      margin-top: 60px;
    }

    .spec-with-img__slider .demo-two__btn__next {
      opacity: 1;
      height: 45px;
      width: 45px;
      right: 30px;
      bottom: 10px;

      svg {
        height: 20px;
      }
    }

  }

  @media (max-width: 767px) {
    padding-bottom: 120px;
    .pent-house-des__top__img {
      h2 {
        left: 15px;
        right: 15px;
        width: 100%;
        bottom: 40px;
      }
    }

    .spec-with-img__content {
      padding-left: 30px;
      padding-right: 30px;
    }
  }


  @media (max-width: 650px) {
    .spec-with-img__content {
      flex-wrap: wrap;

      h4 {
        font-size: 20px;
        line-height: 24px;
      }

      &__top {
        flex-wrap: wrap;

        img {
          margin-bottom: 40px;
        }

        h4 {
          min-width: 100%;
          margin-left: 0;
          font-size: 36px;
          line-height: 38px;

          span {
            font-size: 60px;
            line-height: 60px;

            small {
              font-size: 20px;
            }
          }
        }
      }

      &__spec {
        ul {
          flex-wrap: wrap;

          li {
            min-width: 100%;
          }
        }
      }
    }

    .spec-with-img__slider__single__content h4 {
      font-size: 20px;
      line-height: 24px;
    }
  }


  .slide-number {
    position: absolute;
    bottom: 60px;
    z-index: 3;
    left: 60px;

    .swiper-pagination-current {
      font-size: 36px;
      line-height: 36px;
      color: #F2EEE8;
      font-family: ${title};

      span {
        font-size: 20px;
        line-height: 24px;
        color: rgba(242, 238, 232, 0.40);
      }
    }
  }

  .swiper-pagination {
    font-size: 20px;
    line-height: 20px;
    color: rgba(242, 238, 232, 0.50);
    font-family: ${title};
    position: absolute;
    width: fit-content;
    left: 56px;
    bottom: 53px;

    .swiper-pagination-current {
      font-size: 36px;
      line-height: 36px;
      color: #f2eee8;
    }

    @media (max-width: 767px) {
      left: 20px;
      bottom: 80px;
    }
  }


`;

export default MyComponent;
