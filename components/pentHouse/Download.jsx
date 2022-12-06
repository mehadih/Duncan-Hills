import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {Col, Container, Form, Row} from "react-bootstrap";
import {Img} from "../Img";
import img from '../../public/images/static/download.jpg'
import 'react-responsive-modal/styles.css';
import {Modal} from 'react-responsive-modal';
import Title from "../Title";
import Button from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {emailValidation, emptyNumber, emptyValidation} from "../../pages/api/config/validator";
import {ApiServices} from "../../pages/api/network/ApiServices";
import {clear, postForm} from "../../pages/api/redux/project";
import {Loader} from "../Loader";
import {useRouter} from "next/router";


const Download = ({data}) => {

    const router = useRouter()

    const title = data?.title;
    const image = data?.image;
    const file = data?.file;

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const dispatch = useDispatch()

    const responseData = useSelector(state => state.projectReducer)

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

    }


    const handleSubmit = (e) => {

        let api_services = ApiServices.DOWNLOAD_FORM
        e.preventDefault();
        var formData = new FormData();
        formData.append('your-name', reg.name)
        if (validPhone) {
            formData.append('your-phone', reg.phone)
        }

        if (reg.name !== '' && reg.phone !== '') {
            dispatch(postForm([api_services, formData]))
            setTimeout(() => {
                setReg({
                    name: "",
                    phone: "",
                })
                let getSelectedData = document.querySelectorAll('.react-select__single-value');
                if (getSelectedData && getSelectedData[0]) {
                    getSelectedData[0].textContent = 'Select Department'
                }

            }, 300)

        } else {
            error('Please fill out the inputs')
            if (reg.name === '') {
                setValidName(true)
            }
            if (reg.phone === '') {
                setValidPhone(false)
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
            router.push(file)
            setTimeout(() => {
                dispatch(clear())
            }, 500)
        }

    }, [responseData])


    return (
        <StyledComponent id={'brochure'} className='download pt-200 pb-200'>
            {responseData?.loading && <Loader/>}
            <Container>
                <Row>
                    <Col lg={7} sm={12} md={12}>
                        <div className='download__title'>
                            <Title text={title} fontSize={'80'} fontWeight={'400'}
                                   color={'#252E47'} lineHeight={'80'} margin={'0px 0px 42px 0px'}/>
                        </div>
                    </Col>
                    <Col lg={5} sm={12} md={12}>
                        <div className='download__img'>
                            <div className='download__img__single'>
                                <Img src={image}/>
                            </div>
                            <div onClick={onOpenModal} className="download__button hover text-center">
                                <p>DOWNLOAD
                                    BROCHURE</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Modal open={open} onClose={onCloseModal} center>
                    <div className='download__img__content'>
                        <h2>Access the brochure now</h2>
                        <p>We use the information you provide to contact you about our relevant content, products, and
                            services.</p>
                        <Form>
                            <div className={'row'}>
                                <Col lg={5} className='input-margin'>
                                    <input className={validName ? 'has-error form-control-lg' : 'form-control-lg'}
                                           onChange={handleInput} name={'name'}
                                           onBlur={handleInput} value={reg.name} type={'text'} placeholder={'Name'}/>
                                </Col>
                                <Col lg={5} className='input-margin'>
                                    <input className={!validPhone ? 'has-error form-control-lg' : 'form-control-lg'}
                                           onChange={handleInput} onBlur={handleInput}
                                           value={reg.phone} name='phone' type={'number'} placeholder={'Phone Number'}/>
                                </Col>
                                <Col lg={2} className='input-margin' onClick={handleSubmit}>
                                    <Button margin={'18px 0 0 0 '} width={145} background={'#736640'} color={'#F2EEE8'}
                                            hoverBackground={'#252E47'}
                                            paddingTop={'6px'}
                                            text={'Submit'}/>
                                </Col>

                            </div>
                        </Form>

                    </div>
                </Modal>
            </Container>

        </StyledComponent>
    );
};

const StyledComponent = styled.section`

  form {
    width: 100%;
  }

  .download {
    &__title {
      h1 {
        font-size: 80px;
        line-height: 80px;
        color: #252E47;
        text-transform: uppercase;
        @media (max-width: 767px) {
          font-size: 40px;
          line-height: 40px;
        }
      }
    }

    &__img {
      &__single {
        position: relative;
        padding-top: calc(476 / 470 * 100%);

      }

      &.hover:after {
        border-radius: 100%;
      }

      &__content {
        h2 {
          font-size: 48px;
          line-height: 48px;
          color: #252E47;
          margin-bottom: 25px;
        }

        p {
          font-size: 24px;
          line-height: 32px;
        }

      }

      .input-submit-margin {

      }

      .download__button {
        position: absolute;
        bottom: -70px;
        left: 0px;
        right: 0;
        margin: auto;
        height: 140px;
        width: 140px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99;
        background-color: #736640;
        border-radius: 100%;
        cursor: pointer;


        p {
          font-size: 16px;
          line-height: 20px;
          text-transform: uppercase;
          color: #f2eee8;
        }

        &.hover {
          &:after {
            background-color: #252E47;
            border-radius: 100%;
          }
        }
      }


    }

  }



`;

export default Download;