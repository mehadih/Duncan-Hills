import React from 'react';
import styled from 'styled-components';
import {hover, text, title, title_ms60} from "../styles/globalStyleVars";
import ReactHtmlParser from "react-html-parser";

const Title = ({
                   text,
                   fontSize,
                   fontWeight,
                   color,
                   letterSpacing,
                   lineHeight,
                   textTransform,
                   margin,
                   padding,
                   borderColor,
                   varient,
                   center,
                   small_text
               }) => {


    return (

        <StyledTitle className={`title `}
                     fontSize={fontSize}
                     fontWeight={fontWeight}
                     color={color}
                     lineHeight={lineHeight}
                     LetterSpacing={letterSpacing}
                     textTransform={textTransform}
                     margin={margin}
                     padding={padding}
                     varient={varient}
                     center={center}
                     borderColor={borderColor}>
            <h2 className={''}>{ReactHtmlParser(text)} </h2>


        </StyledTitle>

    )
};


const StyledTitle = styled.div`
  margin: ${props => props.margin || '0px'};
  position: relative;
  width: 100%;
  font-family: ${title};
  text-align: ${props => props?.center ? 'center' : ''};
  padding: ${p => p.padding};

  h2 {
    font-size: ${props => props.fontSize || 120}px;
    line-height: ${props => props.lineHeight || 110}px;
    text-transform: uppercase;
    font-weight: ${props => props.fontWeight || '400'};
    color: ${props => props.color || hover};
  }


  @media (max-width: 767px) {
    margin-bottom: 40px;
    padding: 0;
    h2 {
      font-size: 35px !important;
      line-height: 35px !important;
    }
  }
`;


export default Title;














