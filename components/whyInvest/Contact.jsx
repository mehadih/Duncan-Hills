import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col, Form} from "react-bootstrap";
import Link from 'next/link'
import Title from "../Title";
import Button from "../Button";
import ReactHtmlParser from "react-html-parser";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {emailValidation, emptyNumber, emptyValidation} from "../../pages/api/config/validator";
import {postForm, clear} from "../../pages/api/redux/whyInvest";
import {Loader} from "../Loader";
import {ApiServices} from "../../pages/api/network/ApiServices";

const MyComponent = ({data}) => {


    // offset
    const [offset, setOffset] = useState(90)
    useEffect(() => {
        setOffset(Number(localStorage.getItem('containeroffset')))
    }, [])


    const dispatch = useDispatch()

    const responseData = useSelector(state => state.contactReducer)

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

        let api_services = ApiServices.WHY_INVEST_FORM
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
        <StyledComponent offset={offset} className={'contact'}>

            {responseData?.loading && <Loader/>}

            <div className="modal--content">

                <Col sm={5} className={'modal--content__address pr-0'}>
                    {
                        data?.length > 0 && data?.map((item) => (
                            <div className="modal--content__address__single" key={item?.id}>
                                <h4>{item?.title}</h4>
                                {ReactHtmlParser(item?.phone)}
                                {ReactHtmlParser(item?.address)}
                            </div>
                        ))
                    }
                </Col>

                <Col sm={7} className={'modal--content__form'}>
                    <Title margin={'0 0 48px 0'} color={'#F2EEE8'} fontSize={48} lineHeight={'48'}
                           text={'Want to talk? Get in touch today!'}/>
                    <Form className={'dc-form'}>
                        <Form.Group>
                            <Form.Control className={validName ? 'has-error form-control-lg' : 'form-control-lg'}
                                          onChange={handleInput} name={'name'}
                                          onBlur={handleInput} value={reg.name} type="text" placeholder="Full Name *"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control className={!validPhone ? 'has-error form-control-lg' : 'form-control-lg'}
                                          onChange={handleInput} onBlur={handleInput}
                                          value={reg.phone} name='phone' placeholder="Phone Number *"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control className={!validEmail ? 'has-error form-control-lg' : 'form-control-lg'}
                                          type="email"
                                          onChange={handleInput} name='email' onBlur={handleInput}
                                          value={reg.email} placeholder="Email *"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control className={validMsg ? 'has-error form-control-lg' : 'form-control-lg'}
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
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  overflow: hidden;

  .modal--content {
    padding-left: 0;

    &__address {
      padding-left: ${p => p.offset}px !important;
      padding-right: 40px !important;
    }

    .modal--content__form {
      padding-right: ${p => p.offset}px !important;
    }
  }

  @media (max-width: 1100px) {
    .title h2 {
      font-size: 35px;
      line-height: 35px;
    }
  }

  @media (max-width: 767px) {
    .modal--content .modal--content__form {
      padding-right: 15px !important;
    }

    .modal--content__address {
      padding-left: 15px !important;
      padding-right: 15px !important;
    }
  }



`;

export default MyComponent;
