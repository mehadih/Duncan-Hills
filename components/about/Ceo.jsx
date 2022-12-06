import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import {Img} from "../Img";
import CEO from '../../public/images/dynamic/ceo.png';
import Title from "../Title";
import {hover} from "../../styles/globalStyleVars";
import ModalVideo from "react-modal-video";
import 'react-modal-video/css/modal-video.min.css';
import ReactHtmlParser from "react-html-parser";

const MyComponent = ({data}) => {
    // console.log(data)
    const videoUrlId = data?.url?.replaceAll('https://youtu.be/', '');
    // offset
    const [offset, setOffset] = useState(90)
    useEffect(() => {
        setOffset(Number(localStorage.getItem('containeroffset')))
    }, [])

    let [videoId, setVideo] = useState("");
    let [open, setOpen] = useState(false);

    let handelOpen = (open, id) => {
        setOpen(open);
        setVideo(id);
    };

    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={open} videoId={data?.url}
                        onClose={() => handelOpen(false, '')}/>
            <StyledComponent offset={offset} className={'ceo pb-200'}>
                <Row>
                    <Col sm={5} className={'pr-0'}>
                        <div className="ceo__video" onClick={() => handelOpen(true, videoUrlId)}>
                            <svg width="24" height="32" viewBox="0 0 24 32">
                                <path id="Polygon_2" data-name="Polygon 2" d="M16,0,32,24H0Z"
                                      transform="translate(24) rotate(90)" fill="#f2eee8"/>
                            </svg>
                            <p>Play <br/>
                                Video</p>
                        </div>
                        <div className="ceo__img">
                            <Img src={data?.image}/>
                        </div>
                    </Col>

                    <Col sm={{span: 6, offset: 1}} className={'pl-0 ceo__content'}>

                        <Title text={data?.title} fontSize={36} lineHeight={'40px'} margin={'50px 0 60px 0'}/>
                        {ReactHtmlParser(data?.message)}
                        {/*<p>Mashuk Huck, the Chairman & CEO of Sanmar, is acclaimed for his pioneering spirit and passion*/}
                        {/*    for*/}
                        {/*    excellence and is the driving force behind the company’s vision. Mr. Huck has always brought*/}
                        {/*    his*/}
                        {/*    global exposure and years of experience across a diverse field of businesses to Sanmar.*/}
                        {/*    Having*/}
                        {/*    extensively travelled and experienced the uncompromising quality of international luxury, it*/}
                        {/*    is*/}
                        {/*    his dream to introduce that beautiful lifestyle to Bangladesh and truly take the standard of*/}
                        {/*    luxury living to the next level so that Bangladesh can also stand as an unstoppable nation*/}
                        {/*    in*/}
                        {/*    the global arena.*/}
                        {/*</p>*/}
                        {/*<p>Mr. Huck always makes an active effort to work closely with his core team to ensure that his*/}
                        {/*    ethos of excellence, quality and commitment are embedded throughout Sanmar. He also takes*/}
                        {/*    the*/}
                        {/*    time to give guidance to allow his employees to grow and flourish in their professional*/}
                        {/*    careers.*/}
                        {/*</p>*/}

                        {/*<p>For his outstanding contribution to the Real Estate sector, Mr. Huck was awarded a Gold Medal*/}
                        {/*    by*/}
                        {/*    the Real Estate & Housing Association of Bangladesh by the Minister of Housing.</p>*/}

                        <h5>{ReactHtmlParser(data?.name)}</h5>
                        <h6>{data?.designation}</h6>
                    </Col>
                </Row>
            </StyledComponent>
        </>
    );
};

const StyledComponent = styled.section`
  overflow: hidden;

  .col-sm-5 {
    position: relative;
  }

  .ceo__img {
    padding-top: calc(768 / 598 * 100%);
    position: relative;
    min-height: 100%;
  }

  .ceo__video {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background-color: #8F6D4F;
    position: absolute;
    top: 0;
    bottom: 0;
    right: -40px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    cursor: pointer;

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
        transform: scale(1);
        box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
      }

      70% {
        transform: scale(1.2);
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
        transform: translateY(-10px);
      }

      p {
        opacity: 1;
        transform: none;
      }
    }

  }

  .ceo__content {
    padding-right: ${props => props.offset}px;
    padding-bottom: 20px;
    position: relative;


    p {
      font-size: 20px;
      line-height: 28px;

      &:not(:nth-last-of-type(1)) {
        margin-bottom: 20px;
      }
    }

    h5 {
      font-size: 24px;
      font-weight: bold;
      line-height: 32px;
      color: ${hover};
      text-transform: uppercase;
      margin-top: 40px;
    }

    h6 {
      font-size: 20px;
      line-height: 28px;
    }
  }

  @media (max-width: 991px) {
    .col-sm-5 {
      min-width: 60%;
    }

    .ceo__content {
      min-width: 100%;
      //margin: 0;
    }
  }

  @media (max-width: 767px) {
    .col-sm-5 {
      min-width: 100%;
    }

    .ceo__video {
      top: auto;
      left: 0;
      right: 0;
      margin: auto;
      //height: 60px;
      //width: 60px;
      bottom: -40px;

      //svg {
      //  height: 20px;
      //}
    }

    .ceo__content {
      min-width: 100%;
      margin: 0;
      padding-left: 30px !important;
      padding-right: 30px !important;

      .title h2 {
        margin-top: 80px;
        font-size: 28px !important;
        line-height: 32px !important;
      }

      h5 {
        margin-top: 24px;
        font-size: 20px;
        line-height: 28px;
      }

      h6 {
        font-size: 14px;
        line-height: 18px;
      }

    }
  }

`;

export default MyComponent;
