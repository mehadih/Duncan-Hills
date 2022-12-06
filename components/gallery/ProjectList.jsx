import React,{useState} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {Img} from "../Img";
import Project from "./Project";
import Button from "../Button";
import {
    LightgalleryProvider,
    LightgalleryItem,
} from "react-lightgallery";
import ModalVideo from "react-modal-video";

const ProjectList = ({data}) => {

    let [image, setImage] = useState(false);

    let handelImage = (image) => {
        setImage(image);
    };
    const PhotoItem = ({image, thumb, group,data}) => (
        <LightgalleryItem group={group} src={image} thumb={thumb}>
            <Project img={image} data={data}/>
            {/*<img alt='' src={image} style={{width: "100%"}}/>*/}
        </LightgalleryItem>

    );

    let [open, setOpen] = useState(false);
    let [videoId, setVideo] = useState('');

    let handelOpen = (open, id) => {
        setOpen(open);
        setVideo(id);
    };

    return (
        <StyledProjectList className='overflow pt-200 pb-200'>

            <div className="shadow-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="197.19" height="511.377" viewBox="0 0 197.19 511.377">
                    <path id="Path_6944" data-name="Path 6944" d="M152.116,47.517a35.421,35.421,0,0,0,.387-6.581A42.2,42.2,0,0,0,136.244,7.643C128.888,2.223,120.371-.1,108.37-.1H85.143V42.484c-15.1-1.936-30.2,4.258-39.1,15.872C40.623,65.712,38.3,74.229,38.3,86.23v23.228H80.884a58.188,58.188,0,0,0-.774,7.743,42.2,42.2,0,0,0,16.259,33.293c7.355,5.42,15.872,7.743,27.873,7.743H147.47V114.49a58.178,58.178,0,0,0,7.743.774A42.2,42.2,0,0,0,188.506,99c5.42-7.355,7.743-15.872,7.743-27.873V47.9H152.116ZM118.823,77.326a35.422,35.422,0,0,1-.387-6.581V51.775h28.648a37.873,37.873,0,0,1-13.162,19.356A29.765,29.765,0,0,1,118.823,77.326ZM91.337,6.094H108.37c10.84,0,18.582,1.936,24.776,6.968a34.845,34.845,0,0,1,13.937,28.26,47.66,47.66,0,0,1-.774,7.743v.387H116.887v20.9a34.984,34.984,0,0,0-5.033-10.065A38.946,38.946,0,0,0,91.724,46.355V6.094Zm25.163,81.3v18.582H85.917A35.394,35.394,0,0,1,98.692,88.165a33.624,33.624,0,0,1,17.421-6.581A25.636,25.636,0,0,1,116.5,87.391ZM89.4,47.9a34.929,34.929,0,0,1,20.131,13.55A38.5,38.5,0,0,1,116.113,78.1a49.358,49.358,0,0,1-7.743.387H89.4ZM44.494,104.038V87c0-10.84,1.936-18.582,6.968-24.776,6.581-8.9,17.034-13.937,28.648-13.937a52.9,52.9,0,0,1,7.355.774h.387v30.97h24a31.69,31.69,0,0,0-13.162,5.807A40.619,40.619,0,0,0,85.53,103.651H44.494ZM141.663,153.2H124.63c-10.84,0-18.582-1.936-24.776-6.968a34.845,34.845,0,0,1-13.937-28.26,38.181,38.181,0,0,1,1.161-9.291V108.3h30.97v-20.9a43.576,43.576,0,0,0,5.033,10.452,40.619,40.619,0,0,0,17.808,13.162v42.2ZM143.6,109.07a34.669,34.669,0,0,1-24-27.873c1.549,0,3.484-.387,5.42-.387H143.6v28.26Zm47.23-38.326c0,10.84-1.936,18.582-6.968,24.776a34.845,34.845,0,0,1-28.26,13.937,38.18,38.18,0,0,1-9.291-1.161h-.387V79.261h-24a31.689,31.689,0,0,0,13.162-5.807A36.333,36.333,0,0,0,148.632,54.1h41.81V70.745Z" transform="translate(-38.3 353.141)" fill="#8f6d4f" opacity="0.2"/>
                    <path id="Path_6955" data-name="Path 6955" d="M94.714,23.5a17.557,17.557,0,0,0,.192-3.262,20.916,20.916,0,0,0-8.059-16.5C83.2,1.051,78.979-.1,73.031-.1H61.518V21.007a21.148,21.148,0,0,0-19.38,7.867C39.451,32.52,38.3,36.742,38.3,42.69V54.2H59.407a28.841,28.841,0,0,0-.384,3.838,20.916,20.916,0,0,0,8.059,16.5c3.646,2.686,7.867,3.838,13.816,3.838H92.411V56.7a28.836,28.836,0,0,0,3.838.384,20.916,20.916,0,0,0,16.5-8.059c2.686-3.646,3.838-7.867,3.838-13.816V23.694H94.714Zm-16.5,14.775a17.558,17.558,0,0,1-.192-3.262v-9.4h14.2A18.772,18.772,0,0,1,85.7,35.207,14.753,14.753,0,0,1,78.212,38.277ZM64.588,2.97h8.443c5.373,0,9.21.959,12.281,3.454a17.271,17.271,0,0,1,6.908,14.008,23.622,23.622,0,0,1-.384,3.838v.192H77.253V34.823a17.34,17.34,0,0,0-2.494-4.989,19.3,19.3,0,0,0-9.978-6.908V2.97Zm12.472,40.3v9.21H61.9a17.544,17.544,0,0,1,6.332-8.827,16.666,16.666,0,0,1,8.635-3.262A12.707,12.707,0,0,1,77.061,43.266ZM63.629,23.694a17.313,17.313,0,0,1,9.978,6.716,19.085,19.085,0,0,1,3.262,8.251,24.465,24.465,0,0,1-3.838.192h-9.4ZM41.37,51.517V43.074c0-5.373.959-9.21,3.454-12.281a17.372,17.372,0,0,1,14.2-6.908,26.22,26.22,0,0,1,3.646.384h.192V39.62h11.9A15.707,15.707,0,0,0,68.234,42.5a20.133,20.133,0,0,0-6.524,8.827H41.37ZM89.533,75.886H81.09c-5.373,0-9.21-.959-12.281-3.454A17.271,17.271,0,0,1,61.9,58.425a18.925,18.925,0,0,1,.576-4.605v-.192H77.828V43.266a21.6,21.6,0,0,0,2.494,5.181,20.133,20.133,0,0,0,8.827,6.524V75.886Zm.959-21.875A17.184,17.184,0,0,1,78.6,40.2c.768,0,1.727-.192,2.686-.192h9.21V54.011Zm23.41-19c0,5.373-.959,9.21-3.454,12.281A17.271,17.271,0,0,1,96.441,54.2a18.924,18.924,0,0,1-4.605-.576h-.192V39.236h-11.9a15.707,15.707,0,0,0,6.524-2.878,18.009,18.009,0,0,0,6.716-9.594H113.71v8.251Z" transform="translate(197.09 -38.3) rotate(90)" fill="#8f6d4f" opacity="0.2"/>
                </svg>

            </div>
            <div className="shadow-right">
                <svg xmlns="http://www.w3.org/2000/svg" width="91.63" height="91.854" viewBox="0 0 91.63 91.854">
                    <path id="Path_6954" data-name="Path 6954" d="M104.327,27.524a20.548,20.548,0,0,0,.225-3.818A24.481,24.481,0,0,0,95.119,4.392C90.852,1.247,85.912-.1,78.949-.1H65.475V24.6a24.752,24.752,0,0,0-22.683,9.208C39.647,38.079,38.3,43.02,38.3,49.982V63.457H63a33.756,33.756,0,0,0-.449,4.492,24.481,24.481,0,0,0,9.432,19.314c4.267,3.144,9.208,4.492,16.17,4.492h13.475V66.376a33.751,33.751,0,0,0,4.492.449,24.48,24.48,0,0,0,19.314-9.432c3.144-4.267,4.492-9.208,4.492-16.17V27.748h-25.6ZM85.013,44.817A20.55,20.55,0,0,1,84.789,41v-11h16.619a21.971,21.971,0,0,1-7.636,11.229A17.267,17.267,0,0,1,85.013,44.817ZM69.068,3.493h9.882c6.288,0,10.78,1.123,14.373,4.042a20.214,20.214,0,0,1,8.085,16.395,27.648,27.648,0,0,1-.449,4.492v.225H83.89V40.774a20.3,20.3,0,0,0-2.92-5.839A22.594,22.594,0,0,0,69.292,26.85V3.493Zm14.6,47.162v10.78H65.924A20.533,20.533,0,0,1,73.335,51.1a19.506,19.506,0,0,1,10.106-3.818A14.872,14.872,0,0,1,83.666,50.656ZM67.945,27.748a20.263,20.263,0,0,1,11.678,7.86,22.337,22.337,0,0,1,3.818,9.657,28.634,28.634,0,0,1-4.492.225h-11ZM41.893,60.313V50.431c0-6.288,1.123-10.78,4.042-14.373a20.332,20.332,0,0,1,16.619-8.085,30.689,30.689,0,0,1,4.267.449h.225V46.389H80.971a18.384,18.384,0,0,0-7.636,3.369A23.564,23.564,0,0,0,65.7,60.088H41.893Zm56.37,28.522H88.382c-6.288,0-10.78-1.123-14.373-4.042A20.214,20.214,0,0,1,65.924,68.4a22.15,22.15,0,0,1,.674-5.39v-.225H84.564V50.656a25.28,25.28,0,0,0,2.92,6.064,23.564,23.564,0,0,0,10.331,7.636V88.835Zm1.123-25.6a20.112,20.112,0,0,1-13.924-16.17c.9,0,2.021-.225,3.144-.225h10.78V63.232ZM126.786,41c0,6.288-1.123,10.78-4.042,14.373a20.214,20.214,0,0,1-16.395,8.085,22.149,22.149,0,0,1-5.39-.674h-.225V45.939H86.81a18.384,18.384,0,0,0,7.636-3.369,21.078,21.078,0,0,0,7.86-11.229h24.255V41Z" transform="translate(-38.3 0.1)" fill="#8f6d4f" opacity="0.2"/>
                </svg>
            </div>


            <Container>
                <Row>
                    {
                        data?.length>0 && data?.map((element) =>(
                            element?.gallery_item?.url?
                                <>
                                    <ModalVideo channel='youtube' isOpen={open}
                                                videoId={element?.gallery_item?.url}
                                                onClose={() => handelOpen(false, '')}/>
                                    <Col lg={6} onClick={() => handelOpen(true, 'rUrbyVu1MJc')} key={element?.ID}>
                                        <Project img={element?.gallery_item?.thumbnail} data={element} />
                                    </Col>
                                </> :
                                <LightgalleryProvider
                                    lightgallerySettings={
                                        {
                                            download: false,
                                            // thumbnail: false,
                                            fullScreen: true,
                                            share: false
                                        }
                                    }
                                >
                                    <Col lg={6} key={element?.ID}>
                                        <PhotoItem image={element?.gallery_item?.image} group={'1'} data={element} />
                                    </Col>
                                </LightgalleryProvider>

                        ))
                    }

                    {/*<Col lg={6}>*/}
                    {/*    <Project img={img3}/>*/}
                    {/*</Col>*/}
                    {/*<Col lg={6}>*/}
                    {/*    <Project img={img4}/>*/}
                    {/*</Col>*/}
                </Row>
                {/*<div className="gallery-bottom text-center">*/}
                {/*    <Button paddingTop={'7px'} hoverBackground={'#736640'} color={'#FFF'} height={67}*/}
                {/*            margin={'10px auto 0 auto'}*/}
                {/*            width={190}*/}
                {/*            text={'Load more'}/>*/}
                {/*</div>*/}
            </Container>
        </StyledProjectList>
    );
};
const StyledProjectList=styled.section`
  background-color: #FFFFFF;
  position: relative;
  .overflow {
    overflow: hidden;
  }

  .shadow-right {
    position: absolute;
    top: 827px;
    right: -16px;
    height: fit-content;
    overflow: hidden;
  }

  .shadow-left {
    position: absolute;
    top: -1100px;
    bottom: 0px;
    margin: auto;
    height: fit-content;
    left: -60px;
  }

  .col-lg-6 {
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 70px;

    :nth-child(odd) {
      padding-right: 35px;
      padding-left: 15px;
    }

    :nth-child(even) {
      padding-right: 15px;
      padding-left: 35px;

    }
    @media (max-width: 991px) {
      :nth-child(odd) {
        padding-right: 15px;
      }

      :nth-child(even) {
        padding-left: 15px;

      }
    }
    //@media (max-width: 767px) {
    //  :nth-child(odd) {
    //    padding-right: 0px;
    //  }
    //  :nth-child(even) {
    //    padding-left: 0px;
    //  }
    //}
  }

  @media (max-width: 991px) {

    .shadow-right {
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateX(75%);
      svg {
        width: 40% !important;
      }
    }
    .shadow-right {
      position: absolute;
      bottom: 30px;
      right: -20px;
      transform: none;

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
    padding-top: 150px;
    .col-lg-6 {
      margin-bottom: 40px;

      :nth-child(even) {
        padding-right: 15px;
        padding-left: 15px;
      }

      :nth-child(odd) {
        padding-right: 15px;
        padding-left: 15px;
      }
    }

    .shadow-right {
      position: absolute;
      bottom: 30px;
      right: -20px;
      transform: none;

      svg {
        width: 150px;
        height: 150px;
      }
    }

    .shadow-left {
      transform: none;
      left: 0;
      bottom: 30px;
      top: auto;

      svg {
        width: 50px;
        height: 50px;
      }
    }

  }
  @media (max-width: 1200px) {
    .shadow-right {
      position: absolute;
      bottom: 0;
      right: 0;
      transform: none;
      svg {
        width: 40% !important;
      }
    }
  }
  //.projectList {
  //  &__background {
  //    &__left {
  //      position: absolute;
  //      width: 270px;
  //      height: 270px;
  //      top: 379px;
  //      left: -10%;
  //      @media (max-width: 768px) {
  //        display: none;
  //      };
  //
  //      img {
  //
  //      }
  //
  //    }
  //
  //    &__right {
  //
  //      width: 362px;
  //      height: 362px;
  //      top: 750px;
  //      position: absolute;
  //      right: -10%;
  //      //height: fit-content;      
  //      //@media (max-width: 768px) {
  //      //  display: none;
  //      //};
  //      //@media (max-width: 992px) {
  //      //  display: none;
  //      //};     
  //      //
  //      //@media (min-width: 1550px) {
  //      //  display: none;
  //      //}
  //      &__small {
  //        //@media (max-width: 992px) {
  //        //  display: none;
  //        //};
  //        //@media (max-width: 768px) {
  //        //  display: none;
  //        //};
  //        position: absolute;
  //        width: 92px;
  //        height: 92px;
  //        top: 616px;
  //        left: 94%;
  //        height: fit-content;
  //      }
  //
  //    }
  //  }
  //}

;



`

export default ProjectList;
