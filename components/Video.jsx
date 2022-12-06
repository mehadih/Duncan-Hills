import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import Title from "./Title";
import banner from '../public/images/dynamic/video.jpg'
import {Img} from "./Img";
import {hover} from "../styles/globalStyleVars";
import ModalVideo from "react-modal-video";
import 'react-modal-video/css/modal-video.min.css';

const MyComponent = ({right, img, background, alignment, title, video_id, video_thumb}) => {
    // console.log(video_id)

    let [videoId, setVideo] = useState("");
    let [open, setOpen] = useState(false);

    let handelOpen = (open, id) => {
        setOpen(open);
        setVideo(id);
    };

    const [height, setHeight] = useState(200)
    useEffect(() => {
        const getHeight = document.querySelector('.video__box').clientHeight / 2;
        setHeight(getHeight)
    }, [])

    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={open} videoId={video_id}
                        onClose={() => handelOpen(false, '')}/>
            <StyledComponent id={'video'} alignment={alignment} background={background} right={right} height={height}
                             className={'video pt-200'}>

                <Title center margin={'0 0 20px 0'} fontSize={80} lineHeight={80} text={title}/>
                <div className="shadow-top">
                    <svg width="249.227" height="202.208" viewBox="0 0 249.227 202.208">
                        <g id="Group_18012" data-name="Group 18012" transform="translate(-1018.773 -4738.043)">
                            <path id="Path_7054" data-name="Path 7054"
                                  d="M154.828,48.652a36.264,36.264,0,0,0,.4-6.738A43.2,43.2,0,0,0,138.578,7.827C131.047,2.278,122.327-.1,110.04-.1H86.259V43.5C70.8,41.517,55.343,47.859,46.227,59.75,40.678,67.28,38.3,76,38.3,88.287v23.781H81.9A59.575,59.575,0,0,0,81.106,120a43.2,43.2,0,0,0,16.647,34.087c7.531,5.549,16.251,7.927,28.538,7.927h23.781V117.221a59.566,59.566,0,0,0,7.927.793,43.2,43.2,0,0,0,34.086-16.647c5.549-7.531,7.927-16.251,7.927-28.538V49.048H154.828ZM120.742,79.171a36.267,36.267,0,0,1-.4-6.738V53.012h29.33A38.775,38.775,0,0,1,136.2,72.829,30.474,30.474,0,0,1,120.742,79.171ZM92.6,6.242h17.44c11.1,0,19.025,1.982,25.367,7.134A35.675,35.675,0,0,1,149.676,42.31a48.8,48.8,0,0,1-.793,7.927v.4H118.76v21.4a35.818,35.818,0,0,0-5.153-10.305A39.875,39.875,0,0,0,93,47.463V6.242Zm25.763,83.235V108.5H87.052a36.238,36.238,0,0,1,13.08-18.232,34.425,34.425,0,0,1,17.836-6.738A26.246,26.246,0,0,1,118.364,89.476ZM90.619,49.048a35.762,35.762,0,0,1,20.61,13.872,39.422,39.422,0,0,1,6.738,17.043,50.535,50.535,0,0,1-7.927.4H90.619ZM44.642,106.52V89.08c0-11.1,1.982-19.025,7.134-25.367,6.738-9.116,17.44-14.269,29.33-14.269a54.161,54.161,0,0,1,7.531.793h.4V81.946h24.574a32.445,32.445,0,0,0-13.476,5.945,41.587,41.587,0,0,0-13.476,18.232H44.642Zm99.485,50.337h-17.44c-11.1,0-19.025-1.982-25.367-7.134a35.675,35.675,0,0,1-14.269-28.934,39.09,39.09,0,0,1,1.189-9.513v-.4h31.708v-21.4a44.615,44.615,0,0,0,5.153,10.7,41.587,41.587,0,0,0,18.232,13.476v43.2Zm1.982-45.184a35.5,35.5,0,0,1-24.574-28.538c1.585,0,3.567-.4,5.549-.4h19.025v28.934Zm48.355-39.239c0,11.1-1.982,19.025-7.134,25.367A35.675,35.675,0,0,1,158.4,112.069a39.09,39.09,0,0,1-9.512-1.189h-.4V81.153H123.913a32.444,32.444,0,0,0,13.476-5.945A37.2,37.2,0,0,0,151.261,55.39h42.806V72.433Z"
                                  transform="translate(980.473 4738.144)" fill="#b2a89f" opacity="0.2"/>
                            <path id="Path_7055" data-name="Path 7055"
                                  d="M95.947,24.018a17.94,17.94,0,0,0,.2-3.333A21.374,21.374,0,0,0,87.908,3.822C84.183,1.076,79.869-.1,73.79-.1H62.026V21.469a21.61,21.61,0,0,0-19.8,8.039C39.476,33.234,38.3,37.547,38.3,43.626V55.391H59.869a29.472,29.472,0,0,0-.392,3.922,21.374,21.374,0,0,0,8.235,16.863C71.437,78.92,75.751,80.1,81.83,80.1H93.594V57.94a29.468,29.468,0,0,0,3.922.392A21.373,21.373,0,0,0,114.379,50.1c2.745-3.726,3.922-8.039,3.922-14.118V24.214H95.947Zm-16.863,15.1a17.942,17.942,0,0,1-.2-3.333V26.175H93.4a19.182,19.182,0,0,1-6.667,9.8A15.076,15.076,0,0,1,79.085,39.116ZM65.163,3.037H73.79c5.49,0,9.412.98,12.549,3.529A17.649,17.649,0,0,1,93.4,20.881a24.14,24.14,0,0,1-.392,3.922V25H78.1V35.586a17.72,17.72,0,0,0-2.549-5.1,19.726,19.726,0,0,0-10.2-7.059V3.037ZM77.908,44.214v9.412H62.418a17.927,17.927,0,0,1,6.471-9.02,17.03,17.03,0,0,1,8.824-3.333A12.984,12.984,0,0,1,77.908,44.214Zm-13.726-20a17.692,17.692,0,0,1,10.2,6.863,19.5,19.5,0,0,1,3.333,8.431,25,25,0,0,1-3.922.2H64.183ZM41.437,52.645V44.018c0-5.49.98-9.412,3.529-12.549a17.751,17.751,0,0,1,14.51-7.059A26.794,26.794,0,0,1,63.2,24.8h.2V40.488H75.555a16.051,16.051,0,0,0-6.667,2.941,20.573,20.573,0,0,0-6.667,9.02H41.437Zm49.216,24.9H82.026c-5.49,0-9.412-.98-12.549-3.529A17.649,17.649,0,0,1,62.418,59.7,19.338,19.338,0,0,1,63.006,55v-.2H78.692V44.214a22.072,22.072,0,0,0,2.549,5.294,20.573,20.573,0,0,0,9.02,6.667V77.547Zm.98-22.353A17.56,17.56,0,0,1,79.477,41.077c.784,0,1.765-.2,2.745-.2h9.412V55.194Zm23.922-19.412c0,5.49-.98,9.412-3.529,12.549a17.649,17.649,0,0,1-14.314,7.059,19.338,19.338,0,0,1-4.706-.588h-.2V40.1H80.653a16.05,16.05,0,0,0,6.667-2.941,18.4,18.4,0,0,0,6.863-9.8h21.177v8.431Z"
                                  transform="translate(1149.699 4860.154)" fill="#b2a89f" opacity="0.2"/>
                        </g>
                    </svg>

                </div>
                <div className="videos">
                    <div className="video__box">
                        <div className="video__box__inner" onClick={() => handelOpen(true, `U6415y-Hsko`)}>
                            <Img src={img || banner}/>
                            <div className="video__box__inner__click">
                                <svg width="24" height="32" viewBox="0 0 24 32">
                                    <path id="Polygon_2" data-name="Polygon 2" d="M16,0,32,24H0Z"
                                          transform="translate(24) rotate(90)" fill="#f2eee8"/>
                                </svg>
                                <p>Play <br/>
                                    Video</p>
                            </div>

                            <div className="shadow-right">
                                <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink"
                                     width="117"
                                     height="250" viewBox="0 0 117 250">
                                    <image id="pattern_landing-01" width="117" height="250"
                                           xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAD6CAMAAACoPPiDAAAC/VBMVEVHcEziuWDasFrOo1DdtV7cslvpxGvju2Lds13dsVfsyXD00Hf+3IHy1oPqw2j00HXPo1Lfumbwymv524ffuF/brVLtxGvu0H/YsVvfs1rMoVDOolLZsFrtxmretmDltljrv2LhtVvdtF7xxmvmwWrOn0/Zqk341Xvfu2farVrQqFDguGPQrFrPpFHlvmXlvGHwzHDrw2/Mo1TSpU3uxGblvGbasVTQqVbElUDyzHDHoE/XqVXkt17qwWvXrlnbsFfetVjrw2fhuWHov2Tkv2TkvGLasFjmulrPpU3xz3jnxXP82HzbumzFnU3TqFDgu2PXrVTqwmPhvWbsx27uyW3Xq1nMm0f2zW7bs1vXsFXuy3Has1j00njKpFLnu17Bmk7VrFH42IHiwnP00HP0ymj30XbsyHPiumDzym7kv2jasmPTqFPlv23Ytmb61HfNplXnvGL1zXP84o/lvmTdslbnvmDux2jnv2fLo07ju2nWqFLsx23kvV/nw2fqu1301Xzxy3Tju2DhuF3YtFzTqVfwx2/qwGbsy3fBkkLctVrnxG7PpFHftlzpvWHht2DLn0XWr1/kul3JoUzqvWbUrlbZsl/itVfmuWLzznfUr1varlbtwWXEm0nyxmbbsFvqxWv00X7cuGTCnlPHnknWqE3VsmLatWHQoVLUpUnlyX3ImEPgvm3BmEnImkfMoVDer1PNplDIoVO9lkvhuFr+4Ijbt1/htF/+55TZq1b50XG8kkDetWLYqlLIo1jSq1PRoEfft2fVq1XgslbjumTtwWq+jz7uwmHcrVffsl3kt2LQp1PAlkTOn0rPo0rHmUzesFnMoUrJm0zVqlPTrFrMnlPRok3EmUTKnkrSpFHVqFXWrV3Ook7RrWDJnVDQpVTMplm6jD/Gl0jQqFrMnU7Vq1b634/966GxhDm0i0HElUa+lEXBkkfVqFq+j0PAlUfGmUi7kkjdsV/EmUu6jkPGnFK/kkO3iTupfTXar1/DlUvRpFfUpVXWpE/VqlS4ikIgk2kiAAAA/3RSTlMAAQxCNSlEahPJ79///9maWfP///////////HVHX/d//////////////////+areq////////////////////u//8G/////////////////////1P/////////////////////////////////////////yv////////////////+W//////////////////////////////////////////////////////////////////////////////////////////////////////////+0//////////////////////961v//////////8cz//////7n/////////5905v+fkAABPp0lEQVR4AbzQgwHDQAAAwGdjG7XdsMb+S9UZ4f9GONCAgD+ECW0JGAGORCzJiqJqumESwAkVFMt2XM8PwihOhPS93U4Zh0Oh0+31B8PReDKdzRfL1Vogm+1OoIAlI8uL0q/qfX44ns6Xa3W764/6RXt58KdtoGG8M3tcZYXQ4QvrV3xOugFXqeFQkHCwGrAoDSAItauARO0ScCwUR6hgiKEQnFpesfGQXbvZwz1CGzLcuu6eGd17j09x4yNcsD/B/93v88B33H/btiWkKk0Iam6At1saa7HHd1htTThkN+oAzLLqiSXEahw2EJQ8udNpkbrchMe7y0c8ZW2+t+VpcvXtS4fd7Q9QdPCZ1gaotk1rCyLPNoX2SMMyZ8Tbvvf2JZupDgZDoyC7z25oCnQq2P2cO8bjRvlzMiCe6Lpnqagh1IQnETDVvscHHzB3K+E0zETdmeeZbCIHdv1tibLtDh7cng8nAW/KxG3uIU0RGW0+9IK3V9DF7VGkpnppeqtCFHo9le/J82zVLh/NIuYNQJ+7fwBF1/BEyHFH9ZJcK5s7FjEMeFAFZwtshVuRlsGhw8gwH8X4MOmnIUi1cimaa3cx8EiuIEtTbIKQeCDb4L2mPJXldWhewaaHHHXpB29bse3mRe4vr+0gI22P+AimPh7PCpA9BfKcYhR0m9MjY/XjVRsnwLsfrF6+7JZti9nhDr0+B6R4cXJQ8dAUKEQQ9cZMYFCG2Aww9+LOTdjT07UqP+tddX9X9S2Ll/CMBkuYTP2wN/CSi9DraSwzWWNRhdeIR+5Enzp6TH18C9SY0vo5SM11rVi8zTEyJB6zdrjoI+5mrO0EbRu2bBY0TPTkqdMPn7k3kYnhtma1hdc4qtZWLxo2f+YsVAsZTH6RmjXUJ8xnNUBLo5VG4dzLVvu/inTbQIzzAGtAHXauPbd8sXorPTNDi/FSlhxxPFT3CjQg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"/>
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>

            </StyledComponent>
        </>
    );
};

