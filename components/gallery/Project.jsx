import React, {useEffect, useState} from 'react';
import {Img} from "../Img";
// import img1 from "../../public/images/static/image1.jpg";
import styled from "styled-components";
import Link from 'next/link'
import ModalVideo from "react-modal-video";
import 'react-modal-video/css/modal-video.min.css';
import {transition} from "../../styles/globalStyleVars";
import ReactHtmlParser from "react-html-parser";

const Project = ({img, data}) => {


    return (
        <StyledProject className='project'>
            <div className='project__img'>
                <Img src={img}></Img>
                <div className='project__img__content'>
                    <p>{data?.gallery_item?.date}</p>
                    <h2>{ReactHtmlParser(data?.gallery_item?.post_title)}</h2>
                </div>
                {
                    data?.gallery_item?.url ?
                        <div className="video__box__inner__click">
                            <svg width="24" height="32" viewBox="0 0 24 32">
                                <path id="Polygon_2" data-name="Polygon 2" d="M16,0,32,24H0Z"
                                      transform="translate(24) rotate(90)" fill="#f2eee8"/>
                            </svg>
                            <p>Play <br/>
                                Video</p>
                        </div> : ''
                }

            </div>
        </StyledProject>
    );
};
const StyledProject = styled.section`
  .project {
    &__img {
      position: relative;
      padding-top: calc(550 / 550 * 100%);
      //overflow: hidden;
      z-index: 4;
      cursor: pointer;

      a.wrapped {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        /* background: red; */
        z-index: 5;
      }

      &:after {
        width: 100%;
        height: 100%;
        position: absolute !important;
        top: 0px;
        content: '';
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
      }


      &__content {
        position: absolute;
        bottom: 35px;
        left: 40px;
        right: 40px;
        z-index: 1;
        //transform: translateY(calc(100% - 30px));
          // transition: transform ${transition};
        @media (max-width: 992px) {
          font-size: 18px;
          line-height: 27px;
        };

        h2 {
          color: #F2EEE8;
          opacity: 1;
          font-weight: 400;
          font-size: 32px;
          line-height: 32px;
          //bottom: 36px;
          //transition: 0.5s;
        }


        p {
          font-size: 20px;
          color: #F2EEE8;
          line-height: 28px;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 400;
          margin-bottom: 7px;
          opacity: 0.6;
          //transition: 0.5s;

        }

        // &__bottom {
        //   opacity: 1;
          //   // transition: opacity ${transition};
        // }
      }

      .video__box__inner__click {
        cursor: pointer;
        height: 80px;
        width: 80px;
        border-radius: 50%;
        background-color: #8F6D4F;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;

        &:after {
          content: '';
          position: absolute;
          height: 80px;
          width: 80px;
          border-radius: 100%;
        }

        @keyframes big {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgb(143, 109, 79);
          }

          40% {
            transform: scale(1.2);
            box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
          }

          70% {
            transform: scale(1.4);
            box-shadow: 0 0 0 25px rgba(0, 0, 0, 0);
          }

          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
          }
        }

        svg {
          position: relative;
          z-index: 2;
          transition: all .3s ease;
          transform: none;
        }

        p {
          font-size: 12px;
          font-weight: bold;
          line-height: 12px;
          color: #f2eee8;
          text-transform: uppercase;
          text-align: center;
          opacity: 0;
          position: absolute;
          transition: all .3s ease;
          transform: translateY(10px);
        }

        &.hover {
          &:after {
            background-color: #8F6D4F;
            border-radius: 50%;
          }
        }

        &:hover {

          &:after {
            animation: big 2.5s ease infinite;
          }

          svg {
            opacity: 0;
          }

          p {
            opacity: 1;
            transform: none;
            z-index: 5;
          }
        }
      }

    }
  }

  //
  //@media (max-width: 1200px) {
  //  .project__img .go-btn {
  //    height: 40px;
  //    width: 40px;
  //
  //    svg {
  //      height: 18px;
  //    }
  //  }
  //}

  @media (max-width: 768px) {
    .project__img__content__bottom {
      display: none;

    }

    .project__img__content {
      transform: none;
      bottom: 16px;

      //h2 {
      //  font-size: 20px;
      //  margin-bottom: 0;
      //}
    }
  }

`

export default Project;
