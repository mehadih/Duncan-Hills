import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col, Form} from "react-bootstrap";
import Link from 'next/link'
import {Img} from './Img';
import banner from '../public/images/dynamic/footer-top.jpg';
import {hover} from "../styles/globalStyleVars";
import footerOne from '../public/images/static/footer-one.svg';
import footerTwo from '../public/images/static/footer-two.png';
import img1 from '../public/images/static/footer-one.svg'
import {ParallaxBanner, ParallaxBannerLayer, ParallaxProvider} from "react-scroll-parallax";
import Modal from 'react-bootstrap/Modal';
import Title from "./Title";
import Button from "./Button";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import {toast} from "react-toastify";
import {emailValidation, emptyNumber, emptyValidation} from "../pages/api/config/validator";
import {ApiServices} from "../pages/api/network/ApiServices";
import {clear, postForm} from "../pages/api/redux/footer";
import {useDispatch, useSelector} from "react-redux";
import {Loader} from "./Loader";
import {SwiperSlide} from "swiper/react";
import ReactHtmlParser from "react-html-parser";

const MyComponent = ({img, title, bgColor, address}) => {

    // console.log(bgColor)
    const [show, setShow] = useState(false);
    const [windowHeight, setWindowHeight] = useState();
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const responseData = useSelector(state => state.footerReducer);

    useEffect(() => {
        setWindowHeight(window.innerHeight)
    }, [])


    // disable scroll on input
    useEffect(() => {
        var inputTypeNumbers = document.querySelectorAll("input[type=number]");
        for (var a = 0; a < inputTypeNumbers.length; a++) {
            inputTypeNumbers[a].onwheel = function (event) {
                event.target.blur();
            };
        }
    }, [])

    //--- form submit
    const success = (msg) => toast.success(msg, {
        position: "top-right",
        autoClose: 4000,
        closeOnClick: true,
        progress: undefined,

    });

    const error = (msg) => toast.error(msg, {
        position: "top-right",
        autoClose: 4000,
        closeOnClick: true,
        progress: undefined,

    });

    // form submit
    const [reg, setReg] = useState({
        name: "",
        department: "",
        phone: "",
        email: "",
        msg: "",
    });


    // validate inputs
    const [validName, setValidName] = useState(false)
    const [validPhone, setValidPhone] = useState(true)
    const [validEmail, setValidEmail] = useState(true)
    const [validMsg, setValidMsg] = useState(false)


    let name, value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        setReg({...reg, [name]: value})
        if (name === 'name') {
            emptyValidation(value) ? setValidName(true) : setValidName(false)
        }
        if (name === 'phone') {
            emptyNumber(value) ? setValidPhone(true) : setValidPhone(false)
        }
        if (name === 'email') {
            emailValidation(value) ? setValidEmail(true) : setValidEmail(false)
        }
        if (name === 'msg') {
            emptyValidation(value) ? setValidMsg(true) : setValidMsg(false)
        }
    }


    const handleSubmit = (e) => {

        let api_services = ApiServices.QUINTESS_FORM
        e.preventDefault();
        var formData = new FormData();
        formData.append('your-name', reg.name)
        formData.append('your-email', reg.email)
        if (validPhone) {
            formData.append('your-phone', reg.phone)
        }
        formData.append('your-message', reg.msg)
        if (reg.email !== '' && reg.name !== '' && reg.phone !== '' && reg.msg !== '' && validPhone && validEmail) {
            dispatch(postForm([api_services, formData]))
            setTimeout(() => {
                setReg({
                    name: "",
                    phone: "",
                    email: "",
                    msg: "",
                })
                let getSelectedData = document.querySelectorAll('.react-select__single-value');
                if (getSelectedData && getSelectedData[0]) {
                    getSelectedData[0].textContent = 'Select Department'
                }

            }, 300)

        } else {
            error('Please fill out the inputs')
            if (reg.email === '') {
                setValidEmail(false)
            }
            if (reg.name === '') {
                setValidName(true)
            }
            if (reg.phone === '') {
                setValidPhone(false)
            }
            if (reg.email === '') {
                setValidEmail(false)
            }
            if (reg.msg === '') {
                setValidMsg(true)
            }

        }
    }

    useEffect(() => {
        if (responseData && responseData?.error !== '') {
            error(responseData?.error)
            setTimeout(() => {
                dispatch(clear())
            }, 500)
        }

        if (responseData && responseData?.success !== '') {
            success(responseData?.success)
            setTimeout(() => {
                dispatch(clear())
            }, 500)
        }

    }, [responseData])


    return (
        <StyledComponent className={'before-footer '} bgColor={bgColor}>
            {responseData?.loading && <Loader/>}
            <ParallaxProvider>
                <ParallaxBanner className="parallax">
                    <ParallaxBannerLayer
                        expanded={false}
                        translateY={[0, 50]}
                        shouldAlwaysCompleteAnimation={true}
                        shouldDisableScalingTranslations={true}

                    >
                        <div className="before-footer__inner">

                            <Img src={img || banner}/>

                        </div>
                    </ParallaxBannerLayer>
                </ParallaxBanner>
            </ParallaxProvider>
            <Container>
                <Row className={'before-footer__content'}>
                    <Col sm={6} className={'pr-0'}>
                        <div className={'before-footer__content__left'}>
                            <h4>{title || 'Premium living at the heart of concrete jungle'}</h4>
                        </div>

                    </Col>
                    <Col sm={6} className={'before-footer__content__right d-flex pl-0'}>
                        <Col sm={6} className={'p-0'}>
                            <div className="before-footer__content__right__inner">
                                <Img src={footerOne} alt=""/>
                                <p>Give Us a Visit</p>
                                <div>
                                    <Link className={'hover'} href={'/'}><a className={'hover'}>
                                        <svg width="38.414" height="30.828"
                                             viewBox="0 0 38.414 30.828">
                                            <g id="Group_13211" data-name="Group 13211"
                                               transform="translate(-818.573 -2890.544)">
                                                <line id="Line_3546" data-name="Line 3546" x1="36"
                                                      transform="translate(819.573 2905.958)" fill="none"
                                                      stroke="#736640"
                                                      stroke-linecap="round" stroke-width="2"/>
                                                <line id="Line_3547" data-name="Line 3547" x1="14" y1="14"
                                                      transform="translate(841.573 2891.958)" fill="none"
                                                      stroke="#736640"
                                                      stroke-linecap="round" stroke-width="2"/>
                                                <line id="Line_3548" data-name="Line 3548" x1="14" y2="14"
                                                      transform="translate(841.573 2905.958)" fill="none"
                                                      stroke="#736640"
                                                      stroke-linecap="round" stroke-width="2"/>
                                            </g>
                                        </svg>

                                    </a></Link>
                                </div>


                            </div>
                        </Col>
                        <Col sm={6} className={'p-0'}>
                            <div className="before-footer__content__right__inner">
                                <Img src={footerTwo} alt=""/>
                                <p>Book an Appointment</p>
                                <Link href={'javascript:void(0)'}><a onClick={handleShow} className={'hover'}>
                                    <svg width="38.414" height="30.828"
                                         viewBox="0 0 38.414 30.828">
                                        <g id="Group_13211" data-name="Group 13211"
                                           transform="translate(-818.573 -2890.544)">
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

                                </a></Link>
                            </div>

                        </Col>
                    </Col>
                </Row>
            </Container>


            <Modal show={show} className={'form-modal'} onHide={handleClose}>
                <Modal.Body>
                    <div className="modal--close hover" onClick={handleClose}>
                        <svg width="28.284" height="28.284"
                             viewBox="0 0 28.284 28.284">
                            <g id="Group_13271" data-name="Group 13271" transform="translate(-1213.858 -55.858)">
                                <line id="Line_3546" data-name="Line 3546" x1="36"
                                      transform="translate(1215.272 57.272) rotate(45)" fill="none" stroke="#f2eee8"
                                      stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_3556" data-name="Line 3556" x1="36"
                                      transform="translate(1240.728 57.272) rotate(135)" fill="none" stroke="#f2eee8"
                                      stroke-linecap="round" stroke-width="2"/>
                            </g>
                        </svg>

                    </div>

                    <SimpleBar style={{maxHeight: windowHeight}}>
                        <div className="modal--content">

                            <Col sm={4} className={'modal--content__address pr-0'}>
                                {
                                    address && address?.length > 0 &&
                                    address?.map((element, index) => {
                                        return (
                                            <div className="modal--content__address__single">
                                                <h4>{element?.title}</h4>
                                                {ReactHtmlParser(element?.phone)}
                                                {ReactHtmlParser(element?.address)}
                                            </div>
                                        );
                                    })
                                }
                                {/*<div className="modal--content__address__single">*/}
                                {/*    <h4>Chattogram Office</h4>*/}
                                {/*    <a href="tel:+8803125534011">+88 031 2553401-10</a>*/}
                                {/*    <a href="tel:+880312553403">+88 031 255 3403</a>*/}
                                {/*    <p>Sanmar Ocean <br/>*/}
                                {/*        City (7th Floor) 997 CDA Avenue,*/}
                                {/*        East Nasirabad, Chattogram 4000, Bangladesh</p>*/}
                                {/*</div>*/}
                                {/*<div className="modal--content__address__single">*/}
                                {/*    <h4>Chattogram Office</h4>*/}
                                {/*    <a href="tel:+8803125534011">+88 031 2553401-10</a>*/}
                                {/*    <a href="tel:+880312553403">+88 031 255 3403</a>*/}
                                {/*    <p>Sanmar Ocean <br/>*/}
                                {/*        City (7th Floor) 997 CDA Avenue,*/}
                                {/*        East Nasirabad, Chattogram 4000, Bangladesh</p>*/}
                                {/*</div>*/}
                                {/*<div className="modal--content__address__single">*/}
                                {/*    <h4>Chattogram Office</h4>*/}
                                {/*    <a href="tel:+8803125534011">+88 031 2553401-10</a>*/}
                                {/*    <a href="tel:+880312553403">+88 031 255 3403</a>*/}
                                {/*    <p>Sanmar Ocean <br/>*/}
                                {/*        City (7th Floor) 997 CDA Avenue,*/}
                                {/*        East Nasirabad, Chattogram 4000, Bangladesh</p>*/}
                                {/*</div>*/}
                            </Col>

                            <Col sm={8} className={'modal--content__form'}>
                                <Title margin={'0 0 48px 0'} color={'#F2EEE8'} fontSize={48} lineHeight={'48px'}
                                       text={'Want to talk? Get in touch today!'}/>
                                <Form className={'dc-form'}>
                                    <Form.Group>
                                        <Form.Control
                                            className={validName ? 'has-error form-control-lg' : 'form-control-lg'}
                                            onChange={handleInput} name={'name'}
                                            onBlur={handleInput} value={reg.name} type="text"
                                            placeholder="Full Name *"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                            className={!validPhone ? 'has-error form-control-lg' : 'form-control-lg'}
                                            onChange={handleInput} onBlur={handleInput}
                                            value={reg.phone} name='phone' placeholder="Phone Number *"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                            className={!validEmail ? 'has-error form-control-lg' : 'form-control-lg'}
                                            type="email"
                                            onChange={handleInput} name='email' onBlur={handleInput}
                                            value={reg.email} placeholder="Email *"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                            className={validMsg ? 'has-error form-control-lg' : 'form-control-lg'}
                                            as="textarea"
                                            onChange={handleInput}
                                            onBlur={handleInput} value={reg.msg}
                                            name='msg' placeholder={'Message'} aria-label="Message"/>
                                    </Form.Group>

                                    <div className="div" onClick={handleSubmit}>
                                        <Button width={145} paddingTop={'6px'} text={'Submit'}/>
                                    </div>

                                </Form>
                            </Col>

                        </div>
                    </SimpleBar>
                </Modal.Body>

            </Modal>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  padding-bottom: 100px;
  overflow: hidden;
  //.before-footer__inner {
  //  padding-top: calc(768 / 1366 * 100%);
  //  position: relative;
  //}
  .parallax {
    padding-top: calc(768 / 1366 * 100%);
    position: relative;
  }

  .before-footer__content {
    transform: translateY(-50%);

    &__left {
      padding: 40px;
      background-color: ${props => props.bgColor || '#736640'};
      min-height: 100%;

      h4 {
        font-size: 48px;
        line-height: 48px;
        color: #f2eee8;
      }
    }

    &__right {
      &__inner {
        padding-top: 100%;
        position: relative;
        min-height: 100%;

        p {
          font-size: 16px;
          line-height: 22px;
          color: #f2eee8;
          position: absolute;
          top: 40px;
          left: 10px;
          right: 10px;
          text-align: center;
        }

        a {
          position: absolute;
          height: 80px;
          width: 80px;
          border-radius: 100%;
          top: 0;
          bottom: 0;
          margin: auto;
          background-color: ${hover};
          display: flex;
          align-items: center;
          justify-content: center;
          left: 0;
          right: 0;

          line {
            transition: all .3s ease;
          }

          &:hover {
            line {
              stroke: #FFF;
            }
          }
        }

        .hover:after {
          background-color: #F2EEE8;
          border-radius: 50%;
        }
      }


    }

  }

  @media (max-width: 991px) {
    .before-footer__content__left h4 {
      font-size: 24px;
      line-height: 28px;
    }

    .before-footer__content__right__inner a {
      height: 40px;
      width: 40px;
      top: 25px;

      svg {
        height: 15px;
      }
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    .before-footer__content {
      transform: translateY(-50px);

      .col-sm-6 {
        min-width: 100%;
        padding-right: 15px !important;
      }

      &__left {
        padding: 40px;
      }

      &__right {
        padding-left: 15px !important;

        &__inner {
          padding-top: calc(80 / 172 * 100%);

          p {
            left: 15px;
            right: auto;
            top: 0;
            bottom: 0;
            margin: auto;
            height: fit-content;
            max-width: 45%;
            text-align: left;
            font-size: 14px;
            line-height: 14px;
          }

          .hover {
            right: 15px;
            top: 0;
            bottom: 0;
            margin: auto;
            left: auto;
          }
        }

        .col-sm-6 {
          max-width: 50%;
          min-width: 50%;
          padding-right: 0 !important;
        }
      }
    }
  }

`;

export default MyComponent;