const StyledComponent = styled.section`
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    height: ${props => props.height}px;
    background-color: ${p => p.background || '#F2EEE8'};
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .shadow-top {
    position: absolute;
    top: 50px;
    right: 0px;

    svg {
      height: 150px;
    }
  }

  .videos {
    display: ${props => props.alignment ? 'flex' : ''};
    justify-content: ${props => props.alignment ? 'center' : ''};

    .video__box {
      width: 70%;
      position: relative;
      z-index: 4;
      float: ${props => props.right ? 'right' : ''};


      .video__box__inner {
        padding-top: calc(600 / 998 * 100%);
        position: relative;
        cursor: pointer;

        &__click {
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

        .shadow-right {
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          right: ${props => props.right ? 'auto' : '-117px'};
          transform: rotate(${props => props.right ? '180deg' : 'none'});
          height: fit-content;
          left: ${props => props.right ? '-117px' : ''};
        }
      }
    }
  }


  @media (max-width: 767px) {
    .videos .video__box {
      width: 100%;
    }

    &:after {
      display: none;
    }

    .title {
      margin-bottom: 20px;
    }

    .video__box {
      width: 100%;
      float: none;

      &__inner {
        padding-top: calc(260 / 375 * 100%);

        &__click {
          height: 50px !important;
          width: 50px !important;

          svg {
            height: 18px;
          }
        }
      }
    }

  }

`;

export default MyComponent;
