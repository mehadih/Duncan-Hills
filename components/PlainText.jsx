import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import Title from "./Title";
import ReactHtmlParser from "react-html-parser";

const MyComponent = ({title, desc, short_desc}) => {
    return (
        <StyledComponent className={'plain-text pt-200 pb-200'}>
            <div className="shadow-left">
                <svg width="270.29" height="269.629" viewBox="0 0 270.29 269.629">
                    <path id="Path_6955" data-name="Path 6955"
                          d="M232.591,81.185a60.465,60.465,0,0,0,.661-11.235A72.036,72.036,0,0,0,205.5,13.117C192.94,3.865,178.4-.1,157.915-.1H118.263V72.594c-25.773-3.3-51.547,7.269-66.746,27.1-9.252,12.556-13.217,27.1-13.217,47.582v39.651h72.694a99.329,99.329,0,0,0-1.322,13.217,72.037,72.037,0,0,0,27.756,56.834c12.556,9.252,27.1,13.217,47.582,13.217h39.651V195.513a99.314,99.314,0,0,0,13.217,1.322,72.036,72.036,0,0,0,56.833-27.756c9.252-12.556,13.217-27.1,13.217-47.582V81.846H232.591Zm-56.834,50.886a60.469,60.469,0,0,1-.661-11.235V88.455H224c-3.965,13.217-11.9,25.112-22.469,33.043A50.81,50.81,0,0,1,175.758,132.071Zm-46.921-121.6h29.078c18.5,0,31.721,3.3,42.295,11.9C215.409,33.6,224,51.447,224,70.611a81.359,81.359,0,0,1-1.322,13.217v.661H172.454v35.686a59.721,59.721,0,0,0-8.591-17.182A66.484,66.484,0,0,0,129.5,79.2V10.474Zm42.956,138.779v31.721H119.585a60.42,60.42,0,0,1,21.808-30.4c7.93-5.948,17.182-9.913,29.739-11.235C171.793,141.984,171.793,145.288,171.793,149.253Zm-46.26-67.407a59.627,59.627,0,0,1,34.364,23.13c5.287,7.269,9.252,16.521,11.235,28.417a84.258,84.258,0,0,1-13.217.661H125.533ZM48.874,177.67V148.592c0-18.5,3.3-31.721,11.9-42.295C72,91.1,89.847,82.507,109.672,82.507a90.3,90.3,0,0,1,12.556,1.322h.661V136.7h40.973c-9.252,1.983-16.521,5.287-22.469,9.913-9.913,7.269-17.843,18.5-22.469,30.4H48.874ZM214.748,261.6H185.671c-18.5,0-31.721-3.3-42.295-11.9-15.2-11.234-23.791-29.078-23.791-48.242a65.177,65.177,0,0,1,1.983-15.861v-.661h52.868V149.253a74.388,74.388,0,0,0,8.591,17.843c7.269,9.913,18.5,17.843,30.4,22.469V261.6Zm3.3-75.337a60.421,60.421,0,0,1-30.4-21.808c-5.287-7.269-8.591-15.2-10.574-25.773,2.643,0,5.948-.661,9.252-.661h31.721v48.242Zm80.624-65.425c0,18.5-3.3,31.721-11.9,42.295-11.234,15.2-29.078,23.791-48.242,23.791a65.176,65.176,0,0,1-15.86-1.983h-.661V135.375H181.045c9.252-1.983,16.521-5.287,22.469-9.913,11.235-7.93,19.165-19.826,23.13-33.043h71.372v28.417Z"
                          transform="translate(270.19 -38.3) rotate(90)" fill="#8f6d4f" opacity="0.2"/>
                </svg>
            </div>
            <Container>
                <Row>
                    <Col sm={12}>
                        <Title fontSize={48} lineHeight={48} margin={'0 0 90px 0'}
                               text={short_desc}/>
                    </Col>

                    <Col sm={{span: 10, offset: 3}}>
                        <h4>{title}</h4>
                        {ReactHtmlParser(desc)}
                        {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has*/}
                        {/*    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a*/}
                        {/*    galley of type and scrambled it to make a type specimen book.*/}
                        {/*</p>*/}
                        {/*<p>It is a long established fact that a reader will be distracted by the readable content of a*/}
                        {/*    page when looking at its layout. The point of using Lorem Ipsum is that it has a*/}
                        {/*    more-or-less normal distribution of letters, as opposed to using 'Content here, content*/}
                        {/*    here', making it look like readable English. Many desktop publishing packages and web page*/}
                        {/*    editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will*/}
                        {/*    uncover many web sites still in their infancy. Various versions have evolved over the years,*/}
                        {/*    sometimes by accident, sometimes on purpose (injected humor and the like).</p>*/}
                        {/*<ul className={'list'}>*/}
                        {/*    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>*/}
                        {/*    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum*/}
                        {/*        has been the industry's standard dummy text ever since the 1500s, when an unknown*/}
                        {/*        printer took a galley of type and scrambled it to make a type specimen book.*/}
                        {/*    </li>*/}
                        {/*    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum*/}
                        {/*        has been the.*/}
                        {/*    </li>*/}
                        {/*    <li>Lorem Ipsum is simply dummy text.</li>*/}
                        {/*</ul>*/}
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  overflow: hidden;

  .shadow-left {
    position: absolute;
    left: -80px;
    transform: translateY(100%);
  }

  .title h2 {
    text-transform: unset;
    font-weight: 400;
  }

  h4 {
    font-size: 24px;
    font-weight: bold;
    line-height: 32px;
    margin-bottom: 25px;
    text-transform: capitalize;
  }

  p {
    font-size: 20px;
    line-height: 28px;

    &:not(:nth-last-of-type(1)) {
      margin-bottom: 30px;
    }
  }


  ul.list {
    counter-reset: section;
    margin-top: 20px;

    li {
      position: relative;
      font-size: 16px;
      line-height: 24px;
      padding: 20px 0 20px 50px;
      border-bottom: 1px solid rgba(115, 102, 64, 0.20);;

      &:after {
        counter-increment: section;
        content: counter(section);
        position: absolute;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        border: 1px solid rgba(115, 102, 64, 0.20);
        color: #B2A89F;
        top: 18px;
        left: 0px;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        font-size: 16px;
        padding-top: 4px;
      }

      &:nth-last-of-type(1) {
        border-bottom: 0;
      }
    }
  }

  @media (max-width: 767px) {
    .shadow-left {
      left: 0;
      transform: translateY(200%) translateX(-40%);

      svg {
        height: 80px;
      }
    }

    .col-sm-10 {
      min-width: 100%;
      margin: 0;

      p {
        font-size: 16px;
        line-height: 24px;

        &:not(:nth-last-of-type(1)) {
          margin-bottom: 20px;
        }
      }
    }
  }

`;

export default MyComponent;
