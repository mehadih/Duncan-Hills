import {createGlobalStyle, css} from 'styled-components';
import {black, hover} from './globalStyleVars';

function createCSS() {
    let styles = '';

    for (let i = 2; i < 20; i += 1) {
        styles += `
        .anim-active.fade-up:nth-child(${i}) {
          transition-delay: ${i * .12}s;
        }
     `
    }

    for (let a = 2; a < 100; a += 1) {
        styles += `
        .anim-active.fade-right span:nth-child(${a}) {
          transition-delay: ${a * .03}s;
        }
     `
    }

    return css`${styles}`;
}

export default createGlobalStyle`


  ${createCSS()}
  #root {
    overflow: hidden !important;
  }

  img {
    pointer-events: none;
  }


  @font-face {
    font-family: 'NewBaskerville';
    src: url('/fonts/NewBaskervilleRegular.woff2'),
    url('/fonts/NewBaskervilleRegular.woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Oregon LDO';
    src: url('/fonts/OregonLDO-Bold.woff2'),
    url('/fonts/OregonLDO-Bold.woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Oregon LDO';
    src: url('/fonts/OregonLDO.woff2'),
    url('/fonts/OregonLDO.woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }


  body {
    font-family: 'Oregon LDO', sans-serif !important;
    font-style: normal;
    margin: 0;
    padding: 0;
    overflow-x: hidden !important;
    //background-color: #f9f9f9;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    //height: 100vh;
    //overflow: hidden;
  }

  a {
    transition: color .3s ease;
    cursor: pointer;

    &:hover {
      color: ${hover} !important;
    }
  }

  ::selection {
    background: ${hover};
    color: #FFF;
  }


  p, a, h1, h2, h4, h3, h5 {
    color: ${black};
    font-weight: 400;
    margin: 0;
  }

  h1 {
    font-family: 'NewBaskerville', serif !important;
  }

  p {
    font-size: 20px;
    line-height: 25px;
  }

  ul {
    margin: 0;
    padding: 0
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  a:hover, a:focus {
    text-decoration: none;
    outline: none;
    box-shadow: none;
    color: ${hover};
  }

  .btn:focus, button:focus, button:active:focus, .btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus {
    outline: none;
    box-shadow: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid rgba(0, 0, 0, 0);
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;
    transition: background-color 5000s ease-in-out 0s;
  }


  table {
    width: 100%;
  }

  form div {
    position: relative;
  }

  .form-control {
    box-shadow: none;
    outline: 0;

    &:focus {
      box-shadow: none;
    }
  }

  .p-0 {
    padding: 0 !important;
  }

  .pl-0 {
    padding-left: 0;
  }

  .pr-0 {
    padding-right: 0;
  }

  .pt-160 {
    padding-top: 160px;
    @media (max-width: 767px) {
      padding-top: 80px;
    }
  }

  .pb-160 {
    padding-bottom: 160px;
    @media (max-width: 767px) {
      padding-bottom: 80px;
    }
  }

  .pt-200 {
    padding-top: 200px;
    @media (max-width: 767px) {
      padding-top: 120px;
    }
  }

  .pb-200 {
    padding-bottom: 200px;
    @media (max-width: 767px) {
      padding-bottom: 120px;
    }
  }

  .pt-230 {
    padding-top: 230px;
    @media (max-width: 767px) {
      padding-top: 120px;
    }
  }

  .pb-230 {
    padding-bottom: 230px;
    @media (max-width: 767px) {
      padding-bottom: 120px;
    }
  }

  .pt-80 {
    padding-top: 80px;
    @media (max-width: 767px) {
      padding-top: 60px;
    }
  }

  .pb-80 {
    padding-bottom: 80px;
    @media (max-width: 767px) {
      padding-bottom: 60px;
    }
  }

  .pt-40 {
    padding-top: 40px;
    @media (max-width: 767px) {
      padding-top: 40px;
    }
  }

  .pb-40 {
    padding-bottom: 40px;
    @media (max-width: 767px) {
      padding-bottom: 40px;
    }
  }

  .pb-130 {
    padding-bottom: 130px;
    @media (max-width: 767px) {
      padding-bottom: 60px;
    }
  }

  .pt-100 {
    padding-top: 100px;
    @media (max-width: 767px) {
      padding-top: 60px;
    }
  }

  .pb-100 {
    padding-bottom: 100px;
    @media (max-width: 767px) {
      padding-bottom: 60px;
    }
  }


  .MuiDrawer-paper {
    width: 500px !important;
    padding: 20px;
    @media (max-width: 767px) {
      width: 100% !important;
    }
  }

  .swiper-button-disabled {
    opacity: 0 !important;
  }

  @media (min-width: 1550px) {
    .container {
      //min-width: 1366px;
      min-width: 85%;
      margin: auto;
    }
  }

  @media (max-width: 1199px) and (min-width: 768px) {
    .container, .container-lg, .container-md, .container-sm {
      max-width: 90%;
      margin: auto;
    }
  }


  @media (max-width: 767px) {
    .container, .container-sm {
      max-width: 100%;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  #root {
    min-height: 100vh;
    overflow-x: hidden;
  }

  .MuiDialog-paperWidthSm {
    width: calc(100% - 98px) !important;
    max-width: calc(100% - 98px) !important;
  }

  @media (max-width: 959px) {
    .MuiDialog-paper {
      margin: 0px !important;
    }

    .MuiDialog-paperScrollPaper {
      position: fixed;
      bottom: 0px;
    }

    .MuiDialog-paperWidthSm {
      width: 100% !important;
      position: fixed !important;
      bottom: 0px;
      max-width: 100% !important;
    }
  }

  //react select
  .css-yk16xz-control, .css-1pahdxg-control {
    height: 50px;
    border-radius: 0 !important;
    padding-left: 5px;
    font-size: 16px;
    outline: none !important;
    border-color: #D9D9D9 !important;
    box-shadow: none !important;

    .css-1wa3eu0-placeholder {
      font-weight: 300;
      line-height: 21px;
      color: rgba(0, 0, 0, 0.5);
      outline: none;
    }

    .css-1okebmr-indicatorSeparator {
      display: none;
    }

    .css-tlfecz-indicatorContainer, .css-1gtu0rj-indicatorContainer {
      margin-right: 10px;
    }
  }

  .css-2613qy-menu {
    border-radius: 0 !important;
    margin-top: 0 !important;
  }

  //animation class
  .fade-u {
    transition: opacity .2s ease, transform .2s ease;
    opacity: 0;
    transform: translateY(40px);
    transition-delay: 0s;
  }

  .info-window {
    max-width: 200px;
  }

  .gm-style-iw {
    border-radius: 0 !important;
  }

  .swiper-pagination-bullet {
    outline: none;
  }

  .css-nmuc1a-menu {
    z-index: 5 !important;
  }


  .map-info__img {
    img {
      height: 100px;
      margin-bottom: 12px;
      object-fit: cover;
    }
  }

  .map-info__content {
    h4 {
      font-size: 20px;
    }

    p {
      margin-bottom: 5px;
    }
  }

  .overlay {
    position: fixed;
    height: 100vh;
    width: 100%;
    //background-color: rgba(0,0,0,0.5);
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    display: none;

    &.show {
      display: block;
    }
  }

  .form-control.has-error {
    border-color: #dc004e !important;
  }

  .has-error {
    border-color: #dc004e !important;
  }

  .has-error .find-retainer-filter__control {
    border-color: #dc004e !important;
  }

  //preloader
  .content-loader {
    position: absolute;
    height: 70%;
    width: 70%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .loading-before-submit {
    position: fixed;
    height: 100vh;
    width: 100%;
    bottom: 0;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.65);
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 40px;
    }
  }


  .swiper-slide {
    height: auto;
  }

  .slick-slide {
    div {
      outline: none !important
    }
  }

  button, button:active, button:focus, button:focus-visible {
    outline: none !important;
    box-shadow: none !important;
  }


  .hover {
    position: relative;
    overflow: hidden;

    span, img, p, svg {
      z-index: 2;
    }

    &:after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background-color: ${hover};
      transition: all .5s ease;
      border-radius: 20px;
    }

    &:hover {
      &:after {
        height: 0;
        width: 0;
      }
    }
  }


  .modal-backdrop {
    background-color: rgb(34 31 31 / 90%);
    min-width: 100%;
    //z-index: 9999;

    &.show {
      opacity: 1;
    }
  }


  .valid {
    color: ${hover};
    position: absolute;
    font-size: 12px;
    top: 44px;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }


  //menu fixed
  .scroll-down {
    .menu-bar {
      transform: translate3d(0, -160px, 0);

      svg {
        height: 80px;
      }

      .main-menu__logo {
        #Group_18013, #Group_18011 {
          opacity: 0;
        }
      }
    }

    .main-menu-mobile {
      transform: translate3d(0, -160px, 0);
    }
  }


  .scroll-up {
    .menu-bar {
      border-bottom: 1px solid ${hover};
      padding: 20px 0 0 0;
      background-color: #fff;

      svg {
        height: 80px;
      }
    }

    .main-menu__menu__inner {
      padding: 8px 0 5px 0;
    }

    .main-menu__logo {
      #Group_18013, #Group_18011 {
        opacity: 0;
      }
    }

    .main-menu-mobile {
      height: 80px;
      border-bottom: 1px solid ${hover};
      background-color: #fff;

      .main-menu-mobile__bar__logo {
        img {
          height: 51px;
          margin-top: -16px;
        }
      }
    }

    #Quintess_Logo {
      margin-top: 5px;

      g {
        display: none;
      }
    }

  }


  .form-control:disabled {
    background-color: transparent;
  }

  @media (max-width: 600px) {
    .prevent-overflow {
      overflow: hidden;
      height: 100vh;
    }
  }

  .Toastify__toast-container {
    z-index: 999999999999999999;
  }

  .mobile-menu {
    #fb-root, .fb_reset {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
    }
  }

  .slick-slide {
    -webkit-transform: translate3d(0, 0, 0);
  }

  .overflow {
    overflow: hidden;
  }

  //modal
  .form-modal {
    z-index: 999999999;

    .modal--close {
      height: 70px;
      width: 70px;
      border-radius: 100%;
      border: 1px solid #FFF;
      background-color: #F2EEE8;
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 40px;
      right: 30px;
      cursor: pointer;
      z-index: 3;

      line {
        transition: stroke .3s ease;
      }

      &.hover {
        &:after {
          background-color: #34342E;
          border-radius: 100%;
        }
      }

      &:hover {
        line {
          stroke: #34342E;;
        }
      }
    }

    .modal-dialog {
      min-width: 100vw;
      top: 0;
      bottom: 0;
      margin: 0;
    }

    .modal-body {
      padding: 0;
    }

    .modal-content {
      min-height: 100vh;
      max-heigth: 100vh;
      overflow: hidden;
      border: none;
      border-radius: 0;
    }


  }

  .modal--content {
    display: flex;
    padding-left: 100px;
    position: relative;

    &__address {
      padding-top: 50px;
      padding-bottom: 50px;

      &__single {
        margin-bottom: 50px;

        h4 {
          font-size: 24px;
          line-height: 32px;
          color: ${hover};
          text-transform: capitalize;
          margin-bottom: 24px;
          display: block;
          font-weight: bold;
        }

        a {
          font-size: 24px;
          line-height: 32px;
          margin-bottom: 8px;
          font-weight: bold;
          display: block;
        }

        p {
          font-size: 20px;
          line-height: 28px;
          display: block;
        }
      }
    }

    &__form {
      padding: 100px 110px 100px 80px;
      background-color: #34342E;
      position: relative
    }
  }

  @media (max-width: 767px) {
    .form-modal .modal--close {
      height: 40px;
      width: 40px;
      top: 15px;
      right: 15px;

      svg {
        height: 15px;
      }
    }

    .modal--content {
      flex-direction: column-reverse;
      padding-left: 0;

      &__form {
        min-width: 100%;
        padding-left: 15px;
        padding-top: 80px;
        padding-right: 15px;
      }

      &__address {
        min-width: 100%;
        padding-bottom: 0;

        &__single {
          margin-bottom: 40px;

          a {
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 5px;
          }

          h4 {
            margin-bottom: 20px;
          }
        }
      }
    }
  }

  .dc-form {
    .form-control {
      background-color: transparent;
      border: none;
      border-radius: 0;
      padding-left: 0;
      border-bottom: 1px solid rgba(242, 238, 232, 0.2);
      margin-bottom: 33px;
      color: #F2EEE8;
      font-size: 20px;
      line-height: 22px;

      ::placeholder {
        color: #b2a89f !important;
        font-size: 20px;
        line-height: 22px;
      }
    }

    textarea {
      min-height: 60px;
      max-height: 100px;
      min-width: 100%;
      max-width: 100%;
    }
  }

  .lg-on {
    .main-menu, .main-menu-mobile {
      opacity: 0;
    }
  }

  .react-responsive-modal-overlay {
    background: #ffffff !important;
  }

  .react-responsive-modal-closeButton {
    display: none;
  }

  .react-responsive-modal-modal {
    box-shadow: none;
    overflow-y: hidden;
    max-width: 1100px;
  }

  .react-responsive-modal-root {
    z-index: 99999;

    .download__img__content {
      form {
        width: 100%;
      }

      h2 {
        font-size: 48px;
        line-height: 48px;
        color: #252E47;
        margin-bottom: 40px;
      }

      p {
        font-size: 24px;
        line-height: 32px;
        font-weight: bold;
      }


      input[type=text], input[type=number] {
        box-shadow: none;
        height: 65px;
        border: 1px solid #252E47;
        border-radius: 32px;
        margin-top: 17px;
        color: #B2A89F;
        width: 100%;
        padding-left: 40px;
        padding-right: 40px;

        ::placeholder {
          font-weight: bold;
          color: #b2a89f;
        }

        &:focus {
          outline: none !important;
          border-color: #252E47;

        }

        //@media (max-width: 991px) {
        //  margin-bottom: 40px;
        //
        //}
      }
    }

  }

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  .slick-dots {
    bottom: -65px;
  }

  .slick-dots li button:before {
    font-size: 20px;
  }

  .slick-dots li.slick-active button:before {
    color: #252E47;
    opacity: 1;
  }

  .sticky-inner-wrapper {
    z-index: 999;
  }

  .slick-track {
    margin-left: 0;
  }
`;



