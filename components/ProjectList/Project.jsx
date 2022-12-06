import React from 'react';
import {Img} from "../Img";
// import img1 from "../../public/images/static/image1.jpg";
import styled from "styled-components";
import Link from 'next/link'
import {transition} from "../../styles/globalStyleVars";

const Project = ({img, details}) => {


    const product_image = details?.project_info?.thumbnail;
    const product_title = details?.post_title;
    const product_desc = details?.project_info?.description;
    return (
        <StyledProject className='project'>
            <div className='project__img'>
                <Img src={product_image}></Img>
                <div className='project__img__content'>
                    <h2>{product_title}</h2>
                    <div className='project__img__content__bottom'>
                        <p>Full Residential</p>
                        <h3>{product_desc}</h3>
                    </div>
                </div>
                <Link href={`/project/${details?.post_name}`}><a className={'wrapped'}/></Link>
                <Link href={`/project/${details?.post_name}`}>
                    <a>
                        <div className='go-btn hover'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38.414" height="30.828"
                                 viewBox="0 0 38.414 30.828">
                                <g id="Group_13211" data-name="Group 13211" transform="translate(-818.573 -2890.544)">
                                    <line id="Line_3546" data-name="Line 3546" x1="36"
                                          transform="translate(819.573 2905.958)" fill="none" stroke="#736640"
                                          stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3547" data-name="Line 3547" x1="14" y1="14"
                                          transform="translate(841.573 2891.958)" fill="none" stroke="#736640"
                                          stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3548" data-name="Line 3548" x1="14" y2="14"
                                          transform="translate(841.573 2905.958)" fill="none" stroke="#736640"
                                          stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>

                        </div>
                    </a>
                </Link>
            </div>
        </StyledProject>
    );
};
const StyledProject = styled.section`
  .project {
    &__img {
      position: relative;
      padding-top: calc(550 / 550 * 100%);
      overflow: hidden;

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
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
      }


      &__content {
        position: absolute;
        bottom: 40px;
        left: 40px;
        right: 40px;
        z-index: 1;
        transform: translateY(calc(100% - 30px));
        transition: transform ${transition};
        @media (max-width: 992px) {
          font-size: 18px;
          line-height: 27px;
        };

        h2 {
          margin-bottom: 24px;
          color: #F2EEE8;
          font-weight: bold;
          font-size: 24px;
          //transition: 0.5s;
        }

        h3 {
          color: #F2EEE8;
          font-size: 20px;
          line-height: 28px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          //transition: 0.5s;

        }

        p {
          font-size: 20px;
          color: #B2A89F;
          line-height: 24px;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 400;
          margin-bottom: 7px;
          //transition: 0.5s;
        }

        &__bottom {
          opacity: 0;
          transition: opacity ${transition};
        }
      }

      .go-btn {
        margin: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 80px;
        width: 80px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        background-color: #736640;
        transition: opacity ${transition};
        z-index: 6;

        svg {
          line {
            transition: stroke ${transition};
          }
        }

        &.hover:after {
          background-color: #F2EEE8;
          border-radius: 100%;
        }

        &:hover {
          svg line {
            stroke: #F2EEE8;
          }
        }
      }

      &:hover {
        .go-btn {
          opacity: 1;

          svg {
            g {
              circle {
                r: 40;
              }
            }
          }
        }

        .project__img__content {
          transform: none;

          &__bottom {
            opacity: 1;
          }
        }


      }
    }
  }

  @media (max-width: 1200px) {
    .project__img .go-btn {
      height: 40px;
      width: 40px;

      svg {
        height: 18px;
      }
    }
  }

  @media (max-width: 768px) {
    .project__img__content__bottom {
      display: none;
    }

    .project__img__content {
      transform: none;

      h2 {
        font-size: 20px;
        margin-bottom: 0;
      }
    }
  }


`

export default Project;