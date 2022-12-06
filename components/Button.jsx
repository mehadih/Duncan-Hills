import React, {useState, useEffect} from 'react';
import {gradient, hover, title} from '../styles/globalStyleVars';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';


const Button = ({
                    onSubmit,
                    text,
                    src,
                    img,
                    hoverImg,
                    fontSize,
                    fontWeight,
                    color,
                    letterSpacing,
                    lineHeight,
                    margin,
                    background,
                    borderRadius,
                    border,
                    width,
                    height,
                    hoverBackground,
                    target,
                    borderColor,
                    textTransform,
                    paddingTop,
                    hoverColor
                }) => {


    return (
        <StyledBtn className={`dc-btn`}
                   fontSize={fontSize}
                   fontWeight={fontWeight}
                   color={color}
                   background={background}
                   lineHeight={lineHeight}
                   letterSpacing={letterSpacing}
                   margin={margin}
                   border={border}
                   img={img}
                   borderRadius={borderRadius}
                   width={width}
                   hoverImg={hoverImg}
                   hoverBackground={hoverBackground}
                   height={height}
                   borderColor={borderColor}
                   target={target}
                   textTransform={textTransform}
                   PaddingTop={paddingTop}
                   hoverColor={hoverColor}
        >
            {src ? (
                <Link href={src || 'javascript:void(0)'}>
                    <a target={target || '_self'}>
                        <span> {text}  </span>
                    </a>
                </Link>
            ) : (
                <a target={target || '_self'}>
                    <span>{text}</span>
                </a>
            )}
        </StyledBtn>
    )
};

const StyledBtn = styled.div`
  &.dc-btn {
    margin: ${props => props.margin || '0'};
    width: ${props => props.width || '145'}px;
    height: ${props => props.height || '64'}px;
    cursor: pointer;

    a {
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
      font-size: ${props => props.fontSize || '20'}px;
      font-weight: ${props => props.fontWeight || 'bold'};
      margin: 0;
      line-height: ${props => props.lineHeight || '22'}px;
      text-transform: ${props => props.textTransform || 'uppercase'};
        //border: 1px solid ${props => props.borderColor || '#010A1A'};
      background-color: ${props => props.background || '#8F6D4F'};
      letter-spacing: ${props => props.letterSpacing || `0px`};
      position: relative;
      border-radius: ${props => props.borderRadius || '50'}px;
      overflow: hidden;
      z-index: 0;
      //transition: border .3s ease;
      padding: 0 12%;

      box-sizing: border-box;

      span {
        transition: color .3s ease;
        color: ${props => props.color || hover};
        position: relative;
        z-index: 3;
        padding-top: ${props => props.PaddingTop || '10px'}
      }

      &:before {
        content: "";
        position: absolute;
        background-color: ${props => props.hoverBackground || '#F2EEE8'};
        height: 100%;
        width: 100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        transition: all .6s cubic-bezier(0.4, 0, 0, 1) 0s;
        border-radius: 50px;
      }

      &:hover {
        border-color: transparent;


        &:before {
          height: 0;
          width: 0;

        }

        span {
          color: ${props => props.hoverColor || '#FFF'};
        }
      }
    }
  }

`;


export default Button;
