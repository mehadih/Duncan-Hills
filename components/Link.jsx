import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import {hover} from "../styles/globalStyleVars";

export const Links = ({link, text, color, center, margin}) => {
    return (
        <StyledComponent color={color} margin={margin}
                         className={`links ${center ? 'center' : ''}`}>
            <Link href={link || 'javascript:void(0)'}><a>{text || 'Read more'}</a></Link>
        </StyledComponent>
    );
};

const StyledComponent = styled.div`
  margin: ${props => props.margin};

  a {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 22px;
    color: ${props => props.color || hover};
    position: relative;
    padding-bottom: 5px;
    transition: letter-spacing .6s cubic-bezier(0.4, 0, 0, 1) 0s;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: ${props => props.color || hover};
      left: 0;
      border-radius: 20px;
      transition: width .6s cubic-bezier(0.4, 0, 0, 1) 0s;
    }


    &:hover {
      letter-spacing: 3px;
      color: ${props => props.color || hover} !important;

      &:after {
        width: 90%;
      }
    }
  }

  &.center a {
    &:after {
      left: 0;
      right: 0;
      margin: auto;
    }
  }



`;

