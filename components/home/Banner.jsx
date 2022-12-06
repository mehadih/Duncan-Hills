import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import bannerImg from '../../public/images/dynamic/banner-scroll.jpg'
import {Img} from "../Img";
import {CSSPlugin, gsap, TimelineLite} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {hover} from "../../styles/globalStyleVars";
import {useRouter} from "next/router";


const MyComponent = () => {
    let ns = Math.random().toString(36).substring(7);
    gsap.registerPlugin(CSSPlugin);
    ScrollTrigger.refresh();
    gsap.registerPlugin(ScrollTrigger);

    // offset
    const [offset, setOffset] = useState(90)
    useEffect(() => {
        setOffset(Number(localStorage.getItem('containeroffset')))
    }, [])

    const router = useRouter()

    const bannerRef = useRef()

    // banner slider scroll
    useEffect(() => {
        const scollHere = () => {
            gsap.timeline({
                scrollTrigger: {
                    id: `whois`,
                    trigger: bannerRef.current,
                    start: '1',
                    pin: true,
                    end: "bottom",
                    // scrub: 0.6,
                    toggleActions: 'play none none reverse',
                }
            }).to('.banner__scroller', {
                ease: "Expo.easeOut",
                duration: 1.5,
                transform: 'scale(1.2)',
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }).to('.banner__button', {
                opacity: 0,
                duration: .6,
                ease: "power2",
            }, '-=1.5').to('.banner__scroller', {
                opacity: 0,
                duration: .3,
                ease: "power2",
            }).to('.banner__content h2', {
                color: '#F2EEE8',
                duration: .3
            }, '-=.8').to('.banner__video', {
                display: 'block',
                duration: 0
            }, '-=.2').to('.banner__video', {
                opacity: 1,
                duration: .4
            }, '-=.3')
        }

        if (window.innerWidth > 990) {

            scollHere()
            // on click action
            document.querySelector('.banner__button').addEventListener('click', () => {
                window.scrollBy(0, 100);
            })
        }

        // ScrollTrigger.kill()
        // ScrollTrigger.kill();
        // tl.kill();
    }, [])

    useEffect(() => {

        let getAlla = document.querySelectorAll('a')

        getAlla.forEach(e => {
            e.addEventListener('click', () => {

                const kill = ScrollTrigger.getById('whois');
                if (kill) {
                    kill.kill()
                }
            })
        })


    }, [])


    return (
        <StyledComponent offset={offset} ref={bannerRef} className={'banner'}>
            <div className="banner__video">
                <video loop autoPlay muted>
                    <source src={'/videos/banner.mp4'} type="video/mp4"/>
                    <source src={'/videos/banner.mp4'} type="video/ogg"/>
                </video>
            </div>
            <div className="banner__scroller">
                <img src={bannerImg} alt=""/>
            </div>

            <div className="banner__button hover">
                <p>EXPLORE</p>
            </div>

            <div className="banner__content">
                <h2>A benchmark <br/> of luxury</h2>
            </div>

        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  height: 100vh;
  position: relative;
  z-index: 6;
  overflow: hidden;

  .banner__scroller {
    overflow: hidden;
    clip-path: polygon(24% 19%, 79% 19%, 79% 79%, 24% 79%);
    transform: scale(1);
    position: relative;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .banner__video {
    height: 100vh;
    position: relative;
    //opacity: 0;
    display: none;

    video {
      position: absolute;
      height: 100vh;
      left: 0;
      width: 100%;
      top: 0;
      bottom: 0;
      right: 0;
      object-fit: cover;
    }
  }

  .banner__content {
    position: absolute;
    bottom: 140px;
    z-index: 95;
    left: ${props => props.offset}px;

    h2 {
      font-size: 48px;
      line-height: 48px;
      color: #34342E;
    }
  }

  .banner__button {
    position: absolute;
    bottom: 70px;
    height: 140px;
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    right: ${props => props.offset + 70}px;
    background-color: #34342E;
    border-radius: 100%;
    cursor: pointer;

    &.hover:after {
      border-radius: 50%;
    }

    p {
      font-size: 16px;
      line-height: 20px;
      text-transform: uppercase;
      color: #f2eee8;
    }
  }

  @media (max-width: 990px) {
    .banner__scroller, .banner__button {
      display: none;
    }

    .banner__video {
      display: block;
      opacity: 1;
    }

    .banner__content h1 {
      color: #f2eee8;
    }
  }

  @media (max-width: 767px) {
    .banner__content {
      left: 15px !important;
      right: 15px;
      bottom: 67px;

      h1 {
        font-size: 36px;
        line-height: 36px;
      }
    }
  }


`;

export default MyComponent;
