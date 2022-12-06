import React from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import img1 from '../../public/images/static/f1.jpg'
import img2 from '../../public/images/static/f2.jpg'
import img3 from '../../public/images/static/f3.jpg'
import img4 from '../../public/images/static/f4.jpg'
import img5 from '../../public/images/static/f5.jpg'
import img6 from '../../public/images/static/f6.jpg'
import img7 from '../../public/images/static/f7.jpg'
import img8 from '../../public/images/static/f8.jpg'
import {Img} from "../Img";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../Title";


const Feature = ({data}) => {

    const title = data?.title;
    const features = data?.features;


    const settings = {
        dots: true,
        rows: 2,
        slidesPerRow: 1,
        infinite: false,
        autoplay: true,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };
    return (
        <StyledComponent id={'features'} className='feature pt-200 overflow pb-200'>
            <div className="shadow-right">
                <svg xmlns="http://www.w3.org/2000/svg" width="361.258" height="362.143" viewBox="0 0 361.258 362.143">
                    <path id="Path_7056" data-name="Path 7056"
                          d="M298.618,108.809c.885-4.427.885-9.74.885-15.052a96.516,96.516,0,0,0-37.188-76.147C245.492,5.213,226.012-.1,198.564-.1H145.438V97.3c-34.532-4.427-69.064,9.74-89.429,36.3C43.613,150.424,38.3,169.9,38.3,197.352v53.126h97.4a133.085,133.085,0,0,0-1.771,17.709,96.517,96.517,0,0,0,37.188,76.148c16.823,12.4,36.3,17.709,63.751,17.709h53.126V261.989A133.065,133.065,0,0,0,305.7,263.76a96.516,96.516,0,0,0,76.147-37.188c12.4-16.823,17.709-36.3,17.709-63.751V109.694H298.618Zm-76.147,68.179c-.885-4.427-.885-9.74-.885-15.052V118.548h65.522c-5.313,17.709-15.938,33.647-30.1,44.272A68.078,68.078,0,0,1,222.471,176.987ZM159.6,14.067h38.959c24.792,0,42.5,4.427,56.668,15.938,20.365,15.052,31.876,38.959,31.876,64.637a109.007,109.007,0,0,1-1.771,17.709v.885H218.044v47.814a80.016,80.016,0,0,0-11.511-23.021,89.078,89.078,0,0,0-46.043-31.876V14.067Zm57.553,185.941v42.5H147.209a80.953,80.953,0,0,1,29.219-40.73c10.625-7.969,23.021-13.282,39.845-15.052C217.158,190.269,217.158,194.7,217.158,200.008Zm-61.98-90.314a79.89,79.89,0,0,1,46.043,30.99c7.084,9.74,12.4,22.136,15.052,38.074-5.313.885-11.511.885-17.709.885H155.178ZM52.467,238.082V199.123c0-24.792,4.427-42.5,15.938-56.668,15.052-20.365,38.959-31.876,65.522-31.876,5.313,0,10.625.885,16.823,1.771h.885v70.835h54.9c-12.4,2.656-22.136,7.083-30.1,13.282-13.281,9.74-23.907,24.792-30.1,40.73H52.467Zm222.244,112.45H235.752c-24.792,0-42.5-4.427-56.668-15.938-20.365-15.052-31.876-38.959-31.876-64.637a87.326,87.326,0,0,1,2.656-21.25v-.885H220.7V200.008c2.656,8.854,7.083,16.823,11.511,23.907,9.74,13.282,24.792,23.907,40.73,30.1v96.513Zm4.427-100.94a80.953,80.953,0,0,1-40.73-29.219c-7.083-9.74-11.511-20.365-14.167-34.532,3.542,0,7.969-.885,12.4-.885h42.5v64.637Zm108.023-87.658c0,24.792-4.427,42.5-15.938,56.668-15.052,20.365-38.959,31.876-64.637,31.876a87.325,87.325,0,0,1-21.25-2.656h-.885V181.414h-54.9c12.4-2.656,22.136-7.083,30.1-13.282,15.052-10.625,25.678-26.563,30.99-44.272h95.627v38.074Z"
                          transform="translate(-38.3 0.1)" fill="#8f6d4f" opacity="0.2"/>
                </svg>

            </div>
            <Container>
                <Row>
                    <div className='feature__title'>
                        <Col md={7} className='text-center'>
                            <Title text={title} fontSize={'80'} fontWeight={'400'} color={'#252E47'} lineHeight={'80'}/>
                        </Col>
                    </div>
                </Row>


                <div className="slider" style={{width: '100%'}}>
                    {features?.length > 0 &&
                        <Slider {...settings}>
                            {features?.map(item => (
                                <div className='feature__single'>
                                    <div className='feature__single__img'>
                                        <img src={item?.icon}/>
                                    </div>
                                    <div>
                                        <h2>{item?.title}</h2>
                                    </div>
                                </div>
                            ))
                            }
                        </Slider>
                    }

                </div>
            </Container>
        </StyledComponent>
    );
};
const StyledComponent = styled.section`
  position: relative;
  overflow: hidden;

  .row {
    justify-content: center;
  }

  .shadow-right {
    position: absolute;
    top: 0;
    right: -145px;
    height: fit-content;
  }

  background-color: white;

  .col {
    padding-left: 0px;
    padding-right: 0px;
  }

  .row {
    margin-left: 0px !important;
    margin-right: 0px !important;
  }

  .feature {

    &__title {
      display: flex;
      justify-content: center !important;
      align-items: center;
      margin-bottom: 42px;

      h2 {
        @media (max-width: 767px) {
          font-size: 40px !important;
          line-height: 40px !important;
          //margin-top: 40px;
        }
      }
    }

    &__single {
      //padding: 40px 30px 57px 30px;
      background-color: white;
      padding-top: 100%;
      position: relative;

      h2 {
        font-size: 20px;
        line-height: 22px;
        font-weight: bold;
        text-align: center;
        //height: 44px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        //text-overflow: ellipsis;
        position: absolute;
        top: 135px;
        left: 20px;
        right: 20px;
        color: #252e47;
      }

      &__img {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90px;
        width: 90px;
        position: absolute;
        top: 40px;
        left: 0;
        right: 0;
        margin: auto;

        img {
          max-width: 100%;
          object-fit: contain;
        }
      }

    }
  }


  .slick-dots li button:before {
    color: transparent;
    border: 1px solid #252E47;
    opacity: 1;
    border-radius: 50%;
    height: 12px;
    width: 12px;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .slick-dots li.slick-active button:before {
    background-color: #252E47;
    border-color: #C19A5B;
    height: 20px;
    width: 20px;
  }

  @media (max-width: 991px) {
    .shadow-right {
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateX(75%);

      svg {
        width: 40%;
      }
    }

    .shadow-left {
      transform: translateX(-20%);
      left: 0;

      svg {
        width: 50%;
      }
    }
  }

  @media (max-width: 767px) {
    padding-bottom: 120px !important;
    .feature__single__img {
      top: 10px;
    }

    .feature__single h2 {
      top: 110px;
    }
  }

  .slick-track {
    display: flex !important;
    height: 100%;
  }

  .slick-slide {
    height: auto;

    .slick-slide > div {
      height: 100%;

      .myItemClass {
        height: 100%;
      }
    }
  }

  .slick-slide {
    border-right: 1px solid #F2EEE8;
    border-top: 1px solid #F2EEE8;
    border-bottom: 1px solid #F2EEE8;

    > div:nth-of-type(1) {
      border-bottom: 1px solid #F2EEE8;
    }

    &:nth-of-type(1) {
      border-left: 1px solid #F2EEE8;
    }

    @media (max-width: 767px) {
      &:nth-of-type(1) {
        border-left: 0;
      }
    }
  }

  @media (max-width: 767px) {
    margin-left: -15px;
    margin-right: -15px;
    .title {
      margin-bottom: 0;
    }
  }


`;
export default Feature;