import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import Logo from '../public/images/static/logo.svg'
import {black, hover, transition} from "../styles/globalStyleVars";
import {CSSPlugin, gsap, TimelineLite} from "gsap";
import {Img} from "./Img";
import menuImg from '../public/images/dynamic/m1.jpg'
import ModalVideo from "react-modal-video";
import 'react-modal-video/css/modal-video.min.css';
import menu2 from '../public/images/dynamic/m2.jpg'
import {useRouter} from "next/router";
import arrowRight from '../public/images/static/arrow-white-right.svg';


const MyComponent = () => {
    gsap.registerPlugin(CSSPlugin);
    const router = useRouter()
    let tl = new TimelineLite();
    let tl2 = new TimelineLite();
    let tll = new TimelineLite();
    let [videoId, setVideo] = useState("");
    let [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('')
    let handelOpen = (open, id) => {
        setOpen(open);
        setVideo(id);
    };


    //desktop menu contact dropdown
    useEffect(() => {
        document.querySelector(`.click-dropdown`)?.addEventListener('click', () => {
            if (!document.querySelector('.main-menu__contact').classList.contains('open-dropdown')) {
                document.querySelector('.main-menu__contact').classList.add('open-dropdown');
                tl.to('.dropdown-list', {
                    duration: .2,
                    display: 'block',
                }).to('.dropdown-list', {
                    y: '20px',
                    duration: .4,
                    height: 'calc(100% - 20px)',
                    alpha: 1,
                    paddingTop: '33px',
                    paddingBottom: '15px',
                    ease: "circ.out"
                })
            } else {
                document.querySelector('.main-menu__contact').classList.remove('open-dropdown');
                tl.to('.dropdown-list', {
                    duration: .3,
                    height: '0%',
                    alpha: 0,
                    paddingTop: '0',
                    y: '0px',
                    ease: "circ.out"
                }).to('.dropdown-list', {
                    duration: .2,
                    display: 'none',
                })
            }
        })
        window.addEventListener('click', (e) => {
            if (document.querySelector('.main-menu__contact') && document.querySelector('.main-menu__contact').classList.contains('open-dropdown')) {
                if (!e.target.matches('.click-dropdown, .click-dropdown p, .click-dropdown svg, .click-dropdown line')) {
                    tl.to('.dropdown-list', {
                        duration: .3,
                        height: '0%',
                        alpha: 0,
                        paddingTop: '0',
                        y: '0px',
                        ease: "circ.out"
                    }).to('.dropdown-list', {
                        duration: .2,
                        display: 'none',
                    })

                    document.querySelector('.main-menu__contact').classList.remove('open-dropdown');
                }
            }
        })
    }, []);

    //desktop menu on click toggle
    useEffect(() => {
        document.querySelector('.main-menu__menu__inner').addEventListener('click', () => {
            tll.to('.main-menu__items', {
                duration: '0',
                display: 'block'
            }).to('.main-menu__items', {
                opacity: '1',
                duration: '.6'
            }).to('.main-menu__items__img', {
                opacity: '1',
                duration: '.3'
            }, '-=.5').to('.main-menu__items__list', {
                duration: .5,
                y: 0,
                alpha: 1
            }, '-=.5').to('.shadows', {
                duration: .5,
                x: 0,
            }, '-=.5')
        })

        // desktop menu close
        const closeDelstopMenu = () => {
            tll.to('.main-menu__items__list', {
                duration: .2,
                y: '-40px',
                alpha: 0
            }).to('.main-menu__items', {
                opacity: '0',
                duration: '.3'
            }).to('.main-menu__items__img', {
                opacity: '0',
                duration: '.2'
            }, '-=.5').to('.main-menu__items__list', {
                duration: .2,
                y: '40px',
                alpha: 0
            }, '-=.3').to('.shadows', {
                duration: .2,
                x: '100%',
            }, '-=.5').to('.main-menu__items', {
                duration: '.4',
                opacity: 0
            }).to('.main-menu__items', {
                display: 'none'
            })
        }
        document.querySelector('.menu-close').addEventListener('click', () => {
            closeDelstopMenu()
        })
        const getAllDesktopA = document.querySelectorAll('.main-menu__items__list a');
        getAllDesktopA.forEach(e => {
            e.addEventListener('click', () => {
                closeDelstopMenu()
            })
        })
    }, [])

    //desktop menu hover action
    useEffect(() => {
        let getLis = document.querySelectorAll('.menu-col li'),
            getImgs = document.querySelectorAll('.main-menu__items__img li');
        for (var i = 0; i < getLis.length; i++) {
            getLis[i].setAttribute('data-index', i);

            getLis[i].onmouseover = function () {
                getImgs.forEach(e => {
                    e.classList.remove('active')
                })
                getImgs[this.getAttribute('data-index')].classList.add('active')
            };
        }
    }, [])


    //----- mobile menu action
    useEffect(() => {
        let getMobileMenuBar = document.querySelector('.main-menu-mobile');
        let getItemsParent = document.querySelector('.main-menu-mobile__items');
        let getItems = document.querySelectorAll('.main-item');
        let getBacks = document.querySelectorAll('.sub-menu-back');
        let getHamburgerClick = document.querySelector('#open-click')
        let getHamburgerCloseClick = document.querySelector('#close-click')

        // menu open toggle
        getHamburgerClick.addEventListener('click', () => {
            getMobileMenuBar.classList.add('menu-open')
            document.body.classList.add('stop-scroll')
            tl2.to(getItemsParent, {
                duration: .2,
                display: 'block',
            }).to(getItemsParent, {
                duration: .2,
                x: 0
            }, '-=.2')
        })

        getHamburgerCloseClick?.addEventListener('click', () => {
            getMobileMenuBar.classList.remove('menu-open')
            document.body.classList.remove('stop-scroll')
            if (document.querySelector('.main-item.active')) {
                getItemsParent.classList.remove('active')
                document.querySelector('.main-item.active').classList.remove('active')
            }

            tl2.to(getItemsParent, {
                duration: .2,
                x: '100%'
            }).to(getItemsParent, {
                duration: .2,
                display: 'none'
            })
        });


        // sub menu toggle
        getItems.forEach(i => {
            i.addEventListener('click', () => {
                getItemsParent.classList.add('active')
                i.classList.add('active')
            })
        })

        getBacks.forEach(i => {
            i.addEventListener('click', (e) => {

                getItemsParent.classList.remove('active')
                i.parentNode.parentElement.classList.remove('active')
                e.stopPropagation()
            })
        })

        // on click a tag menu hide
        let getAlla = document.querySelectorAll('.main-menu-mobile a');
        getAlla.forEach(i => {
            i.addEventListener('click', (e) => {
                // e.stopPropagation();
                getMobileMenuBar.classList.remove('menu-open');
                document.body.classList.remove('stop-scroll');
                // console.log('have or not', document.querySelector('.main-item.active'))
                setTimeout(() => {
                    if (document.querySelector('.main-item.active')) {

                        getItemsParent.classList.remove('active')
                        document.querySelector('.main-item.active').classList.remove('active')
                    }
                }, 300)

                tl2.to(getItemsParent, {
                    duration: .3,
                    x: '100%'
                }).to(getItemsParent, {
                    duration: .3,
                    display: 'none'
                })
            })
        })
    }, [])


    // menu fixed on scroll
    useEffect(() => {
        if (document.body.classList.contains("scroll-down")) {
            document.body.classList.remove("scroll-down");
        }
    });


    useEffect(() => {
        const whichPage = router.pathname

    }, [router?.pathname])


    useEffect(() => {

        const body = document.body;
        const scrollUp = "scroll-up";
        const scrollDown = "scroll-down";
        let lastScroll = 0;
        let howMuchScroll = 150;
        if (window.screen.width < 991) {
            howMuchScroll = 80;
        } else {
            howMuchScroll = 150;
        }

        window.addEventListener("scroll", () => {
            let currentScroll = window.pageYOffset;

            if (currentScroll <= howMuchScroll) {
                body.classList.remove(scrollUp);
                return;
            }
            if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
                // down
                body.classList.remove(scrollUp);
                body.classList.add(scrollDown);
            } else if (
                currentScroll < lastScroll &&
                body.classList.contains(scrollDown)
            ) {
                // up
                body.classList.remove(scrollDown);
                body.classList.add(scrollUp);
            }
            lastScroll = currentScroll;
        });
    }, []);


    // logo chenge in quintess page
    const [quintess, setQuintess] = useState(false)
    useEffect(() => {
        if (router.pathname == '/quintess') {
            setQuintess(true)
        } else {
            setQuintess(false)
        }
    }, [router])

    return (
        <>
            {/* desktop menu*/}
            <StyledMenu className={'main-menu menu-bar'}>
                <ModalVideo channel='youtube' isOpen={open} videoId={videoId} onClose={() => handelOpen(false, '')}/>
                {/*menu bar*/}
                <Container>
                    <Row>
                        <Col className={'main-menu__contact'}>
                            <div className="main-menu__contact__drop click-dropdown hover">
                                <p>Contact <svg width="9.414" height="5.414" viewBox="0 0 9.414 5.414">
                                    <g id="Group_15651" data-name="Group 15651"
                                       transform="translate(8.707 0.707) rotate(90)">
                                        <line id="Line_3880" data-name="Line 3880" x2="4" y2="4" fill="none"
                                              stroke="#f2eee8" stroke-linecap="round" stroke-width="1"/>
                                        <line id="Line_3881" data-name="Line 3881" y1="4" x2="4"
                                              transform="translate(0 4)"
                                              fill="none" stroke="#f2eee8" stroke-linecap="round" stroke-width="1"/>
                                    </g>
                                </svg>
                                </p>
                            </div>
                            <div className="main-menu__contact__list dropdown-list">
                                <Link href={'/contact'}><a>Contact Page <span className={'hover'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="5.414" height="9.414"
                                         viewBox="0 0 5.414 9.414">
                                          <g id="Group_17898" data-name="Group 17898"
                                             transform="translate(15411.707 1592.707)">
                                            <g id="Group_17897" data-name="Group 17897"
                                               transform="translate(-15411 -1592)">
                                              <line id="Line_3880" data-name="Line 3880" x2="4" y2="4" fill="none"
                                                    stroke="#f2eee8" stroke-linecap="round"
                                                    stroke-width="1"/>
                                              <line id="Line_3881" data-name="Line 3881" y1="4" x2="4"
                                                    transform="translate(0 4)" fill="none" stroke="#f2eee8"
                                                    stroke-linecap="round" stroke-width="1"/>
                                            </g>
                                          </g>
                                        </svg>
                                </span></a></Link>


                                <ul>
                                    <li><span>Call</span> <a href="tel:09612666888">09 612 666 888</a></li>
                                    <li><span>Email</span> <a
                                        href="mailto:info@duncanhills.com">info@duncanhills.com</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col className={'main-menu__logo justify-content-center d-flex'}>
                            <Link href={'/'}><a>
                                {/*<img src={Logo} alt="logo"/>*/}
                                {!quintess ?
                                    <svg width="233.252" height="120"
                                         viewBox="0 0 233.252 160">
                                        <g id="Group_18014" data-name="Group 18014" transform="translate(-566 -30)">
                                            <g id="Group_18013" data-name="Group 18013">
                                                <g id="Group_13298" data-name="Group 13298"
                                                   transform="translate(566 143.945)">
                                                    <path id="Path_6934" data-name="Path 6934"
                                                          d="M12.9,75.563a11.14,11.14,0,0,1-6.948,1.985H0V57.3H5.757c3.176,0,5.36.6,6.948,1.985a9.994,9.994,0,0,1,3.97,8.337,9.347,9.347,0,0,1-3.772,7.94Zm-.993-14.888c-1.39-1.191-3.375-1.787-6.154-1.787H1.787V75.96h3.97c2.779,0,4.764-.6,6.154-1.787a8.48,8.48,0,0,0,3.176-6.749,8.2,8.2,0,0,0-3.176-6.749Z"
                                                          transform="translate(0 -57.3)" fill="#8f6d4f"/>
                                                </g>
                                                <g id="Group_13299" data-name="Group 13299"
                                                   transform="translate(589.027 143.945)">
                                                    <path id="Path_6935" data-name="Path 6935"
                                                          d="M12.791,74.173A8.036,8.036,0,0,1,11.6,69.409V57.3h1.787V69.608a6.557,6.557,0,1,0,13.1,0V57.3h1.787V69.409a8.036,8.036,0,0,1-1.191,4.764,8.277,8.277,0,0,1-6.948,3.772c-3.375-.2-5.955-1.588-7.345-3.772Z"
                                                          transform="translate(-11.6 -57.3)" fill="#8f6d4f"/>
                                                </g>
                                                <g id="Group_13300" data-name="Group 13300"
                                                   transform="translate(613.246 143.945)">
                                                    <path id="Path_6936" data-name="Path 6936"
                                                          d="M23.8,57.3h1.191l13.5,16.873V57.3h1.787V77.548H39.085l-13.5-16.873V77.548H23.8Z"
                                                          transform="translate(-23.8 -57.3)" fill="#8f6d4f"/>
                                                </g>
                                                <g id="Group_13301" data-name="Group 13301"
                                                   transform="translate(636.273 143.548)">
                                                    <path id="Path_6937" data-name="Path 6937"
                                                          d="M53.663,74.37a10.414,10.414,0,0,1-7.742,3.772A10.111,10.111,0,0,1,35.4,67.621c0-5.955,4.367-10.521,10.124-10.521a9.725,9.725,0,0,1,7.345,3.176l-1.191,1.191a8.05,8.05,0,0,0-6.154-2.581,8.517,8.517,0,0,0-8.536,8.734,8.4,8.4,0,0,0,8.536,8.734,9.124,9.124,0,0,0,6.749-3.176Z"
                                                          transform="translate(-35.4 -57.1)" fill="#8f6d4f"/>
                                                </g>
                                                <g id="Group_13302" data-name="Group 13302"
                                                   transform="translate(658.705 143.945)">
                                                    <path id="Path_6938" data-name="Path 6938"
                                                          d="M56.626,57.3,65.36,77.548H63.573l-2.581-6.154H51.067l-2.581,6.154H46.7L55.434,57.3ZM51.861,69.806H60.4l-4.169-9.727Z"
                                                          transform="translate(-46.7 -57.3)" fill="#8f6d4f"/>
                                                </g>
                                                <g id="Group_13303" data-name="Group 13303"
                                                   transform="translate(683.121 143.945)">
                                                    <path id="Path_6939" data-name="Path 6939"
                                                          d="M59,57.3h1.191l13.7,16.873V57.3h1.787V77.548H74.484l-13.7-16.873V77.548H59Z"
                                                          transform="translate(-59 -57.3)" fill="#8f6d4f"/>
                                                </g>
                                                <g id="Group_13304" data-name="Group 13304"
                                                   transform="translate(718.654 143.945)">
                                                    <path id="Path_6940" data-name="Path 6940"
                                                          d="M91.59,67.226h-13.1V77.548H76.9V57.3h1.588v8.139h13.1V57.3h1.787V77.548H91.59Z"
                                                          transform="translate(-76.9 -57.3)" fill="#8f6d4f"/>
                                                </g>
                                                <g id="Group_13305" data-name="Group 13305"
                                                   transform="translate(743.27 143.945)">
                                                    <rect id="Rectangle_4473" data-name="Rectangle 4473" width="1.787"
                                                          height="20.248" fill="#8f6d4f"/>
                                                </g>
                                                <g id="Group_13306" data-name="Group 13306"
                                                   transform="translate(753.195 143.945)">
                                                    <path id="Path_6941" data-name="Path 6941"
                                                          d="M96.087,75.96h9.529v1.588H94.3V57.3h1.787Z"
                                                          transform="translate(-94.3 -57.3)" fill="#8f6d4f"/>
                                                </g>
                                                <g id="Group_13307" data-name="Group 13307"
                                                   transform="translate(770.664 143.945)">
                                                    <path id="Path_6942" data-name="Path 6942"
                                                          d="M104.688,75.96h9.727v1.588H103.1V57.3h1.588Z"
                                                          transform="translate(-103.1 -57.3)" fill="#8f6d4f"/>
                                                </g>
                                                <g id="Group_13308" data-name="Group 13308"
                                                   transform="translate(786.547 143.747)">
                                                    <path id="Path_6943" data-name="Path 6943"
                                                          d="M112.49,73.478a6.536,6.536,0,0,0,5.558,2.978,3.98,3.98,0,0,0,4.169-3.772c0-3.772-4.367-4.169-7.345-5.955-1.588-.993-2.779-2.184-2.779-4.169,0-3.176,2.581-5.36,5.757-5.36a7.391,7.391,0,0,1,5.161,1.985l-1.191,1.191a5.9,5.9,0,0,0-3.97-1.588c-2.184,0-4.169,1.39-4.169,3.573,0,3.176,4.169,3.573,6.948,5.36a5.929,5.929,0,0,1,3.176,4.963,5.648,5.648,0,0,1-5.955,5.558,8.368,8.368,0,0,1-6.749-3.375Z"
                                                          transform="translate(-111.1 -57.2)" fill="#8f6d4f"/>
                                                </g>
                                            </g>
                                            <g id="Group_18012" data-name="Group 18012">
                                                <g id="Group_13309" data-name="Group 13309"
                                                   transform="translate(642.029 30)">
                                                    <path id="Path_6944" data-name="Path 6944"
                                                          d="M96.662,24.317a18.163,18.163,0,0,0,.2-3.375A21.639,21.639,0,0,0,88.523,3.87C84.752,1.091,80.384-.1,74.231-.1H62.32V21.736a21.878,21.878,0,0,0-20.05,8.139c-2.779,3.772-3.97,8.139-3.97,14.293V56.079H60.136a29.837,29.837,0,0,0-.4,3.97,21.639,21.639,0,0,0,8.337,17.072c3.772,2.779,8.139,3.97,14.293,3.97H94.28V58.659a29.833,29.833,0,0,0,3.97.4,21.639,21.639,0,0,0,17.072-8.337c2.779-3.772,3.97-8.139,3.97-14.293V24.515H96.662ZM79.59,39.6a18.164,18.164,0,0,1-.2-3.375V26.5h14.69a19.42,19.42,0,0,1-6.749,9.926A15.263,15.263,0,0,1,79.59,39.6ZM65.5,3.076h8.735c5.558,0,9.529.993,12.7,3.573a17.868,17.868,0,0,1,7.146,14.491,24.439,24.439,0,0,1-.4,3.97v.2H78.6v10.72a17.939,17.939,0,0,0-2.581-5.161,19.971,19.971,0,0,0-10.323-7.146V3.076ZM78.4,44.764v9.529H62.717a18.149,18.149,0,0,1,6.551-9.132A17.242,17.242,0,0,1,78.2,41.786,13.146,13.146,0,0,1,78.4,44.764ZM64.5,24.515a17.911,17.911,0,0,1,10.323,6.948A19.744,19.744,0,0,1,78.2,40a25.31,25.31,0,0,1-3.97.2H64.5ZM41.476,53.3V44.565c0-5.558.993-9.529,3.573-12.7a17.972,17.972,0,0,1,14.69-7.146,27.126,27.126,0,0,1,3.772.4h.2V40.992H76.017a16.25,16.25,0,0,0-6.749,2.978A20.829,20.829,0,0,0,62.518,53.1H41.476ZM91.3,78.51H82.568c-5.558,0-9.529-.993-12.7-3.573a17.868,17.868,0,0,1-7.146-14.491,19.578,19.578,0,0,1,.6-4.764v-.2H79.193V44.764a22.345,22.345,0,0,0,2.581,5.36,20.829,20.829,0,0,0,9.132,6.749V78.51ZM92.3,55.88A17.778,17.778,0,0,1,79.987,41.587c.794,0,1.787-.2,2.779-.2H92.3V55.88Zm24.218-19.653c0,5.558-.993,9.529-3.573,12.7a17.868,17.868,0,0,1-14.491,7.146,19.578,19.578,0,0,1-4.764-.6h-.2V40.595H81.178a16.25,16.25,0,0,0,6.749-2.978,18.631,18.631,0,0,0,6.948-9.926h21.439v8.536Z"
                                                          transform="translate(-38.3 0.1)" fill="#8f6d4f"/>
                                                </g>
                                            </g>
                                            <g id="Group_18011" data-name="Group 18011">
                                                <g id="Group_13310" data-name="Group 13310"
                                                   transform="translate(636.273 179.28)">
                                                    <path id="Path_6945" data-name="Path 6945"
                                                          d="M40.76,79.666a3.079,3.079,0,0,1,1.787,2.978,3.287,3.287,0,0,1-.993,2.382,3.164,3.164,0,0,1-2.382.794H35.4V75.1h3.573a2.091,2.091,0,0,1,1.985.794,2.155,2.155,0,0,1,.794,1.787,2.443,2.443,0,0,1-.993,1.985Zm-1.985-.2a1.954,1.954,0,0,0,1.588-.6,1.985,1.985,0,0,0,0-2.382,1.954,1.954,0,0,0-1.588-.6H36.194v3.375h2.581Zm-2.382.794v4.566h2.779a2.635,2.635,0,0,0,1.985-.6,2.451,2.451,0,0,0,.794-1.588,1.805,1.805,0,0,0-.794-1.588,2.635,2.635,0,0,0-1.985-.6H36.393Z"
                                                          transform="translate(-35.4 -75.1)" fill="#8f6d4f"/>
                                                </g>
                                                <g id="Group_13311" data-name="Group 13311"
                                                   transform="translate(645.205 179.28)">
                                                    <path id="Path_6946" data-name="Path 6946"
                                                          d="M44.466,80.658v4.963h-.993V80.658L39.9,75.1h.993l2.978,4.764L47.046,75.1h.993Z"
                                                          transform="translate(-39.9 -75.1)" fill="#8f6d4f"/>
                                                </g>
                                                <g id="Group_13312" data-name="Group 13312"
                                                   transform="translate(660.492 179.082)">
                                                    <path id="Path_6947" data-name="Path 6947"
                                                          d="M48.593,83.536a3.342,3.342,0,0,0,2.779,1.588,2.164,2.164,0,0,0,2.184-1.985c0-1.985-2.184-2.184-3.772-3.176a2.441,2.441,0,0,1-1.39-2.184A2.884,2.884,0,0,1,51.372,75a4.545,4.545,0,0,1,2.779.993l-.6.6a2.711,2.711,0,0,0-2.184-.794,2.021,2.021,0,0,0-2.184,1.787c0,1.588,2.184,1.787,3.573,2.779a3.281,3.281,0,0,1,1.588,2.581,2.943,2.943,0,0,1-3.176,2.779A4.509,4.509,0,0,1,47.6,83.933Z"
                                                          transform="translate(-47.6 -75)" fill="#8f6d4f"/>
                                                </g>
                                                <g id="Group_13313" data-name="Group 13313"
                                                   transform="translate(669.623 179.28)">
                                                    <path id="Path_6948" data-name="Path 6948"
                                                          d="M57.56,75.1l4.566,10.72h-.993l-1.39-3.176H54.582l-1.39,3.176H52.2L56.766,75.1Zm-2.382,6.551h4.367L57.361,76.49Z"
                                                          transform="translate(-52.2 -75.1)" fill="#8f6d4f"/>
                                                </g>
                                                <g id="Group_13314" data-name="Group 13314"
                                                   transform="translate(682.525 179.28)">
                                                    <path id="Path_6949" data-name="Path 6949"
                                                          d="M58.7,75.1h.794l6.948,8.734V75.1h.993V85.621h-.6l-7.146-8.734v8.734H58.7Z"
                                                          transform="translate(-58.7 -75.1)" fill="#8f6d4f"/>
                                                </g>
                                                <g id="Group_13315" data-name="Group 13315"
                                                   transform="translate(695.627 179.28)">
                                                    <path id="Path_6950" data-name="Path 6950"
                                                          d="M70.461,83.636h-.6l-3.772-6.352v8.337H65.3V75.1h.6l4.367,7.345L74.432,75.1h.794V85.621h-.993V77.284Z"
                                                          transform="translate(-65.3 -75.1)" fill="#8f6d4f"/>
                                                </g>
                                                <g id="Group_13316" data-name="Group 13316"
                                                   transform="translate(708.332 179.28)">
                                                    <path id="Path_6951" data-name="Path 6951"
                                                          d="M77.06,75.1l4.566,10.72h-.993l-1.39-3.176H74.082l-1.39,3.176H71.7L76.266,75.1Zm-2.581,6.551h4.367L76.663,76.49Z"
                                                          transform="translate(-71.7 -75.1)" fill="#8f6d4f"/>
                                                </g>
                                                <g id="Group_13317" data-name="Group 13317"
                                                   transform="translate(721.037 179.082)">
                                                    <path id="Path_6952" data-name="Path 6952"
                                                          d="M85.048,85.72l-4.169-5.36H79.093v5.36H78.1V75h3.772a2.635,2.635,0,0,1,1.985.6,2.3,2.3,0,0,1,.794,1.985,3.527,3.527,0,0,1-.794,1.985,2.635,2.635,0,0,1-1.985.6l4.169,5.36h-.993Zm-3.176-6.154a1.9,1.9,0,0,0,1.39-.4,1.716,1.716,0,0,0,.6-1.191,1.2,1.2,0,0,0-.6-1.191,2.869,2.869,0,0,0-1.39-.4H79.291v3.375h2.581Z"
                                                          transform="translate(-78.1 -75)" fill="#8f6d4f"/>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>

                                    :

                                    <svg id="Quintess_Logo" data-name="Quintess Logo" width="134.934" height="80"
                                         viewBox="0 0 134.934 80">
                                        <g id="Group_18015" data-name="Group 18015">
                                            <path id="Path_6961" data-name="Path 6961"
                                                  d="M10.852,69.424h0c3.842,1.249,6.05,2.5,8.259,2.5A3.842,3.842,0,0,0,22.569,70.1c.192-.384.288-.672.576-.672a.307.307,0,0,1,.288.288c0,.864-1.441,3.938-6.435,3.938-4.322,0-7.3-3.169-10.564-3.169A2.986,2.986,0,0,0,3.457,72.21c-.288.384-.288.576-.576.576-.192,0-.288-.192-.288-.384,0-.768,1.345-3.169,4.994-3.457h0A10.592,10.592,0,0,1,10.276,48.2,10.524,10.524,0,0,1,20.552,58.764,10.7,10.7,0,0,1,10.852,69.424Zm-.576-.768h0c3.361,0,6.915-2.3,6.915-9.892s-3.553-9.892-6.915-9.892-7.011,2.3-7.011,9.892S6.819,68.656,10.276,68.656Z"
                                                  transform="translate(0 -1.91)" fill="#8f6d4f"/>
                                            <path id="Path_6962" data-name="Path 6962"
                                                  d="M28.91,61.7h0c0,2.977,1.633,4.8,4.322,4.9a4.479,4.479,0,0,0,4.8-4.61V54.3c0-4.9-2.977-3.649-2.977-4.514,0-.192.192-.288.48-.288h5.858c.288,0,.48.1.48.288,0,.864-2.977-.384-2.977,4.514V61.7c0,3.073-1.729,5.666-5.858,5.666-4.226,0-6.435-2.3-6.435-5.186V51.709c0-2.209-2.3-1.152-2.3-1.921a.307.307,0,0,1,.288-.288h6.146a.307.307,0,0,1,.288.288c0,.768-2.209-.288-2.209,1.921V61.7Z"
                                                  transform="translate(-0.963 -1.961)" fill="#8f6d4f"/>
                                            <path id="Path_6963" data-name="Path 6963"
                                                  d="M49.41,64.674h0c0,2.3,2.3,1.152,2.3,1.921a.255.255,0,0,1-.288.288H45.088a.255.255,0,0,1-.288-.288c0-.768,2.3.288,2.3-1.921V51.709c0-2.209-2.3-1.152-2.3-1.921a.307.307,0,0,1,.288-.288h6.339a.307.307,0,0,1,.288.288c0,.768-2.3-.288-2.3,1.921Z"
                                                  transform="translate(-1.775 -1.961)" fill="#8f6d4f"/>
                                            <path id="Path_6964" data-name="Path 6964"
                                                  d="M68.041,62.841h0V54.1c0-2.5-.768-3.745-2.4-4.034-.384,0-.576-.1-.576-.384a.255.255,0,0,1,.288-.288H71.4a.255.255,0,0,1,.288.288c0,.288-.192.288-.576.384-1.633.192-2.4,1.441-2.4,4.034V67.067c0,.288,0,.384-.288.384-.1,0-.192-.192-.576-.768l-9.7-13.83h-.1v9.412c0,2.5.768,3.745,2.4,4.034.384,0,.576.1.576.384a.255.255,0,0,1-.288.288H54.788a.255.255,0,0,1-.288-.288c0-.192.192-.288.576-.384,1.633-.192,2.4-1.441,2.4-4.034V51.989l-.864-1.152c-.864-1.056-2.017-.576-2.017-1.152,0-.192.1-.384.672-.384h3.457Z"
                                                  transform="translate(-2.159 -1.953)" fill="#8f6d4f"/>
                                            <path id="Path_6965" data-name="Path 6965"
                                                  d="M83.636,64.658h0c0,2.3,2.689,1.152,2.689,1.921,0,.192,0,.288-.384.288H78.834c-.288,0-.384-.1-.384-.288,0-.768,2.689.288,2.689-1.921V49.964A7.4,7.4,0,0,0,75.76,54c-.576.96-.576,1.249-.768,1.249a.207.207,0,0,1-.192-.192c0-.1.1-.576.192-1.056l1.248-4.514c0-.288.1-.384.288-.384.1,0,.192.1.288.192a.918.918,0,0,0,.672.192h9.6c.384,0,.576-.1.576-.192.1-.1.192-.192.288-.192.192,0,.288.1.288.384L89.494,54c.1.576.192.96.192,1.056a.207.207,0,0,1-.192.192c-.192,0-.192-.288-.768-1.249a7.4,7.4,0,0,0-5.378-4.034V64.658Z"
                                                  transform="translate(-2.963 -1.945)" fill="#8f6d4f"/>
                                            <path id="Path_6966" data-name="Path 6966"
                                                  d="M95.9,51.709h0c0-2.209-2.3-1.152-2.3-1.921a.307.307,0,0,1,.288-.288H105.7l1.633,4.9c.1.48.192.576.192.672s-.1.192-.288.192-.288-.192-.48-.576c-1.633-4.226-4.13-4.514-8.451-4.514v7.395c2.4,0,4.226-.672,4.226-3.457,0-.384,0-.48.192-.48.288,0,.288.1.288.48V61.7c0,.384,0,.576-.288.576-.192,0-.192-.192-.192-.576,0-2.785-1.825-3.649-4.226-3.649V64.77c0,1.152.384,1.633,2.017,1.633a7.432,7.432,0,0,0,6.915-4.61c.576-1.249.48-1.633.672-1.633.1,0,.192.1.192.288,0,.1-.1.576-.192,1.152l-1.345,5.474H93.888a.255.255,0,0,1-.288-.288c0-.768,2.3.288,2.3-1.921V51.709Z"
                                                  transform="translate(-3.708 -1.961)" fill="#8f6d4f"/>
                                            <path id="Path_6967" data-name="Path 6967"
                                                  d="M112.6,60.044h0c0-.384,0-.672.384-.672s.384.48.672,1.921c.864,4.322,2.977,5.378,4.9,5.378,2.3,0,4.034-1.345,4.034-3.649,0-5.954-9.8-3.073-9.8-9.6,0-2.593,2.5-4.418,5.09-4.418a12.488,12.488,0,0,1,4.226.96c.768,0,.48-.864.96-.864.288,0,.384.192.384.48.48,5.186.48,5.474.48,5.666s0,.48-.288.48-.288-.192-.576-1.248c-1.056-3.361-2.593-4.994-5.09-4.994A2.932,2.932,0,0,0,115,52.457c0,4.9,9.8,2.977,9.8,9.412,0,3.938-3.745,5.474-6.05,5.474-2.4,0-4.034-1.056-4.514-1.056-.672,0-.576.96-1.152.96-.192,0-.384-.192-.384-.576V60.044Z"
                                                  transform="translate(-4.461 -1.941)" fill="#8f6d4f"/>
                                            <path id="Path_6968" data-name="Path 6968"
                                                  d="M128,60.044h0c0-.384,0-.672.288-.672.48,0,.384.48.672,1.921.864,4.322,2.977,5.378,4.9,5.378,2.3,0,4.034-1.345,4.034-3.649,0-5.954-9.8-3.073-9.8-9.6,0-2.593,2.5-4.418,5.09-4.418,2.4,0,3.745.96,4.226.96.768,0,.384-.864.96-.864a.439.439,0,0,1,.384.48c.48,5.186.48,5.474.48,5.666s0,.48-.288.48-.288-.192-.672-1.248c-1.056-3.361-2.593-4.994-5.09-4.994a2.932,2.932,0,0,0-2.977,2.977c0,4.9,9.8,2.977,9.8,9.412,0,3.938-3.745,5.474-6.05,5.474-2.4,0-4.034-1.056-4.514-1.056-.672,0-.576.96-1.152.96-.192,0-.384-.192-.384-.576V60.044Z"
                                                  transform="translate(-5.067 -1.941)" fill="#8f6d4f"/>
                                        </g>
                                        <path id="Path_6969" data-name="Path 6969"
                                              d="M89.844,29.676h0c0,1.825-.384,2.785-1.921,2.785-2.689,0-8.067-4.034-13.157-2.689l1.056-.48c1.152-.576,2.3-1.248,3.457-1.825,5.474-3.361,10.084-7.107,10.084-14.406S85.714,0,76.975,0A13.39,13.39,0,0,0,70.06,1.633,13.638,13.638,0,0,0,63.145,0C54.406,0,50.66,5.762,50.66,13.061s4.706,11.044,10.276,14.31c1.152.672,2.3,1.248,3.457,1.825l1.056.48c-5.09-1.345-10.468,2.689-13.157,2.689-1.633,0-2.017-.96-2.017-2.785H49.7c0,3.169,1.056,5.474,4.706,5.474,4.61,0,8.739-4.13,11.909-4.13A4.486,4.486,0,0,1,69.2,32.173a2.191,2.191,0,0,1,.576,1.152V33.9h.768a1.218,1.218,0,0,0-.1-.576,3.246,3.246,0,0,1,.576-1.152A4.54,4.54,0,0,1,74,30.924c3.073,0,7.2,4.13,11.909,4.13,3.649,0,4.706-2.3,4.706-5.474h-.768ZM70.06,32.461h0c-.864-1.633-3.073-2.689-5.378-3.842-1.152-.576-2.4-1.248-3.457-1.921-3.745-2.4-6.05-5.666-6.05-13.541C55.174,5.09,56.9.48,63.241.48A7.19,7.19,0,0,1,68.812,2.5c-2.881,2.4-4.13,6.146-4.13,10.66,0,5.09,1.825,8.547,4.418,10.468a3.587,3.587,0,0,1-.672.576,5.047,5.047,0,0,1-3.265.864v.576a10.608,10.608,0,0,0,5.09-1.345,10.9,10.9,0,0,0,5.09,1.345v-.576a5.214,5.214,0,0,1-3.265-.864c-.192-.192-.48-.384-.672-.576C74,21.7,75.822,18.247,75.822,13.157c0-4.418-1.345-8.259-4.226-10.66A7.19,7.19,0,0,1,77.167.48c6.339,0,8.067,4.61,8.067,12.677,0,7.875-2.3,11.14-6.05,13.541-1.152.672-2.4,1.345-3.553,1.921C73.133,29.868,70.924,30.924,70.06,32.461Zm1.152-19.784h0c0,2.689.1,6.531-1.152,9.316-1.248-2.785-1.152-6.627-1.152-9.316A20.665,20.665,0,0,1,70.06,4.8,20.665,20.665,0,0,1,71.213,12.677Z"
                                              transform="translate(-1.969 0)" fill="#8f6d4f"/>
                                        <g id="Group_18014" data-name="Group 18014">
                                            <path id="Path_6970" data-name="Path 6970"
                                                  d="M29.4,80.234h-.288L27.38,77.256V81.29H26.9V76.2h.288L29.3,79.657,31.318,76.2H31.7v5.09h-.48V77.256Z"
                                                  transform="translate(-1.066 -3.019)" fill="#8f6d4f"/>
                                            <path id="Path_6971" data-name="Path 6971"
                                                  d="M35.877,80.781h0a1.617,1.617,0,0,1-1.345.576A1.59,1.59,0,0,1,32.9,79.629,1.569,1.569,0,0,1,34.437,77.9a1.542,1.542,0,0,1,1.537,1.633v.1H33.284a1.211,1.211,0,0,0,1.249,1.248,1.376,1.376,0,0,0,1.056-.48Zm-2.593-1.441h2.209a1.228,1.228,0,0,0-1.152-1.056A1.135,1.135,0,0,0,33.284,79.341Z"
                                                  transform="translate(-1.303 -3.086)" fill="#8f6d4f"/>
                                            <path id="Path_6972" data-name="Path 6972"
                                                  d="M37.48,78.476h0a1.5,1.5,0,0,1,1.152-.576,1.378,1.378,0,0,1,1.248.672A1.455,1.455,0,0,1,41.13,77.9a1.378,1.378,0,0,1,1.248.672,2.066,2.066,0,0,1,.192.96v1.729h-.384V79.533c0-.48,0-.672-.192-.864a1.009,1.009,0,0,0-.864-.48,1.3,1.3,0,0,0-1.152.768v2.209h-.384V79.437a1.623,1.623,0,0,0-.192-.864,1.009,1.009,0,0,0-.864-.48,1.465,1.465,0,0,0-1.152.672v2.3H37V78h.384v.48Z"
                                                  transform="translate(-1.466 -3.086)" fill="#8f6d4f"/>
                                            <path id="Path_6973" data-name="Path 6973"
                                                  d="M44.384,80.71h0v.48H44V76.1h.48v2.3a1.711,1.711,0,0,1,1.249-.576,2.014,2.014,0,0,1,1.056.384,1.612,1.612,0,0,1,.576,1.345A1.877,1.877,0,0,1,46.689,81a1.853,1.853,0,0,1-.96.288A1.612,1.612,0,0,1,44.384,80.71Zm.1-.48h0a1.254,1.254,0,0,0,1.152.672,1.809,1.809,0,0,0,.768-.192,1.5,1.5,0,0,0,.576-1.152A1.542,1.542,0,0,0,46.5,78.5a1.091,1.091,0,0,0-.768-.288,1.49,1.49,0,0,0-1.152.672V80.23Z"
                                                  transform="translate(-1.743 -3.015)" fill="#8f6d4f"/>
                                            <path id="Path_6974" data-name="Path 6974"
                                                  d="M51.173,80.781h0a1.768,1.768,0,0,1-1.345.576A1.664,1.664,0,0,1,48.1,79.629,1.643,1.643,0,0,1,49.733,77.9a1.542,1.542,0,0,1,1.537,1.633v.1H48.58a1.211,1.211,0,0,0,1.249,1.248,1.542,1.542,0,0,0,1.056-.48ZM48.58,79.341h2.3a1.228,1.228,0,0,0-1.152-1.056C49.156,78.284,48.772,78.764,48.58,79.341Z"
                                                  transform="translate(-1.906 -3.086)" fill="#8f6d4f"/>
                                            <path id="Path_6975" data-name="Path 6975"
                                                  d="M54.033,78.284h-.192a1.124,1.124,0,0,0-1.056.768v2.209H52.4V78h.384v.48a1.406,1.406,0,0,1,1.056-.576h.288Z"
                                                  transform="translate(-2.076 -3.086)" fill="#8f6d4f"/>
                                            <path id="Path_6976" data-name="Path 6976"
                                                  d="M55.68,76.2h.576l-.768,1.729H55.2Z"
                                                  transform="translate(-2.187 -3.019)" fill="#8f6d4f"/>
                                            <path id="Path_6977" data-name="Path 6977"
                                                  d="M56.792,80.589h0a1.233,1.233,0,0,0,.96.384c.48,0,.768-.192.768-.576,0-.864-1.921-.384-1.921-1.537a1.076,1.076,0,0,1,1.152-.96,1.748,1.748,0,0,1,1.056.384l-.192.288a1.341,1.341,0,0,0-.864-.288.635.635,0,0,0-.672.576c0,.672,1.921.384,1.921,1.537a1.076,1.076,0,0,1-1.152.96,1.659,1.659,0,0,1-1.248-.48Z"
                                                  transform="translate(-2.242 -3.086)" fill="#8f6d4f"/>
                                            <path id="Path_6978" data-name="Path 6978"
                                                  d="M66.314,80.426h0a2.364,2.364,0,0,1-1.921.96,2.594,2.594,0,0,1-.1-5.186,2.624,2.624,0,0,1,1.825.768l-.288.192a2.266,2.266,0,0,0-1.537-.672A2.1,2.1,0,0,0,62.184,78.7a2.173,2.173,0,0,0,2.209,2.209,2.393,2.393,0,0,0,1.633-.768Z"
                                                  transform="translate(-2.448 -3.019)" fill="#8f6d4f"/>
                                            <path id="Path_6979" data-name="Path 6979" d="M67.3,76.1h.48v5.186H67.3Z"
                                                  transform="translate(-2.666 -3.015)" fill="#8f6d4f"/>
                                            <path id="Path_6980" data-name="Path 6980"
                                                  d="M71.493,80.881h0a1.469,1.469,0,0,1-2.4-.1,2.066,2.066,0,0,1-.192-.96V78h.384v1.729a1.623,1.623,0,0,0,.192.864,1.009,1.009,0,0,0,.864.48,1.465,1.465,0,0,0,1.152-.672V78h.384v3.265h-.384Z"
                                                  transform="translate(-2.729 -3.09)" fill="#8f6d4f"/>
                                            <path id="Path_6981" data-name="Path 6981"
                                                  d="M73.684,80.71h0v.48H73.3V76.1h.384v2.3a1.905,1.905,0,0,1,1.249-.576,2.014,2.014,0,0,1,1.056.384,1.612,1.612,0,0,1,.576,1.345A1.877,1.877,0,0,1,75.893,81a2.147,2.147,0,0,1-.96.288A1.427,1.427,0,0,1,73.684,80.71Zm0-.48h0a1.3,1.3,0,0,0,1.249.672,1.119,1.119,0,0,0,.672-.192,1.257,1.257,0,0,0,.576-1.152A1.542,1.542,0,0,0,75.7,78.5a1.277,1.277,0,0,0-.768-.288,1.944,1.944,0,0,0-1.248.672Z"
                                                  transform="translate(-2.904 -3.015)" fill="#8f6d4f"/>
                                            <path id="Path_6982" data-name="Path 6982"
                                                  d="M80.184,80.71h0v.48H79.8V76.1h.384v2.3a1.905,1.905,0,0,1,1.248-.576,2.014,2.014,0,0,1,1.056.384,1.612,1.612,0,0,1,.576,1.345A1.877,1.877,0,0,1,82.393,81a2.189,2.189,0,0,1-1.056.288A1.257,1.257,0,0,1,80.184,80.71Zm0-.48h0a1.3,1.3,0,0,0,1.248.672,1.119,1.119,0,0,0,.672-.192,1.5,1.5,0,0,0,.576-1.152,1.3,1.3,0,0,0-1.249-1.345,1.944,1.944,0,0,0-1.249.672V80.23Z"
                                                  transform="translate(-3.161 -3.015)" fill="#8f6d4f"/>
                                            <path id="Path_6983" data-name="Path 6983"
                                                  d="M84.076,83.09h0l.96-2.017L83.5,78h.48l1.248,2.593L86.381,78h.48l-2.3,5.09Z"
                                                  transform="translate(-3.308 -3.09)" fill="#8f6d4f"/>
                                            <path id="Path_6984" data-name="Path 6984"
                                                  d="M89.584,80.134h0a1.617,1.617,0,0,0,1.345.768.987.987,0,0,0,1.056-.96c0-.864-1.152-1.056-1.825-1.441a1.181,1.181,0,0,1-.672-1.056A1.4,1.4,0,0,1,90.929,76.1a1.894,1.894,0,0,1,1.248.48l-.192.384a1.312,1.312,0,0,0-1.056-.384.978.978,0,0,0-1.056.864c0,.768,1.056.864,1.729,1.345a1.287,1.287,0,0,1,.768,1.248,1.424,1.424,0,0,1-1.537,1.345,1.887,1.887,0,0,1-1.633-.864Z"
                                                  transform="translate(-3.534 -3.015)" fill="#8f6d4f"/>
                                            <path id="Path_6985" data-name="Path 6985"
                                                  d="M96.085,81.361h0v-.48a1.369,1.369,0,0,1-1.152.576,1.853,1.853,0,0,1-.96-.288,1.516,1.516,0,0,1-.672-1.441,1.68,1.68,0,0,1,.672-1.345A2.014,2.014,0,0,1,95.029,78a1.369,1.369,0,0,1,1.152.576V78h.384v3.265h-.48Zm0-2.4h0a1.692,1.692,0,0,0-1.152-.672,1.091,1.091,0,0,0-.768.288,1.239,1.239,0,0,0-.48,1.056,1.59,1.59,0,0,0,.48,1.152,1.809,1.809,0,0,0,.768.192,1.332,1.332,0,0,0,1.152-.672Z"
                                                  transform="translate(-3.696 -3.09)" fill="#8f6d4f"/>
                                            <path id="Path_6986" data-name="Path 6986"
                                                  d="M98.38,78.476h0a1.441,1.441,0,0,1,2.3,0,1.545,1.545,0,0,1,.288,1.056v1.729h-.48V79.533c0-.384,0-.576-.192-.768a1.009,1.009,0,0,0-.864-.48,1.465,1.465,0,0,0-1.152.672v2.3H97.9V78h.384v.48Z"
                                                  transform="translate(-3.878 -3.086)" fill="#8f6d4f"/>
                                            <path id="Path_6987" data-name="Path 6987"
                                                  d="M102.684,78.476h0a1.351,1.351,0,0,1,1.152-.576,1.5,1.5,0,0,1,1.249.672,1.455,1.455,0,0,1,1.248-.672,1.5,1.5,0,0,1,1.249.672,2.066,2.066,0,0,1,.192.96v1.729h-.384V79.533a1.623,1.623,0,0,0-.192-.864,1.009,1.009,0,0,0-.864-.48,1.3,1.3,0,0,0-1.152.768v2.209H104.8V79.437a1.623,1.623,0,0,0-.192-.864.855.855,0,0,0-.768-.48,1.465,1.465,0,0,0-1.152.672v2.3H102.3V78h.384Z"
                                                  transform="translate(-4.053 -3.086)" fill="#8f6d4f"/>
                                            <path id="Path_6988" data-name="Path 6988"
                                                  d="M111.781,81.361h0v-.48a1.257,1.257,0,0,1-1.152.576,2.5,2.5,0,0,1-1.056-.288,1.734,1.734,0,0,1-.672-1.441,1.612,1.612,0,0,1,.576-1.345A2.014,2.014,0,0,1,110.533,78a1.549,1.549,0,0,1,1.249.576V78h.384v3.265h-.384Zm0-2.4h0a1.533,1.533,0,0,0-1.249-.672,1.091,1.091,0,0,0-.768.288,1.239,1.239,0,0,0-.48,1.056,1.369,1.369,0,0,0,.576,1.152,1.78,1.78,0,0,0,.672.192,1.642,1.642,0,0,0,1.249-.672V78.96Z"
                                                  transform="translate(-4.314 -3.09)" fill="#8f6d4f"/>
                                            <path id="Path_6989" data-name="Path 6989"
                                                  d="M115.233,78.284h-.192a1.124,1.124,0,0,0-1.056.768v2.209H113.6V78h.384v.48a1.617,1.617,0,0,1,1.056-.576h.192Z"
                                                  transform="translate(-4.5 -3.086)" fill="#8f6d4f"/>
                                        </g>
                                    </svg>

                                }
                            </a></Link>
                        </Col>

                        <Col className={'main-menu__menu'}>
                            <div className="main-menu__menu__inner">
                                <div className="line"/>
                                <div className="line"/>
                                <div className="line"/>
                            </div>

                        </Col>
                    </Row>
                </Container>

                {/*menu items*/}
                <div className="main-menu__items">
                    <div className="d-flex">
                        {/*shadow right bottom*/}
                        <div className="shadows">
                            <svg width="134.994" height="199.318"
                                 viewBox="0 0 134.994 199.318">
                                <g id="Group_17901" data-name="Group 17901" transform="translate(13347 1693.318)">
                                    <g id="Group_17900" data-name="Group 17900"
                                       transform="translate(-17139.66 -2808.943)">
                                        <path id="Path_6959" data-name="Path 6959"
                                              d="M135.575,40.6a30.273,30.273,0,0,0,.331-5.625,36.066,36.066,0,0,0-13.9-28.455C115.723,1.885,108.444-.1,98.187-.1H78.335V36.3A36.465,36.465,0,0,0,44.917,49.861C40.285,56.147,38.3,63.426,38.3,73.683V93.535H74.7a49.73,49.73,0,0,0-.662,6.617,36.066,36.066,0,0,0,13.9,28.455c6.287,4.632,13.566,6.617,23.822,6.617H131.6V97.837a49.724,49.724,0,0,0,6.617.662,36.066,36.066,0,0,0,28.454-13.9c4.632-6.286,6.617-13.566,6.617-23.822V40.927H135.575ZM107.12,66.073a30.276,30.276,0,0,1-.331-5.625V44.236h24.484a32.368,32.368,0,0,1-11.249,16.543A25.439,25.439,0,0,1,107.12,66.073ZM83.629,5.194H98.187c9.264,0,15.882,1.654,21.175,5.956A29.781,29.781,0,0,1,131.274,35.3a40.732,40.732,0,0,1-.662,6.617v.331H105.466V60.118a29.9,29.9,0,0,0-4.3-8.6A33.286,33.286,0,0,0,83.96,39.6V5.194Zm21.506,69.482V90.557H79a30.25,30.25,0,0,1,10.919-15.22A28.737,28.737,0,0,1,104.8,69.713,21.911,21.911,0,0,1,105.135,74.676ZM81.974,40.927a29.853,29.853,0,0,1,17.205,11.58A32.909,32.909,0,0,1,104.8,66.735a42.186,42.186,0,0,1-6.617.331H81.974ZM43.594,88.9V74.345c0-9.264,1.654-15.882,5.956-21.175A29.954,29.954,0,0,1,74.034,41.258a45.213,45.213,0,0,1,6.286.662h.331V68.389h20.514a27.084,27.084,0,0,0-11.249,4.963,34.716,34.716,0,0,0-11.249,15.22H43.594Zm83.048,42.02H112.083c-9.264,0-15.882-1.654-21.175-5.956A29.781,29.781,0,0,1,79,100.814a32.631,32.631,0,0,1,.993-7.941v-.331h26.469V74.676a37.244,37.244,0,0,0,4.3,8.933,34.716,34.716,0,0,0,15.22,11.249v36.064ZM128.3,93.2a29.631,29.631,0,0,1-20.514-23.822c1.323,0,2.978-.331,4.632-.331H128.3V93.2Zm40.366-32.756c0,9.264-1.654,15.882-5.956,21.175a29.781,29.781,0,0,1-24.153,11.911,32.631,32.631,0,0,1-7.941-.993h-.331V67.728H109.767a27.083,27.083,0,0,0,11.249-4.963A31.053,31.053,0,0,0,132.6,46.221h35.734V60.449Z"
                                              transform="translate(3754.36 1115.725)" fill="#8f6d4f" opacity="0.2"/>
                                        <path id="Path_6960" data-name="Path 6960"
                                              d="M74.283,14.954a11.2,11.2,0,0,0,.122-2.081,13.341,13.341,0,0,0-5.14-10.526C66.939.634,64.247-.1,60.453-.1H53.109V13.363a13.489,13.489,0,0,0-12.361,5.018C39.034,20.706,38.3,23.4,38.3,27.193v7.343H51.763a18.4,18.4,0,0,0-.245,2.448,13.341,13.341,0,0,0,5.14,10.526c2.325,1.713,5.018,2.448,8.812,2.448h7.343V36.127a18.393,18.393,0,0,0,2.448.245,13.341,13.341,0,0,0,10.525-5.14c1.713-2.325,2.448-5.018,2.448-8.812V15.076H74.283ZM63.757,24.378a11.2,11.2,0,0,1-.122-2.081v-6h9.057A11.973,11.973,0,0,1,68.53,22.42,9.41,9.41,0,0,1,63.757,24.378Zm-8.69-22.52h5.385c3.427,0,5.875.612,7.833,2.2A11.016,11.016,0,0,1,72.692,13a15.067,15.067,0,0,1-.245,2.448v.122h-9.3v6.609a11.06,11.06,0,0,0-1.591-3.182,12.313,12.313,0,0,0-6.364-4.406V1.858Zm7.955,25.7v5.875H53.354a11.19,11.19,0,0,1,4.039-5.63A10.63,10.63,0,0,1,62.9,25.724,8.1,8.1,0,0,1,63.023,27.56ZM54.455,15.076A11.043,11.043,0,0,1,60.82,19.36,12.173,12.173,0,0,1,62.9,24.623a15.6,15.6,0,0,1-2.448.122h-6Zm-14.2,17.747V27.438c0-3.427.612-5.875,2.2-7.833A11.08,11.08,0,0,1,51.518,15.2a16.724,16.724,0,0,1,2.325.245h.122v9.791h7.588a10.019,10.019,0,0,0-4.161,1.836,12.842,12.842,0,0,0-4.161,5.63H40.258Zm30.72,15.543H65.593c-3.427,0-5.875-.612-7.833-2.2a11.016,11.016,0,0,1-4.406-8.934,12.071,12.071,0,0,1,.367-2.937v-.122h9.791V27.56a13.777,13.777,0,0,0,1.591,3.3,12.842,12.842,0,0,0,5.63,4.161v13.34Zm.612-13.952A10.961,10.961,0,0,1,64,25.6c.49,0,1.1-.122,1.713-.122H71.59v8.934ZM86.522,22.3c0,3.427-.612,5.875-2.2,7.833a11.016,11.016,0,0,1-8.934,4.406,12.071,12.071,0,0,1-2.937-.367h-.122V24.99H64.736A10.018,10.018,0,0,0,68.9,23.154a11.487,11.487,0,0,0,4.284-6.119H86.4V22.3Z"
                                              transform="translate(3827.426 1264.986)" fill="#8f6d4f" opacity="0.2"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        {/*shadow left bottom*/}
                        <div className="shadows-left">
                            <svg width="238.287" height="238.871" viewBox="0 0 238.287 238.871">
                                <path id="Path_8667" data-name="Path 8667"
                                      d="M210.007,71.736a53.436,53.436,0,0,0,.584-9.929,63.662,63.662,0,0,0-24.53-50.227C174.964,3.4,162.116-.1,144.011-.1H108.968V64.144c-22.777-2.92-45.555,6.424-58.988,23.945C41.8,99.186,38.3,112.035,38.3,130.14v35.042h64.244a87.785,87.785,0,0,0-1.168,11.681,63.663,63.663,0,0,0,24.53,50.227c11.1,8.176,23.946,11.681,42.051,11.681H203v-66a87.771,87.771,0,0,0,11.681,1.168,63.662,63.662,0,0,0,50.227-24.53c8.177-11.1,11.681-23.945,11.681-42.051V72.32h-66.58ZM159.78,116.707a53.441,53.441,0,0,1-.584-9.929V78.161h43.219a57.136,57.136,0,0,1-19.857,29.2A44.9,44.9,0,0,1,159.78,116.707ZM118.313,9.245h25.7c16.353,0,28.034,2.92,37.378,10.513,13.433,9.929,21.025,25.7,21.025,42.635a71.9,71.9,0,0,1-1.168,11.681v.584H156.859v31.538a52.779,52.779,0,0,0-7.592-15.185A58.756,58.756,0,0,0,118.9,69.984V9.245Zm37.962,122.648v28.034H110.136A53.4,53.4,0,0,1,129.41,133.06c7.008-5.256,15.185-8.761,26.282-9.929A38.675,38.675,0,0,1,156.275,131.892ZM115.393,72.32a52.7,52.7,0,0,1,30.37,20.441c4.672,6.424,8.177,14.6,9.929,25.114a74.463,74.463,0,0,1-11.681.584H115.393ZM47.645,157.006v-25.7c0-16.353,2.92-28.034,10.513-37.378C68.086,80.5,83.855,72.9,101.376,72.9a79.808,79.808,0,0,1,11.1,1.168h.584V120.8h36.21c-8.176,1.752-14.6,4.672-19.857,8.761-8.761,6.424-15.769,16.353-19.857,26.866H47.645Zm146.593,74.173h-25.7c-16.353,0-28.034-2.92-37.378-10.513-13.433-9.929-21.025-25.7-21.025-42.635a57.6,57.6,0,0,1,1.752-14.017v-.584h46.723V131.892a65.741,65.741,0,0,0,7.592,15.769c6.424,8.761,16.353,15.769,26.866,19.857v63.66Zm2.92-66.58a53.4,53.4,0,0,1-26.866-19.273c-4.672-6.424-7.592-13.433-9.345-22.777,2.336,0,5.256-.584,8.177-.584h28.034V164.6Zm71.252-57.82c0,16.353-2.92,28.034-10.513,37.378-9.929,13.433-25.7,21.025-42.635,21.025a57.6,57.6,0,0,1-14.017-1.752h-.584v-43.8h-36.21c8.177-1.752,14.6-4.672,19.857-8.761a54.813,54.813,0,0,0,20.441-29.2h63.076v25.114Z"
                                      transform="translate(-38.3 0.1)" fill="#f2eee8" opacity="0.2"/>
                            </svg>

                        </div>

                        {/*menu left img*/}
                        <Col sm={5} className={'p-0'}>

                            <div className="logo">
                                <svg width="200" height="137.191" viewBox="0 0 200 137.191">
                                    <g id="Duncan_Hills" data-name="Duncan Hills" transform="translate(0 0.1)">
                                        <g id="Group_13298" data-name="Group 13298" transform="translate(0 97.602)">
                                            <path id="Path_6934" data-name="Path 6934"
                                                  d="M11.064,72.96a9.552,9.552,0,0,1-5.957,1.7H0V57.3H4.936c2.723,0,4.6.511,5.957,1.7a8.569,8.569,0,0,1,3.4,7.149,8.015,8.015,0,0,1-3.234,6.809Zm-.851-12.766a7.812,7.812,0,0,0-5.277-1.532h-3.4V73.3h3.4a7.812,7.812,0,0,0,5.277-1.532,7.271,7.271,0,0,0,2.723-5.787,7.034,7.034,0,0,0-2.723-5.787Z"
                                                  transform="translate(0 -57.3)" fill="#f2eee8"/>
                                        </g>
                                        <g id="Group_13299" data-name="Group 13299"
                                           transform="translate(19.745 97.602)">
                                            <path id="Path_6935" data-name="Path 6935"
                                                  d="M12.621,71.768A6.89,6.89,0,0,1,11.6,67.683V57.3h1.532V67.853a5.623,5.623,0,1,0,11.234,0V57.3H25.9V67.683a6.89,6.89,0,0,1-1.021,4.085A7.1,7.1,0,0,1,18.919,75a7.681,7.681,0,0,1-6.3-3.234Z"
                                                  transform="translate(-11.6 -57.3)" fill="#f2eee8"/>
                                        </g>
                                        <g id="Group_13300" data-name="Group 13300"
                                           transform="translate(40.511 97.602)">
                                            <path id="Path_6936" data-name="Path 6936"
                                                  d="M23.8,57.3h1.021L36.4,71.768V57.3h1.532V74.662H36.906L25.332,60.194V74.662H23.8Z"
                                                  transform="translate(-23.8 -57.3)" fill="#f2eee8"/>
                                        </g>
                                        <g id="Group_13301" data-name="Group 13301"
                                           transform="translate(60.255 97.262)">
                                            <path id="Path_6937" data-name="Path 6937"
                                                  d="M51.06,71.909a8.93,8.93,0,0,1-6.638,3.234A8.67,8.67,0,0,1,35.4,66.121,8.691,8.691,0,0,1,44.081,57.1a8.339,8.339,0,0,1,6.3,2.723l-1.021,1.021a6.9,6.9,0,0,0-5.277-2.213,7.3,7.3,0,0,0-7.319,7.489,7.2,7.2,0,0,0,7.319,7.489,7.823,7.823,0,0,0,5.787-2.723Z"
                                                  transform="translate(-35.4 -57.1)" fill="#f2eee8"/>
                                        </g>
                                        <g id="Group_13302" data-name="Group 13302"
                                           transform="translate(79.489 97.602)">
                                            <path id="Path_6938" data-name="Path 6938"
                                                  d="M55.211,57.3,62.7,74.662H61.168l-2.213-5.277H50.445l-2.213,5.277H46.7L54.189,57.3ZM51.126,68.023h7.319l-3.574-8.34Z"
                                                  transform="translate(-46.7 -57.3)" fill="#f2eee8"/>
                                        </g>
                                        <g id="Group_13303" data-name="Group 13303"
                                           transform="translate(100.426 97.602)">
                                            <path id="Path_6939" data-name="Path 6939"
                                                  d="M59,57.3h1.021L71.766,71.768V57.3H73.3V74.662H72.277L60.532,60.194V74.662H59Z"
                                                  transform="translate(-59 -57.3)" fill="#f2eee8"/>
                                        </g>
                                        <g id="Group_13304" data-name="Group 13304"
                                           transform="translate(130.894 97.602)">
                                            <path id="Path_6940" data-name="Path 6940"
                                                  d="M89.5,65.811H78.262v8.851H76.9V57.3h1.362v6.979H89.5V57.3h1.532V74.662H89.5Z"
                                                  transform="translate(-76.9 -57.3)" fill="#f2eee8"/>
                                        </g>
                                        <g id="Group_13305" data-name="Group 13305" transform="translate(152 97.602)">
                                            <rect id="Rectangle_4473" data-name="Rectangle 4473" width="1.532"
                                                  height="17.362"
                                                  fill="#f2eee8"/>
                                        </g>
                                        <g id="Group_13306" data-name="Group 13306"
                                           transform="translate(160.511 97.602)">
                                            <path id="Path_6941" data-name="Path 6941"
                                                  d="M95.832,73.3H104v1.362H94.3V57.3h1.532Z"
                                                  transform="translate(-94.3 -57.3)"
                                                  fill="#f2eee8"/>
                                        </g>
                                        <g id="Group_13307" data-name="Group 13307"
                                           transform="translate(175.489 97.602)">
                                            <path id="Path_6942" data-name="Path 6942"
                                                  d="M104.462,73.3h8.34v1.362h-9.7V57.3h1.362Z"
                                                  transform="translate(-103.1 -57.3)" fill="#f2eee8"/>
                                        </g>
                                        <g id="Group_13308" data-name="Group 13308"
                                           transform="translate(189.106 97.432)">
                                            <path id="Path_6943" data-name="Path 6943"
                                                  d="M112.292,71.157a5.6,5.6,0,0,0,4.766,2.553,3.413,3.413,0,0,0,3.574-3.234c0-3.234-3.745-3.574-6.3-5.106-1.362-.851-2.383-1.872-2.383-3.574a4.66,4.66,0,0,1,4.936-4.6,6.338,6.338,0,0,1,4.426,1.7l-1.021,1.021a5.061,5.061,0,0,0-3.4-1.362c-1.872,0-3.574,1.191-3.574,3.064,0,2.723,3.574,3.064,5.957,4.6a5.084,5.084,0,0,1,2.723,4.255,4.843,4.843,0,0,1-5.106,4.766,7.175,7.175,0,0,1-5.787-2.894Z"
                                                  transform="translate(-111.1 -57.2)" fill="#f2eee8"/>
                                        </g>
                                        <g id="Group_13309" data-name="Group 13309" transform="translate(65.191 -0.1)">
                                            <path id="Path_6944" data-name="Path 6944"
                                                  d="M88.343,20.836a15.574,15.574,0,0,0,.17-2.894A18.554,18.554,0,0,0,81.364,3.3C78.13.921,74.385-.1,69.109-.1H58.9V18.623A18.759,18.759,0,0,0,41.7,25.6c-2.383,3.234-3.4,6.979-3.4,12.255V48.07H57.023a25.583,25.583,0,0,0-.34,3.4,18.554,18.554,0,0,0,7.149,14.638c3.234,2.383,6.979,3.4,12.255,3.4H86.3V50.283a25.58,25.58,0,0,0,3.4.34,18.554,18.554,0,0,0,14.638-7.149c2.383-3.234,3.4-6.979,3.4-12.255V21.006h-19.4ZM73.7,33.943a15.574,15.574,0,0,1-.17-2.894v-8.34h12.6a16.652,16.652,0,0,1-5.787,8.511A13.087,13.087,0,0,1,73.7,33.943ZM61.619,2.623h7.489c4.766,0,8.17.851,10.894,3.064A15.32,15.32,0,0,1,86.13,18.113a20.954,20.954,0,0,1-.34,3.4v.17H72.853v9.191a15.382,15.382,0,0,0-2.213-4.426,17.124,17.124,0,0,0-8.851-6.128V2.623ZM72.683,38.368v8.17H59.236a15.562,15.562,0,0,1,5.617-7.83,14.784,14.784,0,0,1,7.66-2.894A11.271,11.271,0,0,1,72.683,38.368ZM60.768,21.006a15.358,15.358,0,0,1,8.851,5.957,16.93,16.93,0,0,1,2.894,7.319,21.7,21.7,0,0,1-3.4.17h-8.34ZM41.023,45.687V38.2c0-4.766.851-8.17,3.064-10.894a15.41,15.41,0,0,1,12.6-6.128,23.259,23.259,0,0,1,3.234.34h.17V35.134H70.64a13.933,13.933,0,0,0-5.787,2.553,17.859,17.859,0,0,0-5.787,7.83H41.023ZM83.747,67.3H76.257c-4.766,0-8.17-.851-10.894-3.064a15.32,15.32,0,0,1-6.128-12.426,16.787,16.787,0,0,1,.511-4.085v-.17H73.364V38.368a19.159,19.159,0,0,0,2.213,4.6,17.859,17.859,0,0,0,7.83,5.787V67.3ZM84.6,47.9A15.243,15.243,0,0,1,74.045,35.645c.681,0,1.532-.17,2.383-.17H84.6V47.9Zm20.766-16.851c0,4.766-.851,8.17-3.064,10.894A15.32,15.32,0,0,1,89.874,48.07a16.787,16.787,0,0,1-4.085-.511h-.17V34.794H75.066a13.933,13.933,0,0,0,5.787-2.553,15.975,15.975,0,0,0,5.957-8.511h18.383v7.319Z"
                                                  transform="translate(-38.3 0.1)" fill="#f2eee8"/>
                                        </g>
                                        <g id="Group_13310" data-name="Group 13310" transform="translate(60.255 127.9)">
                                            <path id="Path_6945" data-name="Path 6945"
                                                  d="M40,79.015a2.64,2.64,0,0,1,1.532,2.553,2.819,2.819,0,0,1-.851,2.043,2.713,2.713,0,0,1-2.043.681H35.4V75.1h3.064a1.792,1.792,0,0,1,1.7.681,1.848,1.848,0,0,1,.681,1.532,2.1,2.1,0,0,1-.851,1.7Zm-1.7-.17a1.675,1.675,0,0,0,1.362-.511,1.7,1.7,0,0,0,0-2.043,1.675,1.675,0,0,0-1.362-.511H36.081v2.894h2.213Zm-2.043.681V83.44h2.383a2.259,2.259,0,0,0,1.7-.511,2.1,2.1,0,0,0,.681-1.362,1.548,1.548,0,0,0-.681-1.362,2.259,2.259,0,0,0-1.7-.511H36.251Z"
                                                  transform="translate(-35.4 -75.1)" fill="#f2eee8"/>
                                        </g>
                                        <g id="Group_13311" data-name="Group 13311" transform="translate(67.915 127.9)">
                                            <path id="Path_6946" data-name="Path 6946"
                                                  d="M43.815,79.866v4.255h-.851V79.866L39.9,75.1h.851L43.3,79.185,46.028,75.1h.851Z"
                                                  transform="translate(-39.9 -75.1)" fill="#f2eee8"/>
                                        </g>
                                        <g id="Group_13312" data-name="Group 13312"
                                           transform="translate(81.021 127.73)">
                                            <path id="Path_6947" data-name="Path 6947"
                                                  d="M48.451,82.319a2.866,2.866,0,0,0,2.383,1.362,1.856,1.856,0,0,0,1.872-1.7c0-1.7-1.872-1.872-3.234-2.723a2.093,2.093,0,0,1-1.191-1.872A2.473,2.473,0,0,1,50.834,75a3.9,3.9,0,0,1,2.383.851l-.511.511a2.325,2.325,0,0,0-1.872-.681,1.733,1.733,0,0,0-1.872,1.532c0,1.362,1.872,1.532,3.064,2.383a2.813,2.813,0,0,1,1.362,2.213,2.524,2.524,0,0,1-2.723,2.383A3.866,3.866,0,0,1,47.6,82.66Z"
                                                  transform="translate(-47.6 -75)" fill="#f2eee8"/>
                                        </g>
                                        <g id="Group_13313" data-name="Group 13313" transform="translate(88.851 127.9)">
                                            <path id="Path_6948" data-name="Path 6948"
                                                  d="M56.8,75.1l3.915,9.191H59.86l-1.191-2.723H54.243l-1.191,2.723H52.2L56.115,75.1Zm-2.043,5.617H58.5l-1.872-4.426Z"
                                                  transform="translate(-52.2 -75.1)" fill="#f2eee8"/>
                                        </g>
                                        <g id="Group_13314" data-name="Group 13314" transform="translate(99.915 127.9)">
                                            <path id="Path_6949" data-name="Path 6949"
                                                  d="M58.7,75.1h.681l5.957,7.489V75.1h.851v9.021h-.511l-6.128-7.489v7.489H58.7Z"
                                                  transform="translate(-58.7 -75.1)" fill="#f2eee8"/>
                                        </g>
                                        <g id="Group_13315" data-name="Group 13315"
                                           transform="translate(111.149 127.9)">
                                            <path id="Path_6950" data-name="Path 6950"
                                                  d="M69.726,82.419h-.511l-3.234-5.447v7.149H65.3V75.1h.511l3.745,6.3,3.574-6.3h.681v9.021H72.96V76.972Z"
                                                  transform="translate(-65.3 -75.1)" fill="#f2eee8"/>
                                        </g>
                                        <g id="Group_13316" data-name="Group 13316"
                                           transform="translate(122.043 127.9)">
                                            <path id="Path_6951" data-name="Path 6951"
                                                  d="M76.3,75.1l3.915,9.191H79.36l-1.191-2.723H73.743l-1.191,2.723H71.7L75.615,75.1Zm-2.213,5.617h3.745l-1.872-4.426Z"
                                                  transform="translate(-71.7 -75.1)" fill="#f2eee8"/>
                                        </g>
                                        <g id="Group_13317" data-name="Group 13317"
                                           transform="translate(132.936 127.73)">
                                            <path id="Path_6952" data-name="Path 6952"
                                                  d="M84.057,84.191l-3.574-4.6H78.951v4.6H78.1V75h3.234a2.259,2.259,0,0,1,1.7.511,1.974,1.974,0,0,1,.681,1.7,3.024,3.024,0,0,1-.681,1.7,2.259,2.259,0,0,1-1.7.511l3.574,4.6h-.851Zm-2.723-5.277a1.628,1.628,0,0,0,1.191-.34,1.471,1.471,0,0,0,.511-1.021,1.029,1.029,0,0,0-.511-1.021,2.46,2.46,0,0,0-1.191-.34H79.121v2.894h2.213Z"
                                                  transform="translate(-78.1 -75)" fill="#f2eee8"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="main-menu__items__img">
                                <li className={'active'}><Img src={menuImg}/></li>
                                <li><Img src={menu2}/></li>
                                <li><Img src={menuImg}/></li>
                                <li><Img src={menu2}/></li>
                                <li><Img src={menuImg}/></li>
                                <li><Img src={menuImg}/></li>
                                <li><Img src={menu2}/></li>
                                <li><Img src={menuImg}/></li>
                                <li><Img src={menu2}/></li>
                                <li><Img src={menuImg}/></li>
                                <li><Img src={menu2}/></li>
                                <li><Img src={menuImg}/></li>
                            </div>
                        </Col>

                        {/*menu items right*/}
                        <Col sm={7} className={'p-0'}>
                            <div className="main-menu__items__list d-flex">
                                <div className="menu-close hover">
                                    <svg width="28.284" height="28.284"
                                         viewBox="0 0 28.284 28.284">
                                        <g id="Group_17897" data-name="Group 17897"
                                           transform="translate(-1213.858 -55.858)">
                                            <line id="Line_3546" data-name="Line 3546" x1="36"
                                                  transform="translate(1215.272 57.272) rotate(45)" fill="none"
                                                  stroke="#34342e"
                                                  stroke-linecap="round" stroke-width="2"/>
                                            <line id="Line_3556" data-name="Line 3556" x1="36"
                                                  transform="translate(1240.728 57.272) rotate(135)" fill="none"
                                                  stroke="#34342e" stroke-linecap="round" stroke-width="2"/>
                                        </g>
                                    </svg>

                                </div>
                                <Col className={'menu-col'} sm={{span: 5, offset: 1}}>
                                    <ul>
                                        <li><Link href="/"><a>Home</a></Link></li>
                                        <li><Link href="/about"><a>About</a></Link></li>
                                        <li><Link href="/quintess"><a>Quintess</a></Link></li>
                                        <li><Link href="/why-invest"><a>Why Invest</a></Link></li>
                                        <li><Link href="/gallery"><a>Gallery</a></Link></li>
                                        <li><Link href="/contact"><a>Contact</a></Link></li>
                                    </ul>
                                </Col>
                                <Col className={'menu-col'} sm={5}>
                                    <ul>
                                        <li><Link href="/project"><a>Residences</a></Link></li>
                                        <li><Link href="/project/sanmar-kensington"><a>Sanmar Kensington</a></Link></li>
                                        <li><Link href="/project/sanmar-knightsbridge"><a>Sanmar
                                            Knightsbridge</a></Link></li>
                                        <li><Link href="/project/sanmar-belgravia"><a>Sanmar Belgravia</a></Link></li>
                                        <li><Link href="/project/sanmar-cavendish"><a>Sanmar Cavendish</a></Link></li>
                                        <li><Link href="/penthouse"><a>The Penthouses</a></Link></li>
                                    </ul>
                                </Col>

                                <div className="main-menu__items__list__bottom">
                                    <div className="video">
                                        <p onClick={() => handelOpen(true, `U6415y-Hsko`)}><span className={'hover'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 9 11">
  <path id="Polygon_7" data-name="Polygon 7" d="M5.5,0,11,9H0Z" transform="translate(9) rotate(90)" fill="#736640"/>
</svg>

                                </span>Watch Project Video
                                        </p>
                                    </div>

                                    <div className="social">
                                        <ul>
                                            <li><a className={'hover'} href="javascript:void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="11.554" height="21.572"
                                                     viewBox="0 0 11.554 21.572">
                                                    <path id="Path_2112" data-name="Path 2112"
                                                          d="M1209.584,108.233l.6-3.9h-3.746V101.8a1.952,1.952,0,0,1,2.2-2.109h1.7V96.363a20.768,20.768,0,0,0-3.023-.264c-3.085,0-5.1,1.87-5.1,5.255v2.975h-3.429v3.9h3.429v9.437h4.22v-9.437Z"
                                                          transform="translate(-1198.787 -96.099)" fill="#f2eee8"/>
                                                </svg>

                                            </a></li>
                                            <li><a className={'hover'} href="javascript:void(0)">
                                                <svg width="19.597" height="19.691"
                                                     viewBox="0 0 19.597 19.691">
                                                    <g id="Group_17898" data-name="Group 17898"
                                                       transform="translate(-9142.753 -983)">
                                                        <path id="Path_6990" data-name="Path 6990"
                                                              d="M90.926,103.334a9.748,9.748,0,0,0,4.663,1.188h0a9.757,9.757,0,1,0-8.455-4.887l-1.384,5.056ZM95.6,86.648a8.113,8.113,0,0,1,0,16.226h0a8.1,8.1,0,0,1-4.128-1.13l-.3-.176-3.069.805.819-2.993-.193-.307A8.114,8.114,0,0,1,95.6,86.648Z"
                                                              transform="translate(9057 898)" fill="#f2eee8"/>
                                                        <path id="Path_6991" data-name="Path 6991"
                                                              d="M169,177.541a14,14,0,0,0,1.39.514,3.342,3.342,0,0,0,1.536.1,2.511,2.511,0,0,0,1.646-1.159,2.039,2.039,0,0,0,.142-1.159c-.061-.1-.223-.163-.467-.285s-1.442-.712-1.666-.793-.386-.122-.549.122-.63.793-.772.956-.284.183-.528.061a6.658,6.658,0,0,1-1.961-1.21,7.348,7.348,0,0,1-1.356-1.689c-.142-.244-.015-.376.107-.5s.244-.285.366-.427a1.665,1.665,0,0,0,.244-.407.449.449,0,0,0-.02-.427c-.061-.122-.549-1.322-.752-1.81s-.4-.411-.549-.419-.3-.009-.467-.009a.9.9,0,0,0-.65.305,2.734,2.734,0,0,0-.853,2.034,4.742,4.742,0,0,0,1,2.522A10.867,10.867,0,0,0,169,177.541Z"
                                                              transform="translate(8983.79 819.252)" fill="#f2eee8"/>
                                                    </g>
                                                </svg>

                                            </a></li>

                                            <li><a className={'hover'} href="javascript:void(0)">
                                                <svg width="22" height="21.028"
                                                     viewBox="0 0 22 21.028">
                                                    <g id="Group_15872" data-name="Group 15872"
                                                       transform="translate(14538 -1638)">
                                                        <path id="Path_6996" data-name="Path 6996"
                                                              d="M2.668-.668a2.458,2.458,0,1,0-.062,4.9h.031a2.459,2.459,0,1,0,.031-4.9Zm0,0"
                                                              transform="translate(-14538 1638.668)" fill="#f2eee8"/>
                                                        <path id="Path_6997" data-name="Path 6997"
                                                              d="M8.109,198.313h4.716V212.5H8.109Zm0,0"
                                                              transform="translate(-14545.831 1446.527)"
                                                              fill="#f2eee8"/>
                                                        <path id="Path_6998" data-name="Path 6998"
                                                              d="M230.181,188.625c-2.544,0-4.25,2.391-4.25,2.391v-2.058h-4.716v14.189h4.716v-7.923a3.232,3.232,0,0,1,.155-1.151,2.582,2.582,0,0,1,2.42-1.725c1.707,0,2.389,1.3,2.389,3.209v7.59h4.716v-8.135c0-4.358-2.327-6.386-5.429-6.386Zm0,0"
                                                              transform="translate(-14751.61 1455.882)" fill="#f2eee8"/>
                                                    </g>
                                                </svg>
                                            </a></li>

                                            <li><a className={'hover'} href="javascript:void(0)">
                                                <svg id="Group_17899" data-name="Group 17899" width="20.805"
                                                     height="20.804"
                                                     viewBox="0 0 20.805 20.804">
                                                    <path id="Path_2109" data-name="Path 2109"
                                                          d="M1096.136,105.945a1.22,1.22,0,1,0,1.219,1.22A1.22,1.22,0,0,0,1096.136,105.945Z"
                                                          transform="translate(-1080.225 -102.231)" fill="#f2eee8"/>
                                                    <path id="Path_2110" data-name="Path 2110"
                                                          d="M1084.178,108.605a5.123,5.123,0,1,0,5.124,5.124A5.129,5.129,0,0,0,1084.178,108.605Zm0,8.405a3.282,3.282,0,1,1,3.282-3.282A3.285,3.285,0,0,1,1084.178,117.01Z"
                                                          transform="translate(-1073.691 -103.327)" fill="#f2eee8"/>
                                                    <path id="Path_2111" data-name="Path 2111"
                                                          d="M1084.487,120.432h-8.306a6.257,6.257,0,0,1-6.249-6.249v-8.307a6.256,6.256,0,0,1,6.249-6.249h8.306a6.256,6.256,0,0,1,6.249,6.249v8.307A6.256,6.256,0,0,1,1084.487,120.432Zm-8.306-18.847a4.3,4.3,0,0,0-4.292,4.291v8.307a4.3,4.3,0,0,0,4.292,4.292h8.306a4.3,4.3,0,0,0,4.292-4.292v-8.307a4.3,4.3,0,0,0-4.292-4.291Z"
                                                          transform="translate(-1069.932 -99.628)" fill="#f2eee8"/>
                                                </svg>
                                            </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </div>

                </div>
            </StyledMenu>

            {/*mobile menu*/}
            <StyledMobileMenu className='main-menu-mobile '>


                <div className="main-menu-mobile__bar">
                    <div className="main-menu-mobile__bar__logo">
                        <Link href={'/'}><a><img alt='duncan hills' src={Logo}/></a></Link>
                    </div>

                    <div className="main-menu-mobile__bar__hamburger d-flex justify-content-end">
                        <svg id='open-click' width="52" height="22" viewBox="0 0 52 22">
                            <g id="Hamburger" transform="translate(-307 -39)">
                                <line id="Line_3541" data-name="Line 3541" x2="25" transform="translate(333 60)"
                                      fill="none" stroke="#736640" stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_3501" data-name="Line 3501" x2="50" transform="translate(308 50)"
                                      fill="none" stroke="#736640" stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_3493" data-name="Line 3493" x2="35" transform="translate(323 40)"
                                      fill="none" stroke="#736640" stroke-linecap="round" stroke-width="2"/>
                            </g>
                        </svg>

                    </div>
                </div>

                <div className="main-menu-mobile__items">

                    <div className="shadow-bottom">
                        <svg width="134.994" height="199.318" viewBox="0 0 134.994 199.318">
                            <g id="Group_17864" data-name="Group 17864" transform="translate(-3792.66 -1115.625)">
                                <path id="Path_6959" data-name="Path 6959"
                                      d="M135.575,40.6a30.273,30.273,0,0,0,.331-5.625,36.066,36.066,0,0,0-13.9-28.455C115.723,1.885,108.444-.1,98.187-.1H78.335V36.3A36.465,36.465,0,0,0,44.917,49.861C40.285,56.147,38.3,63.426,38.3,73.683V93.535H74.7a49.73,49.73,0,0,0-.662,6.617,36.066,36.066,0,0,0,13.9,28.455c6.287,4.632,13.566,6.617,23.822,6.617H131.6V97.837a49.724,49.724,0,0,0,6.617.662,36.066,36.066,0,0,0,28.454-13.9c4.632-6.286,6.617-13.566,6.617-23.822V40.927H135.575ZM107.12,66.073a30.276,30.276,0,0,1-.331-5.625V44.236h24.484a32.368,32.368,0,0,1-11.249,16.543A25.439,25.439,0,0,1,107.12,66.073ZM83.629,5.194H98.187c9.264,0,15.882,1.654,21.175,5.956A29.781,29.781,0,0,1,131.274,35.3a40.732,40.732,0,0,1-.662,6.617v.331H105.466V60.118a29.9,29.9,0,0,0-4.3-8.6A33.286,33.286,0,0,0,83.96,39.6V5.194Zm21.506,69.482V90.557H79a30.25,30.25,0,0,1,10.919-15.22A28.737,28.737,0,0,1,104.8,69.713,21.911,21.911,0,0,1,105.135,74.676ZM81.974,40.927a29.853,29.853,0,0,1,17.205,11.58A32.909,32.909,0,0,1,104.8,66.735a42.186,42.186,0,0,1-6.617.331H81.974ZM43.594,88.9V74.345c0-9.264,1.654-15.882,5.956-21.175A29.954,29.954,0,0,1,74.034,41.258a45.213,45.213,0,0,1,6.286.662h.331V68.389h20.514a27.084,27.084,0,0,0-11.249,4.963,34.716,34.716,0,0,0-11.249,15.22H43.594Zm83.048,42.02H112.083c-9.264,0-15.882-1.654-21.175-5.956A29.781,29.781,0,0,1,79,100.814a32.631,32.631,0,0,1,.993-7.941v-.331h26.469V74.676a37.244,37.244,0,0,0,4.3,8.933,34.716,34.716,0,0,0,15.22,11.249v36.064ZM128.3,93.2a29.631,29.631,0,0,1-20.514-23.822c1.323,0,2.978-.331,4.632-.331H128.3V93.2Zm40.366-32.756c0,9.264-1.654,15.882-5.956,21.175a29.781,29.781,0,0,1-24.153,11.911,32.631,32.631,0,0,1-7.941-.993h-.331V67.728H109.767a27.083,27.083,0,0,0,11.249-4.963A31.053,31.053,0,0,0,132.6,46.221h35.734V60.449Z"
                                      transform="translate(3754.36 1115.725)" fill="#8f6d4f" opacity="0.2"/>
                                <path id="Path_6960" data-name="Path 6960"
                                      d="M74.283,14.954a11.2,11.2,0,0,0,.122-2.081,13.341,13.341,0,0,0-5.14-10.526C66.939.634,64.247-.1,60.453-.1H53.109V13.363a13.489,13.489,0,0,0-12.361,5.018C39.034,20.706,38.3,23.4,38.3,27.193v7.343H51.763a18.4,18.4,0,0,0-.245,2.448,13.341,13.341,0,0,0,5.14,10.526c2.325,1.713,5.018,2.448,8.812,2.448h7.343V36.127a18.393,18.393,0,0,0,2.448.245,13.341,13.341,0,0,0,10.525-5.14c1.713-2.325,2.448-5.018,2.448-8.812V15.076H74.283ZM63.757,24.378a11.2,11.2,0,0,1-.122-2.081v-6h9.057A11.973,11.973,0,0,1,68.53,22.42,9.41,9.41,0,0,1,63.757,24.378Zm-8.69-22.52h5.385c3.427,0,5.875.612,7.833,2.2A11.016,11.016,0,0,1,72.692,13a15.067,15.067,0,0,1-.245,2.448v.122h-9.3v6.609a11.06,11.06,0,0,0-1.591-3.182,12.313,12.313,0,0,0-6.364-4.406V1.858Zm7.955,25.7v5.875H53.354a11.19,11.19,0,0,1,4.039-5.63A10.63,10.63,0,0,1,62.9,25.724,8.1,8.1,0,0,1,63.023,27.56ZM54.455,15.076A11.043,11.043,0,0,1,60.82,19.36,12.173,12.173,0,0,1,62.9,24.623a15.6,15.6,0,0,1-2.448.122h-6Zm-14.2,17.747V27.438c0-3.427.612-5.875,2.2-7.833A11.08,11.08,0,0,1,51.518,15.2a16.724,16.724,0,0,1,2.325.245h.122v9.791h7.588a10.019,10.019,0,0,0-4.161,1.836,12.842,12.842,0,0,0-4.161,5.63H40.258Zm30.72,15.543H65.593c-3.427,0-5.875-.612-7.833-2.2a11.016,11.016,0,0,1-4.406-8.934,12.071,12.071,0,0,1,.367-2.937v-.122h9.791V27.56a13.777,13.777,0,0,0,1.591,3.3,12.842,12.842,0,0,0,5.63,4.161v13.34Zm.612-13.952A10.961,10.961,0,0,1,64,25.6c.49,0,1.1-.122,1.713-.122H71.59v8.934ZM86.522,22.3c0,3.427-.612,5.875-2.2,7.833a11.016,11.016,0,0,1-8.934,4.406,12.071,12.071,0,0,1-2.937-.367h-.122V24.99H64.736A10.018,10.018,0,0,0,68.9,23.154a11.487,11.487,0,0,0,4.284-6.119H86.4V22.3Z"
                                      transform="translate(3827.426 1264.986)" fill="#8f6d4f" opacity="0.2"/>
                            </g>
                        </svg>

                    </div>

                    <div className="main-menu-mobile__items__head">
                        <Link href={'/'}><a href="">
                            <svg width="185.063" height="35" viewBox="0 0 185.063 35">
                                <g id="Group_17805" data-name="Group 17805" transform="translate(-15 -1002)">
                                    <g id="Group_17804" data-name="Group 17804" transform="translate(64 1005.952)">
                                        <g id="Group_17802" data-name="Group 17802">
                                            <g id="Group_13298" data-name="Group 13298" transform="translate(0 0.232)">
                                                <path id="Path_6934" data-name="Path 6934"
                                                      d="M7.527,67.953a6.5,6.5,0,0,1-4.053,1.158H0V57.3H3.358a5.843,5.843,0,0,1,6.369,6.022,5.453,5.453,0,0,1-2.2,4.632Zm-.579-8.685a5.314,5.314,0,0,0-3.59-1.042H1.042v9.959H3.358a5.314,5.314,0,0,0,3.59-1.042A4.947,4.947,0,0,0,8.8,63.206a4.785,4.785,0,0,0-1.853-3.937Z"
                                                      transform="translate(0 -57.3)" fill="#8f6d4f"/>
                                            </g>
                                            <g id="Group_13299" data-name="Group 13299"
                                               transform="translate(13.433 0.232)">
                                                <path id="Path_6935" data-name="Path 6935"
                                                      d="M12.295,67.143a4.688,4.688,0,0,1-.695-2.779V57.3h1.042v7.18a3.825,3.825,0,1,0,7.643,0V57.3h1.042v7.064a4.687,4.687,0,0,1-.695,2.779,4.828,4.828,0,0,1-4.053,2.2,5.225,5.225,0,0,1-4.285-2.2Z"
                                                      transform="translate(-11.6 -57.3)" fill="#8f6d4f"/>
                                            </g>
                                            <g id="Group_13300" data-name="Group 13300"
                                               transform="translate(27.56 0.232)">
                                                <path id="Path_6936" data-name="Path 6936"
                                                      d="M23.8,57.3h.695l7.874,9.843V57.3h1.042V69.111h-.695l-7.874-9.843v9.843H23.8Z"
                                                      transform="translate(-23.8 -57.3)" fill="#8f6d4f"/>
                                            </g>
                                            <g id="Group_13301" data-name="Group 13301" transform="translate(40.993)">
                                                <path id="Path_6937" data-name="Path 6937"
                                                      d="M46.053,67.174a6.075,6.075,0,0,1-4.516,2.2A6.14,6.14,0,0,1,41.306,57.1a5.673,5.673,0,0,1,4.285,1.853l-.695.695a4.7,4.7,0,0,0-3.59-1.505,4.968,4.968,0,0,0-4.979,5.1,4.9,4.9,0,0,0,4.979,5.1,5.322,5.322,0,0,0,3.937-1.853Z"
                                                      transform="translate(-35.4 -57.1)" fill="#8f6d4f"/>
                                            </g>
                                            <g id="Group_13302" data-name="Group 13302"
                                               transform="translate(54.078 0.232)">
                                                <path id="Path_6938" data-name="Path 6938"
                                                      d="M52.49,57.3l5.1,11.811H56.543l-1.505-3.59h-5.79l-1.505,3.59H46.7L51.8,57.3Zm-2.779,7.3H54.69l-2.432-5.674Z"
                                                      transform="translate(-46.7 -57.3)" fill="#8f6d4f"/>
                                            </g>
                                            <g id="Group_13303" data-name="Group 13303"
                                               transform="translate(68.322 0.232)">
                                                <path id="Path_6939" data-name="Path 6939"
                                                      d="M59,57.3h.695l7.99,9.843V57.3h1.042V69.111h-.695l-7.99-9.843v9.843H59Z"
                                                      transform="translate(-59 -57.3)" fill="#8f6d4f"/>
                                            </g>
                                            <g id="Group_13304" data-name="Group 13304"
                                               transform="translate(89.049 0.232)">
                                                <path id="Path_6940" data-name="Path 6940"
                                                      d="M85.469,63.09H77.826v6.022H76.9V57.3h.926v4.748h7.643V57.3h1.042V69.111H85.469Z"
                                                      transform="translate(-76.9 -57.3)" fill="#8f6d4f"/>
                                            </g>
                                            <g id="Group_13305" data-name="Group 13305"
                                               transform="translate(103.408 0.232)">
                                                <rect id="Rectangle_4473" data-name="Rectangle 4473" width="1.042"
                                                      height="11.811" fill="#8f6d4f"/>
                                            </g>
                                            <g id="Group_13306" data-name="Group 13306"
                                               transform="translate(109.198 0.232)">
                                                <path id="Path_6941" data-name="Path 6941"
                                                      d="M95.342,68.185H100.9v.926H94.3V57.3h1.042Z"
                                                      transform="translate(-94.3 -57.3)" fill="#8f6d4f"/>
                                            </g>
                                            <g id="Group_13307" data-name="Group 13307"
                                               transform="translate(119.389 0.232)">
                                                <path id="Path_6942" data-name="Path 6942"
                                                      d="M104.026,68.185H109.7v.926h-6.6V57.3h.926Z"
                                                      transform="translate(-103.1 -57.3)" fill="#8f6d4f"/>
                                            </g>
                                            <g id="Group_13308" data-name="Group 13308"
                                               transform="translate(128.652 0.116)">
                                                <path id="Path_6943" data-name="Path 6943"
                                                      d="M111.911,66.7a3.813,3.813,0,0,0,3.242,1.737,2.322,2.322,0,0,0,2.432-2.2c0-2.2-2.548-2.432-4.285-3.474a2.812,2.812,0,0,1-1.621-2.432,3.17,3.17,0,0,1,3.358-3.127,4.312,4.312,0,0,1,3.011,1.158l-.695.695a3.443,3.443,0,0,0-2.316-.926,2.239,2.239,0,0,0-2.432,2.084c0,1.853,2.432,2.084,4.053,3.127a3.459,3.459,0,0,1,1.853,2.895,3.3,3.3,0,0,1-3.474,3.242,4.881,4.881,0,0,1-3.937-1.969Z"
                                                      transform="translate(-111.1 -57.2)" fill="#8f6d4f"/>
                                            </g>
                                        </g>
                                        <g id="Group_17803" data-name="Group 17803" transform="translate(0 20.728)">
                                            <g id="Group_13310" data-name="Group 13310" transform="translate(0 0.116)">
                                                <path id="Path_6945" data-name="Path 6945"
                                                      d="M38.527,77.763A1.8,1.8,0,0,1,39.569,79.5a1.918,1.918,0,0,1-.579,1.39,1.846,1.846,0,0,1-1.39.463H35.4V75.1h2.084a1.219,1.219,0,0,1,1.158.463,1.257,1.257,0,0,1,.463,1.042,1.425,1.425,0,0,1-.579,1.158Zm-1.158-.116a1.14,1.14,0,0,0,.926-.347,1.158,1.158,0,0,0,0-1.39,1.14,1.14,0,0,0-.926-.347H35.863v1.969h1.505Zm-1.39.463v2.663H37.6a1.537,1.537,0,0,0,1.158-.347,1.429,1.429,0,0,0,.463-.926,1.053,1.053,0,0,0-.463-.926,1.537,1.537,0,0,0-1.158-.347H35.979Z"
                                                      transform="translate(-35.4 -75.1)" fill="#8f6d4f"/>
                                            </g>
                                            <g id="Group_13311" data-name="Group 13311"
                                               transform="translate(5.211 0.116)">
                                                <path id="Path_6946" data-name="Path 6946"
                                                      d="M42.563,78.342v2.895h-.579V78.342L39.9,75.1h.579l1.737,2.779L44.069,75.1h.579Z"
                                                      transform="translate(-39.9 -75.1)" fill="#8f6d4f"/>
                                            </g>
                                            <g id="Group_13312" data-name="Group 13312" transform="translate(14.128)">
                                                <path id="Path_6947" data-name="Path 6947"
                                                      d="M48.179,79.979a1.95,1.95,0,0,0,1.621.926,1.262,1.262,0,0,0,1.274-1.158c0-1.158-1.274-1.274-2.2-1.853a1.424,1.424,0,0,1-.811-1.274A1.682,1.682,0,0,1,49.8,75a2.651,2.651,0,0,1,1.621.579l-.347.347a1.582,1.582,0,0,0-1.274-.463,1.179,1.179,0,0,0-1.274,1.042c0,.926,1.274,1.042,2.084,1.621a1.914,1.914,0,0,1,.926,1.505,1.717,1.717,0,0,1-1.853,1.621A2.63,2.63,0,0,1,47.6,80.211Z"
                                                      transform="translate(-47.6 -75)" fill="#8f6d4f"/>
                                            </g>
                                            <g id="Group_13313" data-name="Group 13313"
                                               transform="translate(19.454 0.116)">
                                                <path id="Path_6948" data-name="Path 6948"
                                                      d="M55.327,75.1l2.663,6.253h-.579L56.6,79.5H53.59l-.811,1.853H52.2L54.863,75.1Zm-1.39,3.821h2.548l-1.274-3.011Z"
                                                      transform="translate(-52.2 -75.1)" fill="#8f6d4f"/>
                                            </g>
                                            <g id="Group_13314" data-name="Group 13314"
                                               transform="translate(26.981 0.116)">
                                                <path id="Path_6949" data-name="Path 6949"
                                                      d="M58.7,75.1h.463l4.053,5.1V75.1H63.8v6.137h-.347l-4.169-5.1v5.1H58.7Z"
                                                      transform="translate(-58.7 -75.1)" fill="#8f6d4f"/>
                                            </g>
                                            <g id="Group_13315" data-name="Group 13315"
                                               transform="translate(34.624 0.116)">
                                                <path id="Path_6950" data-name="Path 6950"
                                                      d="M68.311,80.079h-.347l-2.2-3.706v4.864H65.3V75.1h.347l2.548,4.285L70.627,75.1h.463v6.137h-.579V76.374Z"
                                                      transform="translate(-65.3 -75.1)" fill="#8f6d4f"/>
                                            </g>
                                            <g id="Group_13316" data-name="Group 13316"
                                               transform="translate(42.035 0.116)">
                                                <path id="Path_6951" data-name="Path 6951"
                                                      d="M74.827,75.1l2.663,6.253h-.579L76.1,79.5H73.09l-.811,1.853H71.7L74.363,75.1Zm-1.505,3.821h2.548l-1.274-3.011Z"
                                                      transform="translate(-71.7 -75.1)" fill="#8f6d4f"/>
                                            </g>
                                            <g id="Group_13317" data-name="Group 13317" transform="translate(49.447)">
                                                <path id="Path_6952" data-name="Path 6952"
                                                      d="M82.153,81.253l-2.432-3.127H78.679v3.127H78.1V75h2.2a1.537,1.537,0,0,1,1.158.347,1.343,1.343,0,0,1,.463,1.158,2.057,2.057,0,0,1-.463,1.158,1.537,1.537,0,0,1-1.158.347l2.432,3.127h-.579ZM80.3,77.663a1.107,1.107,0,0,0,.811-.232,1,1,0,0,0,.347-.695.7.7,0,0,0-.347-.695,1.674,1.674,0,0,0-.811-.232H78.795v1.969H80.3Z"
                                                      transform="translate(-78.1 -75)" fill="#8f6d4f"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g id="Group_13309" data-name="Group 13309" transform="translate(15 1002)">
                                        <path id="Path_6944" data-name="Path 6944"
                                              d="M63.459,10.426a7.827,7.827,0,0,0,.086-1.455A9.328,9.328,0,0,0,59.95,1.611,9.75,9.75,0,0,0,53.789-.1H48.655V9.313a9.431,9.431,0,0,0-8.643,3.509A9.75,9.75,0,0,0,38.3,18.983v5.134h9.413a12.859,12.859,0,0,0-.171,1.711,9.328,9.328,0,0,0,3.594,7.359A9.75,9.75,0,0,0,57.3,34.9h5.134V25.23a12.861,12.861,0,0,0,1.711.171A9.328,9.328,0,0,0,71.5,21.807a9.75,9.75,0,0,0,1.711-6.161V10.511H63.459ZM56.1,17.015a7.831,7.831,0,0,1-.086-1.455V11.367h6.333a8.372,8.372,0,0,1-2.91,4.279A6.58,6.58,0,0,1,56.1,17.015ZM50.024,1.269h3.765a8.19,8.19,0,0,1,5.477,1.54,7.7,7.7,0,0,1,3.081,6.247,10.532,10.532,0,0,1-.171,1.711v.086h-6.5v4.621a7.732,7.732,0,0,0-1.112-2.225,8.609,8.609,0,0,0-4.45-3.081v-8.9ZM55.586,19.24v4.108h-6.76a7.824,7.824,0,0,1,2.824-3.936A7.432,7.432,0,0,1,55.5,17.956,5.667,5.667,0,0,1,55.586,19.24ZM49.6,10.511a7.721,7.721,0,0,1,4.45,3,8.511,8.511,0,0,1,1.455,3.68,10.911,10.911,0,0,1-1.711.086H49.6ZM39.669,22.92V19.154a8.19,8.19,0,0,1,1.54-5.477A7.747,7.747,0,0,1,47.542,10.6a11.694,11.694,0,0,1,1.626.171h.086v6.846h5.306A7,7,0,0,0,51.65,18.9a8.979,8.979,0,0,0-2.91,3.936H39.669ZM61.148,33.788H57.383a8.19,8.19,0,0,1-5.477-1.54A7.7,7.7,0,0,1,48.826,26a8.44,8.44,0,0,1,.257-2.054v-.086h6.846V19.24a9.632,9.632,0,0,0,1.112,2.311,8.979,8.979,0,0,0,3.936,2.91v9.328Zm.428-9.755a7.664,7.664,0,0,1-5.306-6.161c.342,0,.77-.086,1.2-.086h4.108v6.247Zm10.44-8.472a8.19,8.19,0,0,1-1.54,5.477,7.7,7.7,0,0,1-6.247,3.081,8.44,8.44,0,0,1-2.054-.257H62.09V17.443H56.784a7,7,0,0,0,2.91-1.284,8.032,8.032,0,0,0,3-4.279h9.242v3.68Z"
                                              transform="translate(-38.3 0.1)" fill="#8f6d4f"/>
                                    </g>
                                </g>
                            </svg>
                        </a></Link>

                        <svg className={'sub-menu-back'} xmlns="http://www.w3.org/2000/svg" width="11.328"
                             height="20.504"
                             viewBox="0 0 11.328 20.504">
                            <g id="Group_17860" data-name="Group 17860" transform="translate(-350.086 -29.749)">
                                <line id="Line_3541" data-name="Line 3541" x2="8.5" y2="8.339"
                                      transform="translate(351.5 40.5)" fill="none" stroke="#736640"
                                      stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_3961" data-name="Line 3961" x1="8.5" y2="9.339"
                                      transform="translate(351.5 31.161)" fill="none" stroke="#736640"
                                      stroke-linecap="round" stroke-width="2"/>
                            </g>
                        </svg>

                        <svg id={'close-click'} width="20.506" height="20.506" viewBox="0 0 20.506 20.506">
                            <g id="Hamburger" transform="translate(-340.908 -1006.747)">
                                <line id="Line_3541" data-name="Line 3541" x2="25"
                                      transform="translate(342.322 1008.161) rotate(45)" fill="none" stroke="#736640"
                                      stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_3961" data-name="Line 3961" x2="25"
                                      transform="translate(360 1008.161) rotate(135)" fill="none" stroke="#736640"
                                      stroke-linecap="round" stroke-width="2"/>
                            </g>
                        </svg>


                    </div>

                    <ul className={'menu-list'}>
                        <li className='main-item'>contact
                            <ul>
                                <li><Link href={'/contact'}><a>Contact Page</a></Link></li>
                                <li><a href="tel:09612666888"><span>Call</span>09 612 666 888</a></li>
                                <li><a href="mailto:info@duncanhills.com"><span>Email</span>info@duncanhills.com</a>
                                </li>
                            </ul>
                        </li>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/about"><a>About</a></Link></li>
                        <li><Link href="/quintess"><a>Quintess</a></Link></li>
                        <li><Link href="/"><a>Investors</a></Link></li>
                        <li><Link href="/gallery"><a>Gallery</a></Link></li>
                        <li><Link href="/contact"><a>Contact Us</a></Link></li>
                        <li><Link href="/project"><a>Residences</a></Link></li>
                        <li><Link href="/project"><a>Residences</a></Link></li>
                        <li><Link href="/project/sanmar-kensington"><a>Sanmar Kensington</a></Link></li>
                        <li><Link href="/project/sanmar-knightsbridge"><a>Sanmar
                            Knightsbridge</a></Link></li>
                        <li><Link href="/project/sanmar-belgravia"><a>Sanmar Belgravia</a></Link></li>
                        <li><Link href="/project/sanmar-cavendish"><a>Sanmar Cavendish</a></Link></li>
                        <li><Link href="/penthouse"><a>The Penthouses</a></Link></li>


                    </ul>

                    <div className="bottom">
                        <div className="video">
                            <p onClick={() => handelOpen(true, `U6415y-Hsko`)}><span className={'hover'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 9 11">
  <path id="Polygon_7" data-name="Polygon 7" d="M5.5,0,11,9H0Z" transform="translate(9) rotate(90)" fill="#736640"/>
</svg>

                                </span>Watch Project Video
                            </p>
                        </div>

                        <div className="social">
                            <ul>
                                <li><a className={'hover'} href="javascript:void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11.554" height="21.572"
                                         viewBox="0 0 11.554 21.572">
                                        <path id="Path_2112" data-name="Path 2112"
                                              d="M1209.584,108.233l.6-3.9h-3.746V101.8a1.952,1.952,0,0,1,2.2-2.109h1.7V96.363a20.768,20.768,0,0,0-3.023-.264c-3.085,0-5.1,1.87-5.1,5.255v2.975h-3.429v3.9h3.429v9.437h4.22v-9.437Z"
                                              transform="translate(-1198.787 -96.099)" fill="#f2eee8"/>
                                    </svg>

                                </a></li>
                                <li><a className={'hover'} href="javascript:void(0)">
                                    <svg width="19.597" height="19.691"
                                         viewBox="0 0 19.597 19.691">
                                        <g id="Group_17898" data-name="Group 17898"
                                           transform="translate(-9142.753 -983)">
                                            <path id="Path_6990" data-name="Path 6990"
                                                  d="M90.926,103.334a9.748,9.748,0,0,0,4.663,1.188h0a9.757,9.757,0,1,0-8.455-4.887l-1.384,5.056ZM95.6,86.648a8.113,8.113,0,0,1,0,16.226h0a8.1,8.1,0,0,1-4.128-1.13l-.3-.176-3.069.805.819-2.993-.193-.307A8.114,8.114,0,0,1,95.6,86.648Z"
                                                  transform="translate(9057 898)" fill="#f2eee8"/>
                                            <path id="Path_6991" data-name="Path 6991"
                                                  d="M169,177.541a14,14,0,0,0,1.39.514,3.342,3.342,0,0,0,1.536.1,2.511,2.511,0,0,0,1.646-1.159,2.039,2.039,0,0,0,.142-1.159c-.061-.1-.223-.163-.467-.285s-1.442-.712-1.666-.793-.386-.122-.549.122-.63.793-.772.956-.284.183-.528.061a6.658,6.658,0,0,1-1.961-1.21,7.348,7.348,0,0,1-1.356-1.689c-.142-.244-.015-.376.107-.5s.244-.285.366-.427a1.665,1.665,0,0,0,.244-.407.449.449,0,0,0-.02-.427c-.061-.122-.549-1.322-.752-1.81s-.4-.411-.549-.419-.3-.009-.467-.009a.9.9,0,0,0-.65.305,2.734,2.734,0,0,0-.853,2.034,4.742,4.742,0,0,0,1,2.522A10.867,10.867,0,0,0,169,177.541Z"
                                                  transform="translate(8983.79 819.252)" fill="#f2eee8"/>
                                        </g>
                                    </svg>

                                </a></li>

                                <li><a className={'hover'} href="javascript:void(0)">
                                    <svg width="22" height="21.028"
                                         viewBox="0 0 22 21.028">
                                        <g id="Group_15872" data-name="Group 15872"
                                           transform="translate(14538 -1638)">
                                            <path id="Path_6996" data-name="Path 6996"
                                                  d="M2.668-.668a2.458,2.458,0,1,0-.062,4.9h.031a2.459,2.459,0,1,0,.031-4.9Zm0,0"
                                                  transform="translate(-14538 1638.668)" fill="#f2eee8"/>
                                            <path id="Path_6997" data-name="Path 6997"
                                                  d="M8.109,198.313h4.716V212.5H8.109Zm0,0"
                                                  transform="translate(-14545.831 1446.527)"
                                                  fill="#f2eee8"/>
                                            <path id="Path_6998" data-name="Path 6998"
                                                  d="M230.181,188.625c-2.544,0-4.25,2.391-4.25,2.391v-2.058h-4.716v14.189h4.716v-7.923a3.232,3.232,0,0,1,.155-1.151,2.582,2.582,0,0,1,2.42-1.725c1.707,0,2.389,1.3,2.389,3.209v7.59h4.716v-8.135c0-4.358-2.327-6.386-5.429-6.386Zm0,0"
                                                  transform="translate(-14751.61 1455.882)" fill="#f2eee8"/>
                                        </g>
                                    </svg>
                                </a></li>

                                <li><a className={'hover'} href="javascript:void(0)">
                                    <svg id="Group_17899" data-name="Group 17899" width="20.805"
                                         height="20.804"
                                         viewBox="0 0 20.805 20.804">
                                        <path id="Path_2109" data-name="Path 2109"
                                              d="M1096.136,105.945a1.22,1.22,0,1,0,1.219,1.22A1.22,1.22,0,0,0,1096.136,105.945Z"
                                              transform="translate(-1080.225 -102.231)" fill="#f2eee8"/>
                                        <path id="Path_2110" data-name="Path 2110"
                                              d="M1084.178,108.605a5.123,5.123,0,1,0,5.124,5.124A5.129,5.129,0,0,0,1084.178,108.605Zm0,8.405a3.282,3.282,0,1,1,3.282-3.282A3.285,3.285,0,0,1,1084.178,117.01Z"
                                              transform="translate(-1073.691 -103.327)" fill="#f2eee8"/>
                                        <path id="Path_2111" data-name="Path 2111"
                                              d="M1084.487,120.432h-8.306a6.257,6.257,0,0,1-6.249-6.249v-8.307a6.256,6.256,0,0,1,6.249-6.249h8.306a6.256,6.256,0,0,1,6.249,6.249v8.307A6.256,6.256,0,0,1,1084.487,120.432Zm-8.306-18.847a4.3,4.3,0,0,0-4.292,4.291v8.307a4.3,4.3,0,0,0,4.292,4.292h8.306a4.3,4.3,0,0,0,4.292-4.292v-8.307a4.3,4.3,0,0,0-4.292-4.291Z"
                                              transform="translate(-1069.932 -99.628)" fill="#f2eee8"/>
                                    </svg>
                                </a></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </StyledMobileMenu>
        </>

    );
};

const StyledMenu = styled.section`
  height: 80px;
  padding: 30px 0 0 0;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
  @media (max-width: 989px) {
    display: none;
  }

  .logo {
    position: absolute;
    top: 40px;
    left: 98px;
    z-index: 5;
  }

  .main-menu__contact {
    &__drop {
      width: 152px;
      height: 40px;
      background-color: ${black};
      border-radius: 20px;
      align-items: center;
      justify-content: center;
      display: flex;
      cursor: pointer;


      p {
        font-size: 20px;
        color: #ffffff;

        svg {
          margin-left: 10px;
        }
      }
    }

    &__list {
      background-color: #F2EEE8;
      padding: 0px 30px 0 30px;
      width: 260px;
      display: none;
      height: 0;
      overflow: hidden;


      a {
        color: ${hover};
        font-size: 16px;
        line-height: 24px;
        text-transform: capitalize;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 23px;


        span {
          display: inline-flex;
          height: 24px;
          width: 24px;
          background: ${black};
          border-radius: 50%;
          align-items: center;
          justify-content: center;
        }

        &:hover {
          span:after {
            height: 0;
            width: 0;
          }
        }
      }

      ul {
        li {
          display: flex;
          padding-bottom: 17px;
          margin-bottom: 18px;
          border-bottom: 1px solid rgba(178, 168, 159, 0.20);
          flex-wrap: wrap;

          a {
            color: ${hover};
            font-size: 16px;
            line-height: 20px;
            display: flex;
            width: 100%;
            margin: 0;
            padding: 0;
            text-transform: lowercase;
            transition: letter-spacing ${transition};

            &:hover {
              letter-spacing: 1px;
            }
          }

          span {
            font-size: 12px;
            line-height: 24px;
            color: #B2A89F;
            width: 100%;
            padding-bottom: 2px;

          }

          &:nth-last-of-type(1) {
            padding: 0;
            margin: 0;
            border: none;
          }
        }
      }
    }

  }

  .main-menu__logo {
    svg {
      transition: all .3s ease;
    }
  }

  .main-menu__menu {
    display: flex;
    justify-content: end;

    &__inner {
      padding: 0px 0 5px 0;
      cursor: pointer;
      height: fit-content;
      transition: padding .4s ease;

      .line {
        height: 2px;
        background-color: ${hover};
        margin-left: auto !important;
        border-radius: 5px;
        transform-origin: right;
        transition: width .6s cubic-bezier(0.4, 0, 0, 1) 0s;;

        &:nth-of-type(1) {
          width: 50px;
        }

        &:nth-of-type(2) {
          margin: 9px 0;
          width: 70px;
        }

        &:nth-of-type(3) {
          width: 35px;
        }
      }

      &:hover {
        .line {
          &:nth-of-type(1) {
            width: 35px;

          }

          &:nth-of-type(2) {
            width: 50px;
          }

          &:nth-of-type(3) {
            width: 70px;
          }

        }
      }
    }

  }

  .main-menu__items {
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 999;
    top: 0;
    left: 0;
    display: none;
    opacity: 0;
    background-color: #fff;

    //.col-sm-7 {
    //  background-color: #fff;
    //}

    .d-flex {
      width: 100%;
    }

    .shadows {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 4;
      transform: translateX(100%);
    }

    .shadows-left {
      width: fit-content;
      position: absolute;
      bottom: 0;
      left: -130px;
      z-index: 4;
    }

    &__img {
      position: relative;
      height: 100vh;
      overflow: hidden;
      opacity: 0;

      li {
        position: absolute;
        height: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        transition: transform .2s cubic-bezier(0.4, 0, 0, 1) 0s;
        transition-delay: .5s;
        z-index: 1;
        //&:not(:nth-of-type(1)) {
        transform: translate3d(100%, 0, 0);
        //}

        &.active {
          transform: none;
          transition-delay: 0s !important;
          z-index: 3;
          transition: transform .6s cubic-bezier(0.4, 0, 0, 1) 0s;
        }
      }
    }

    &__list {
      background-color: #fff;
      min-height: 100%;
      padding-top: 160px;
      transform: translateY(40px);
      opacity: 0;

      .menu-close {
        height: 70px;
        width: 70px;
        position: absolute;
        top: 40px;
        right: 30px;
        border: 1px solid #34342E;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F2EEE8;
        cursor: pointer;
        z-index: 4;

        &:after {
          //z-index: 2;
          background-color: #fff;
          border-radius: 50%;
        }
      }

      ul {
        li {

          a {
            font-size: 32px;
            line-height: 32px;
            text-transform: capitalize;
            color: #b2a89f;
            position: relative;
            padding-bottom: 6px;
            display: inline-block;
            margin-bottom: 20px;

            &:before {
              content: '';
              position: absolute;
              left: 0;
              height: 1px;
              background-color: #736640;
              bottom: 0;
              width: 0;
              transition: width ${transition};
            }

            &:hover:before {
              width: 100%;
            }
          }
        }
      }

      &__bottom {
        position: absolute;
        bottom: 50px;
        background-color: #fff;
        width: 100%;
        left: 90px;


        .video {
          .hover:after {
            background-color: #fff;
          }

          span {
            display: flex;
            height: 30px;
            width: 30px;
            border: 1px solid ${hover};
            align-items: center;
            justify-content: center;
            background-color: ${black};
            border-radius: 50%;
            margin-right: 13px;
            margin-top: -4px;

            path {
              transition: fill ${transition};
            }

          }

          p {
            cursor: pointer;
            display: flex;
            align-items: center;
            font-size: 20px;
            line-height: 24px;
            color: ${hover};

            &:hover {
              .hover:after {
                height: 0;
                width: 0;
              }

              path {
                fill: #FFF;
              }
            }
          }
        }

        .social {
          margin-top: 30px;

          ul {
            display: flex;

            li {
              a {
                margin: 0 30px 0 0;
                height: 45px;
                width: 45px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${black};
                padding: 0;

                &:after {
                  //display: none;
                }
              }

              &:nth-last-of-type(1) a {
                margin: 0;
              }
            }
          }
        }
      }
    }


  }

`;

//----- mobile menu
const StyledMobileMenu = styled.section`
  position: fixed;
  width: 100%;
  z-index: 99;
  top: 0;
  left: 0;
  transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
  @media (min-width: 989px) {
    display: none;
  }

  .main-menu-mobile__bar {

    display: flex;
    justify-content: space-between;
    //align-items: center;
      //border-bottom: 1px solid ${hover};
    padding: 0 15px;
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    //background-color: rgba(34, 34, 34, 0.30);
    z-index: 999;
    transition: all .4s ease;
    height: 100px;

    &__logo {
      position: absolute;
      left: 0;
      right: 0;
      top: 30px;
      margin: auto;
      width: fit-content;


    }

    &__hamburger {
      width: 100%;
      padding-top: 30px;
    }


  }


  .main-menu-mobile__items {
    padding: 0 15px;
    position: relative;
    transform-origin: top left;
    transition: all .3s ease-out;
    height: calc(100vh);
    overflow-y: auto;
    padding-top: 120px;
    overflow-x: hidden;
    background-color: #FFF;
    width: 200vw;
    transform: translateX(100%);
    display: none;
    z-index: 999;

    &__head {
      display: flex;
      justify-content: space-between;
      position: absolute;
      width: calc(100vw);
      top: 0px;
      left: 0px;
      height: 80px;
      align-items: center;
      border-bottom: 1px solid #736640;
      padding-left: 15px;
      padding-right: 15px;

      .sub-menu-back {
        display: none;
      }
    }

    ul {
      width: 100%;

      &.menu-list {
        height: calc(100vh - 300px);
        overflow-y: auto;
        width: calc(100vw - 10px);

        a {
          width: 100%;
          display: flex;
        }
      }

      .main-item {
        ul {
          li {

            &:nth-of-type(1) {
              a {
                position: relative;
                display: flex;

                &:after {
                  content: '';
                  position: absolute;
                  height: 24px;
                  width: 24px;
                  background-color: ${hover};
                  right: 0;
                  top: 0;
                  bottom: 0;
                  margin: auto;
                  border-radius: 100%;
                  background-image: url(${arrowRight});
                  background-repeat: no-repeat;
                  background-position: center;
                }
              }
            }
          }
        }
      }


      li {
        text-transform: capitalize;
        display: block;
        width: 100%;

        &:nth-of-type(1) {
          width: calc(100vw - 30px);
          background-color: ${hover};
          height: 40px;
          color: #ffffff;
          border-radius: 20px;
          font-size: 20px;
          line-height: 22px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 40px !important;
        }

        a {
          color: ${hover};
          font-size: 20px;
          line-height: 24px;
        }

        &:not(:nth-last-of-type(1)) {
          margin-bottom: 24px;

        }

        //sub menus
        ul {
          left: 0;
          list-style: none;
          margin: 0;
          position: absolute;
          top: 113px;
          padding: 0 15px;
          //height: 100vh;
          opacity: 0;
          transform: translate3d(100vw, 0, 0);
          transition: all .3s ease;
          //padding-bottom: 40px;
          width: 100vw;
          padding-bottom: 25px;
          height: auto !important;
          overflow: hidden !important;

          li {
            width: auto !important;
            background-color: transparent !important;
            height: auto !important;
            display: block !important;
            text-align: left !important;

            &:nth-of-type(1) {
              margin-bottom: 80px !important;
            }

            &:not(:nth-of-type(1)) {
              a {

                text-transform: capitalize;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                font-size: 30px;
                line-height: 30px;

                span {
                  min-width: 100%;
                  font-size: 12px;
                  line-height: 23px;
                  display: block;
                  margin-bottom: 13px;
                  color: #b2a89f;
                }
              }
            }

          }
        }

        &.active {
          ul {
            opacity: 1;
            z-index: 2;
          }

        }

      }
    }

    &.active {
      transform: translate3d(-100vw, 0, 0) !important;

      .main-menu-mobile__items__head {
        transform: translate3d(100vw, 0, 0) !important;

        .sub-menu-back {
          display: block;
        }

        a {
          display: none;
        }
      }
    }

    .bottom {
      width: calc(100vw - 30px);
      position: absolute;
      bottom: 40px;
      background: #FFF;

      .video {
        .hover:after {
          background-color: #fff;
        }

        span {
          display: flex;
          height: 30px;
          width: 30px;
          border: 1px solid ${hover};
          align-items: center;
          justify-content: center;
          background-color: ${black};
          border-radius: 50%;
          margin-right: 13px;
          margin-top: -4px;

          path {
            transition: fill ${transition};
          }

        }

        p {
          cursor: pointer;
          display: flex;
          align-items: center;
          font-size: 20px;
          line-height: 24px;
          color: ${hover};

          &:hover {
            .hover:after {
              height: 0;
              width: 0;
            }

            path {
              fill: #FFF;
            }
          }
        }
      }

      .social {
        margin-top: 20px;

        ul {
          display: flex;

          li {
            width: auto !important;
            background: transparent;
            margin-bottom: 0 !important;

            a {
              margin: 0 30px 0 0;
              height: 45px;
              width: 45px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: ${black};
              padding: 0;

              &:after {
                //display: none;
              }
            }

            &:nth-last-of-type(1) a {
              margin: 0;
            }
          }
        }
      }
    }
  }

  .shadow-bottom {
    position: absolute;
    right: 90vw;
    top: 0;
    z-index: 1;
    bottom: 0;
    margin: auto;
    height: fit-content;
  }

`;

export default MyComponent;
