import styled from "styled-components";
import {hover} from "../styles/globalStyleVars";

export const Loader = () => {
    return (
        <StyledDiv>
            <div className='loading-before-content '>
                <div className="loadingio-spinner-rolling-qx6ynrq7t2">
                    <div className="ldio-2p01d405ya4">
                        <div/>
                    </div>
                </div>
            </div>
        </StyledDiv>
    )
};

const StyledDiv = styled.div`
  .loading-before-content {
    position: fixed;
    height: 100vh;
    width: 100vw;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.75);
    z-index: 99999999999;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;

    img {
      height: 40px;
    }

    @keyframes ldio-2p01d405ya4 {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }

    .ldio-2p01d405ya4 div {
      position: absolute;
      width: 40px;
      height: 40px;
      border: 5px solid #010A1A;
      border-top-color: ${hover};
      border-radius: 50%;
    }

    .ldio-2p01d405ya4 div {
      animation: ldio-2p01d405ya4 1s linear infinite;
      top: 100px;
      left: 100px
    }

    .loadingio-spinner-rolling-qx6ynrq7t2 {
      width: 200px;
      height: 200px;
      display: inline-block;
      overflow: hidden;
      background: none;
    }

    .ldio-2p01d405ya4 {
      width: 100%;
      height: 100%;
      position: relative;
      transform: translateZ(0) scale(1);
      backface-visibility: hidden;
      transform-origin: 0 0; /* see note above */
    }

    .ldio-2p01d405ya4 div {
      box-sizing: content-box;
    }

  }
`;
