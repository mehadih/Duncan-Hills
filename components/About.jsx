import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import Title from "./Title";
import {Links} from "./Link";
import ReactHtmlParser from "react-html-parser";


const MyComponent = ({title, subTitle, desc, link, data}) => {
    return (
        <StyledComponent id={'overview'} className={'about pt-200 pb-200 overflow'}>
            <div className="shadow-right">
                <svg width="361.258" height="482.854" viewBox="0 0 361.258 482.854">
                    <g id="Group_18011" data-name="Group 18011" transform="translate(-1149 -1043.289)">
                        <path id="Path_6944" data-name="Path 6944"
                              d="M298.618,108.809c.885-4.427.885-9.74.885-15.052a96.516,96.516,0,0,0-37.188-76.147C245.492,5.213,226.012-.1,198.564-.1H145.438V97.3c-34.532-4.427-69.064,9.74-89.429,36.3C43.613,150.424,38.3,169.9,38.3,197.352v53.126h97.4a133.085,133.085,0,0,0-1.771,17.709,96.517,96.517,0,0,0,37.188,76.148c16.823,12.4,36.3,17.709,63.751,17.709h53.126V261.989A133.065,133.065,0,0,0,305.7,263.76a96.516,96.516,0,0,0,76.147-37.188c12.4-16.823,17.709-36.3,17.709-63.751V109.694H298.618Zm-76.147,68.179c-.885-4.427-.885-9.74-.885-15.052V118.548h65.522c-5.313,17.709-15.938,33.647-30.1,44.272A68.078,68.078,0,0,1,222.471,176.987ZM159.6,14.067h38.959c24.792,0,42.5,4.427,56.668,15.938,20.365,15.052,31.876,38.959,31.876,64.637a109.007,109.007,0,0,1-1.771,17.709v.885H218.044v47.814a80.016,80.016,0,0,0-11.511-23.021,89.078,89.078,0,0,0-46.043-31.876V14.067Zm57.553,185.941v42.5H147.209a80.953,80.953,0,0,1,29.219-40.73c10.625-7.969,23.021-13.282,39.845-15.052C217.158,190.269,217.158,194.7,217.158,200.008Zm-61.98-90.314a79.89,79.89,0,0,1,46.043,30.99c7.084,9.74,12.4,22.136,15.052,38.074-5.313.885-11.511.885-17.709.885H155.178ZM52.467,238.082V199.123c0-24.792,4.427-42.5,15.938-56.668,15.052-20.365,38.959-31.876,65.522-31.876,5.313,0,10.625.885,16.823,1.771h.885v70.835h54.9c-12.4,2.656-22.136,7.083-30.1,13.282-13.281,9.74-23.907,24.792-30.1,40.73H52.467Zm222.244,112.45H235.752c-24.792,0-42.5-4.427-56.668-15.938-20.365-15.052-31.876-38.959-31.876-64.637a87.326,87.326,0,0,1,2.656-21.25v-.885H220.7V200.008c2.656,8.854,7.083,16.823,11.511,23.907,9.74,13.282,24.792,23.907,40.73,30.1v96.513Zm4.427-100.94a80.953,80.953,0,0,1-40.73-29.219c-7.083-9.74-11.511-20.365-14.167-34.532,3.542,0,7.969-.885,12.4-.885h42.5v64.637Zm108.023-87.658c0,24.792-4.427,42.5-15.938,56.668-15.052,20.365-38.959,31.876-64.637,31.876a87.325,87.325,0,0,1-21.25-2.656h-.885V181.414h-54.9c12.4-2.656,22.136-7.083,30.1-13.282,15.052-10.625,25.678-26.563,30.99-44.272h95.627v38.074Z"
                              transform="translate(1110.7 1164.1)" fill="#8f6d4f" opacity="0.2"/>
                        <path id="Path_6954" data-name="Path 6954"
                              d="M104.327,27.524a20.548,20.548,0,0,0,.225-3.818A24.481,24.481,0,0,0,95.119,4.392C90.852,1.247,85.912-.1,78.949-.1H65.475V24.6a24.752,24.752,0,0,0-22.683,9.208C39.647,38.079,38.3,43.02,38.3,49.982V63.457H63a33.756,33.756,0,0,0-.449,4.492,24.481,24.481,0,0,0,9.432,19.314c4.267,3.144,9.208,4.492,16.17,4.492h13.475V66.376a33.751,33.751,0,0,0,4.492.449,24.48,24.48,0,0,0,19.314-9.432c3.144-4.267,4.492-9.208,4.492-16.17V27.748h-25.6ZM85.013,44.817A20.55,20.55,0,0,1,84.789,41v-11h16.619a21.971,21.971,0,0,1-7.636,11.229A17.267,17.267,0,0,1,85.013,44.817ZM69.068,3.493h9.882c6.288,0,10.78,1.123,14.373,4.042a20.214,20.214,0,0,1,8.085,16.395,27.648,27.648,0,0,1-.449,4.492v.225H83.89V40.774a20.3,20.3,0,0,0-2.92-5.839A22.594,22.594,0,0,0,69.292,26.85V3.493Zm14.6,47.162v10.78H65.924A20.533,20.533,0,0,1,73.335,51.1a19.506,19.506,0,0,1,10.106-3.818A14.872,14.872,0,0,1,83.666,50.656ZM67.945,27.748a20.263,20.263,0,0,1,11.678,7.86,22.337,22.337,0,0,1,3.818,9.657,28.634,28.634,0,0,1-4.492.225h-11ZM41.893,60.313V50.431c0-6.288,1.123-10.78,4.042-14.373a20.332,20.332,0,0,1,16.619-8.085,30.689,30.689,0,0,1,4.267.449h.225V46.389H80.971a18.384,18.384,0,0,0-7.636,3.369A23.564,23.564,0,0,0,65.7,60.088H41.893Zm56.37,28.522H88.382c-6.288,0-10.78-1.123-14.373-4.042A20.214,20.214,0,0,1,65.924,68.4a22.15,22.15,0,0,1,.674-5.39v-.225H84.564V50.656a25.28,25.28,0,0,0,2.92,6.064,23.564,23.564,0,0,0,10.331,7.636V88.835Zm1.123-25.6a20.112,20.112,0,0,1-13.924-16.17c.9,0,2.021-.225,3.144-.225h10.78V63.232ZM126.786,41c0,6.288-1.123,10.78-4.042,14.373a20.214,20.214,0,0,1-16.395,8.085,22.149,22.149,0,0,1-5.39-.674h-.225V45.939H86.81a18.384,18.384,0,0,0,7.636-3.369,21.078,21.078,0,0,0,7.86-11.229h24.255V41Z"
                              transform="translate(1250.7 1043.389)" fill="#8f6d4f" opacity="0.2"/>
                    </g>
                </svg>
            </div>

            <div className="shadow-left">
                <svg width="270.29" height="269.629" viewBox="0 0 270.29 269.629">
                    <path id="Path_6955" data-name="Path 6955"
                          d="M232.591,81.185a60.465,60.465,0,0,0,.661-11.235A72.036,72.036,0,0,0,205.5,13.117C192.94,3.865,178.4-.1,157.915-.1H118.263V72.594c-25.773-3.3-51.547,7.269-66.746,27.1-9.252,12.556-13.217,27.1-13.217,47.582v39.651h72.694a99.329,99.329,0,0,0-1.322,13.217,72.037,72.037,0,0,0,27.756,56.834c12.556,9.252,27.1,13.217,47.582,13.217h39.651V195.513a99.314,99.314,0,0,0,13.217,1.322,72.036,72.036,0,0,0,56.833-27.756c9.252-12.556,13.217-27.1,13.217-47.582V81.846H232.591Zm-56.834,50.886a60.469,60.469,0,0,1-.661-11.235V88.455H224c-3.965,13.217-11.9,25.112-22.469,33.043A50.81,50.81,0,0,1,175.758,132.071Zm-46.921-121.6h29.078c18.5,0,31.721,3.3,42.295,11.9C215.409,33.6,224,51.447,224,70.611a81.359,81.359,0,0,1-1.322,13.217v.661H172.454v35.686a59.721,59.721,0,0,0-8.591-17.182A66.484,66.484,0,0,0,129.5,79.2V10.474Zm42.956,138.779v31.721H119.585a60.42,60.42,0,0,1,21.808-30.4c7.93-5.948,17.182-9.913,29.739-11.235C171.793,141.984,171.793,145.288,171.793,149.253Zm-46.26-67.407a59.627,59.627,0,0,1,34.364,23.13c5.287,7.269,9.252,16.521,11.235,28.417a84.258,84.258,0,0,1-13.217.661H125.533ZM48.874,177.67V148.592c0-18.5,3.3-31.721,11.9-42.295C72,91.1,89.847,82.507,109.672,82.507a90.3,90.3,0,0,1,12.556,1.322h.661V136.7h40.973c-9.252,1.983-16.521,5.287-22.469,9.913-9.913,7.269-17.843,18.5-22.469,30.4H48.874ZM214.748,261.6H185.671c-18.5,0-31.721-3.3-42.295-11.9-15.2-11.234-23.791-29.078-23.791-48.242a65.177,65.177,0,0,1,1.983-15.861v-.661h52.868V149.253a74.388,74.388,0,0,0,8.591,17.843c7.269,9.913,18.5,17.843,30.4,22.469V261.6Zm3.3-75.337a60.421,60.421,0,0,1-30.4-21.808c-5.287-7.269-8.591-15.2-10.574-25.773,2.643,0,5.948-.661,9.252-.661h31.721v48.242Zm80.624-65.425c0,18.5-3.3,31.721-11.9,42.295-11.234,15.2-29.078,23.791-48.242,23.791a65.176,65.176,0,0,1-15.86-1.983h-.661V135.375H181.045c9.252-1.983,16.521-5.287,22.469-9.913,11.235-7.93,19.165-19.826,23.13-33.043h71.372v28.417Z"
                          transform="translate(270.19 -38.3) rotate(90)" fill="#8f6d4f" opacity="0.2"/>
                </svg>

            </div>


            <Container>
                <Row>
                    <Col className={'about__text'} sm={{span: 10, offset: 1}}>
                        <h3>{subTitle}</h3>
                        <Title lineHeight={110} center fontSize={120} margin={'0 0 77px 0'}
                               text={title}/>
                        {ReactHtmlParser(desc)}
                        <Links link={link && link} center text={'Read More'} margin={'24px 0 0 0'}/>
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  position: relative;

  .shadow-right {
    position: absolute;
    bottom: 100px;
    right: -145px;
    height: fit-content;
  }

  .shadow-left {
    position: absolute;
    top: 0;
    bottom: 0px;
    margin: auto;
    height: fit-content;
    left: -133px;
  }

  .about__text {
    text-align: center;

    h3 {
      font-size: 20px;
      line-height: 24px;
      text-transform: uppercase;
    }

    p {
      font-size: 20px;
      line-height: 28px;
      width: 80%;
      margin: auto;
      text-align: center;

      &:not(:nth-last-of-type(1)) {
        margin-bottom: 16px;
      }
    }
  }

  @media (max-width: 1200px) {
    .title {
      h2 {
        font-size: 90px;
        line-height: 90px;
      }
    }
  }

  @media (max-width: 991px) {
    .about__text {
      min-width: 100%;
      margin: 0;
    }

    .shadow-right {
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateX(75%);

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
    .about__text {
      h3 {
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 20px;
      }

      p {
        width: 100%;
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

    .links {
      margin-top: 50px;
    }
  }


`;

export default MyComponent;