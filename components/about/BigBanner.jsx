import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'

const MyComponent = () => {
    return (
        <StyledComponent className={'big-banner'}>
            <div className="big-banner__inner">
                <svg xlinkHref="http://www.w3.org/1999/xlink" width="1366" height="837"
                     viewBox="0 0 1366 837">
                    <defs>
                        <clipPath id="clip-path">
                            <rect id="Rectangle_5005" data-name="Rectangle 5005" width="1366" height="837"
                                  transform="translate(0 1692)" fill="#fff" stroke="#707070" stroke-width="1"/>
                        </clipPath>
                        <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%"
                                 viewBox="0 0 1754 851">
                            <image width="1754" height="851"
                        </pattern>
                        <filter id="Rectangle_5006" x="383.001" y="178" width="243.999" height="118"
                                filterUnits="userSpaceOnUse">
                            <feOffset dy="3" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="5" result="blur"/>
                            <feFlood flood-opacity="0.302"/>
                            <feComposite operator="in" in2="blur"/>
                            <feComposite in="SourceGraphic"/>
                        </filter>
                        <filter id="Rectangle_5006-2" x="811.001" y="427" width="286.999" height="118"
                                filterUnits="userSpaceOnUse">
                            <feOffset dy="3" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="5" result="blur-2"/>
                            <feFlood flood-opacity="0.302"/>
                            <feComposite operator="in" in2="blur-2"/>
                            <feComposite in="SourceGraphic"/>
                        </filter>
                        <filter id="Rectangle_5006-3" x="383.001" y="607" width="262.999" height="118"
                                filterUnits="userSpaceOnUse">
                            <feOffset dy="3" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="5" result="blur-3"/>
                            <feFlood flood-opacity="0.302"/>
                            <feComposite operator="in" in2="blur-3"/>
                            <feComposite in="SourceGraphic"/>
                        </filter>
                        <filter id="Rectangle_5006-4" x="1091.001" y="557" width="249.999" height="118"
                                filterUnits="userSpaceOnUse">
                            <feOffset dy="3" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="5" result="blur-4"/>
                            <feFlood flood-opacity="0.302"/>
                            <feComposite operator="in" in2="blur-4"/>
                            <feComposite in="SourceGraphic"/>
                        </filter>
                    </defs>
                    <g id="Group_18011" data-name="Group 18011" transform="translate(0 -1661)">
                        <g id="Group_17738" data-name="Group 17738" transform="translate(0 111)">
                            <g id="Mask_Group_79" data-name="Mask Group 79" transform="translate(0 -142)"
                               clip-path="url(#clip-path)">
                                <rect id="DH_Bird_s_Eye_View_-_Edited" data-name="DH Bird&apos;s Eye View - Edited"
                                      width="2011" height="975" transform="translate(0 1617)" fill="url(#pattern)"/>
                            </g>
                            <g id="Group_17734" data-name="Group 17734" transform="translate(10274 1)">
                                <Link href={'/project/sanmar-belgravia'}><a href="/project/sanmar-belgravia">
                                    <g transform="matrix(1, 0, 0, 1, -10274, 1549)" filter="url(#Rectangle_5006)">
                                        <rect id="Rectangle_5006-5" data-name="Rectangle 5006" width="213.999"
                                              height="88"
                                              rx="44" transform="translate(398 190)" fill="#f2eee8"/>
                                    </g>


                                    <g id="Group_17733" data-name="Group 17733">
                                        <path id="Path_7096" data-name="Path 7096"
                                              d="M59.865,8.922a6.711,6.711,0,0,0,.073-1.247,8,8,0,0,0-3.081-6.308A8.357,8.357,0,0,0,51.576-.1h-4.4V7.968a8.084,8.084,0,0,0-7.408,3.007A8.357,8.357,0,0,0,38.3,16.257v4.4h8.068a11.025,11.025,0,0,0-.147,1.467A8,8,0,0,0,49.3,28.433,8.357,8.357,0,0,0,54.584,29.9h4.4V21.611a11.024,11.024,0,0,0,1.467.147,8,8,0,0,0,6.308-3.081A8.357,8.357,0,0,0,68.227,13.4V9H59.865ZM53.557,14.57a6.712,6.712,0,0,1-.073-1.247V9.729h5.428A7.176,7.176,0,0,1,56.417,13.4,5.64,5.64,0,0,1,53.557,14.57Zm-5.208-13.5h3.227a7.02,7.02,0,0,1,4.694,1.32,6.6,6.6,0,0,1,2.641,5.355,9.03,9.03,0,0,1-.147,1.467v.073H53.19V13.25a6.629,6.629,0,0,0-.954-1.907A7.379,7.379,0,0,0,48.422,8.7V1.074Zm4.768,15.4V20H47.322a6.706,6.706,0,0,1,2.421-3.374,6.371,6.371,0,0,1,3.3-1.247A4.857,4.857,0,0,1,53.117,16.477ZM47.982,9A6.618,6.618,0,0,1,51.8,11.563a7.3,7.3,0,0,1,1.247,3.154,9.352,9.352,0,0,1-1.467.073H47.982ZM39.474,19.631V16.4a7.02,7.02,0,0,1,1.32-4.694,6.64,6.64,0,0,1,5.428-2.641,10.023,10.023,0,0,1,1.394.147h.073v5.868h4.548a6,6,0,0,0-2.494,1.1,7.7,7.7,0,0,0-2.494,3.374H39.474Zm18.411,9.315H54.657a7.02,7.02,0,0,1-4.694-1.32,6.6,6.6,0,0,1-2.641-5.355,7.234,7.234,0,0,1,.22-1.76v-.073H53.41V16.477a8.256,8.256,0,0,0,.954,1.98,7.7,7.7,0,0,0,3.374,2.494v8Zm.367-8.362A6.569,6.569,0,0,1,53.7,15.3c.293,0,.66-.073,1.027-.073h3.521v5.355ZM67.2,13.323a7.02,7.02,0,0,1-1.32,4.694,6.6,6.6,0,0,1-5.355,2.641,7.234,7.234,0,0,1-1.76-.22h-.073v-5.5H54.144a6,6,0,0,0,2.494-1.1A6.884,6.884,0,0,0,59.2,10.169h7.922v3.154Z"
                                              transform="translate(-9894.299 1768.1)" fill="#8f6d4f"/>
                                        <text id="SANMAR_Belgravia" data-name="SANMAR
Belgravia" transform="translate(-9806 1777)" fill="#736640" font-size="20" font-family="OregonLDO, Oregon LDO">
                                            <tspan x="0" y="0">SANMAR</tspan>
                                            <tspan x="0" y="24">BELGRAVIA</tspan>
                                        </text>
                                    </g>
                                </a></Link>
                            </g>
                            <g id="Group_17735" data-name="Group 17735" transform="translate(10702 250)">
                                <Link href={'/project/sanmar-knightsbridge'}><a>
                                    <g transform="matrix(1, 0, 0, 1, -10702, 1300)" filter="url(#Rectangle_5006-2)">
                                        <rect id="Rectangle_5006-6" data-name="Rectangle 5006" width="256.999"
                                              height="88"
                                              rx="44" transform="translate(826 439)" fill="#f2eee8"/>
                                    </g>
                                    <g id="Group_17733-2" data-name="Group 17733">
                                        <path id="Path_7096-2" data-name="Path 7096"
                                              d="M59.865,8.922a6.711,6.711,0,0,0,.073-1.247,8,8,0,0,0-3.081-6.308A8.357,8.357,0,0,0,51.576-.1h-4.4V7.968a8.084,8.084,0,0,0-7.408,3.007A8.357,8.357,0,0,0,38.3,16.257v4.4h8.068a11.025,11.025,0,0,0-.147,1.467A8,8,0,0,0,49.3,28.433,8.357,8.357,0,0,0,54.584,29.9h4.4V21.611a11.024,11.024,0,0,0,1.467.147,8,8,0,0,0,6.308-3.081A8.357,8.357,0,0,0,68.227,13.4V9H59.865ZM53.557,14.57a6.712,6.712,0,0,1-.073-1.247V9.729h5.428A7.176,7.176,0,0,1,56.417,13.4,5.64,5.64,0,0,1,53.557,14.57Zm-5.208-13.5h3.227a7.02,7.02,0,0,1,4.694,1.32,6.6,6.6,0,0,1,2.641,5.355,9.03,9.03,0,0,1-.147,1.467v.073H53.19V13.25a6.629,6.629,0,0,0-.954-1.907A7.379,7.379,0,0,0,48.422,8.7V1.074Zm4.768,15.4V20H47.322a6.706,6.706,0,0,1,2.421-3.374,6.371,6.371,0,0,1,3.3-1.247A4.857,4.857,0,0,1,53.117,16.477ZM47.982,9A6.618,6.618,0,0,1,51.8,11.563a7.3,7.3,0,0,1,1.247,3.154,9.352,9.352,0,0,1-1.467.073H47.982ZM39.474,19.631V16.4a7.02,7.02,0,0,1,1.32-4.694,6.64,6.64,0,0,1,5.428-2.641,10.023,10.023,0,0,1,1.394.147h.073v5.868h4.548a6,6,0,0,0-2.494,1.1,7.7,7.7,0,0,0-2.494,3.374H39.474Zm18.411,9.315H54.657a7.02,7.02,0,0,1-4.694-1.32,6.6,6.6,0,0,1-2.641-5.355,7.234,7.234,0,0,1,.22-1.76v-.073H53.41V16.477a8.256,8.256,0,0,0,.954,1.98,7.7,7.7,0,0,0,3.374,2.494v8Zm.367-8.362A6.569,6.569,0,0,1,53.7,15.3c.293,0,.66-.073,1.027-.073h3.521v5.355ZM67.2,13.323a7.02,7.02,0,0,1-1.32,4.694,6.6,6.6,0,0,1-5.355,2.641,7.234,7.234,0,0,1-1.76-.22h-.073v-5.5H54.144a6,6,0,0,0,2.494-1.1A6.884,6.884,0,0,0,59.2,10.169h7.922v3.154Z"
                                              transform="translate(-9894.299 1768.1)" fill="#8f6d4f"/>
                                        <text id="SANMAR_Knightsbridge" data-name="SANMAR
Knightsbridge" transform="translate(-9806 1777)" fill="#736640" font-size="20" font-family="OregonLDO, Oregon LDO">
                                            <tspan x="0" y="0">SANMAR</tspan>
                                            <tspan x="0" y="24">KNIGHTSBRIDGE</tspan>
                                        </text>
                                    </g>
                                </a></Link>

                            </g>
                            <g id="Group_17737" data-name="Group 17737" transform="translate(10274 430)">
                                <Link href={'/project/sanmar-kensington'}><a>
                                    <g transform="matrix(1, 0, 0, 1, -10274, 1120)" filter="url(#Rectangle_5006-3)">
                                        <rect id="Rectangle_5006-7" data-name="Rectangle 5006" width="232.999"
                                              height="88"
                                              rx="44" transform="translate(398 619)" fill="#f2eee8"/>
                                    </g>
                                    <g id="Group_17733-3" data-name="Group 17733">
                                        <path id="Path_7096-3" data-name="Path 7096"
                                              d="M59.865,8.922a6.711,6.711,0,0,0,.073-1.247,8,8,0,0,0-3.081-6.308A8.357,8.357,0,0,0,51.576-.1h-4.4V7.968a8.084,8.084,0,0,0-7.408,3.007A8.357,8.357,0,0,0,38.3,16.257v4.4h8.068a11.025,11.025,0,0,0-.147,1.467A8,8,0,0,0,49.3,28.433,8.357,8.357,0,0,0,54.584,29.9h4.4V21.611a11.024,11.024,0,0,0,1.467.147,8,8,0,0,0,6.308-3.081A8.357,8.357,0,0,0,68.227,13.4V9H59.865ZM53.557,14.57a6.712,6.712,0,0,1-.073-1.247V9.729h5.428A7.176,7.176,0,0,1,56.417,13.4,5.64,5.64,0,0,1,53.557,14.57Zm-5.208-13.5h3.227a7.02,7.02,0,0,1,4.694,1.32,6.6,6.6,0,0,1,2.641,5.355,9.03,9.03,0,0,1-.147,1.467v.073H53.19V13.25a6.629,6.629,0,0,0-.954-1.907A7.379,7.379,0,0,0,48.422,8.7V1.074Zm4.768,15.4V20H47.322a6.706,6.706,0,0,1,2.421-3.374,6.371,6.371,0,0,1,3.3-1.247A4.857,4.857,0,0,1,53.117,16.477ZM47.982,9A6.618,6.618,0,0,1,51.8,11.563a7.3,7.3,0,0,1,1.247,3.154,9.352,9.352,0,0,1-1.467.073H47.982ZM39.474,19.631V16.4a7.02,7.02,0,0,1,1.32-4.694,6.64,6.64,0,0,1,5.428-2.641,10.023,10.023,0,0,1,1.394.147h.073v5.868h4.548a6,6,0,0,0-2.494,1.1,7.7,7.7,0,0,0-2.494,3.374H39.474Zm18.411,9.315H54.657a7.02,7.02,0,0,1-4.694-1.32,6.6,6.6,0,0,1-2.641-5.355,7.234,7.234,0,0,1,.22-1.76v-.073H53.41V16.477a8.256,8.256,0,0,0,.954,1.98,7.7,7.7,0,0,0,3.374,2.494v8Zm.367-8.362A6.569,6.569,0,0,1,53.7,15.3c.293,0,.66-.073,1.027-.073h3.521v5.355ZM67.2,13.323a7.02,7.02,0,0,1-1.32,4.694,6.6,6.6,0,0,1-5.355,2.641,7.234,7.234,0,0,1-1.76-.22h-.073v-5.5H54.144a6,6,0,0,0,2.494-1.1A6.884,6.884,0,0,0,59.2,10.169h7.922v3.154Z"
                                              transform="translate(-9894.299 1768.1)" fill="#8f6d4f"/>
                                        <text id="SANMAR_Kensington" data-name="SANMAR
Kensington" transform="translate(-9806 1777)" fill="#736640" font-size="20" font-family="OregonLDO, Oregon LDO">
                                            <tspan x="0" y="0">SANMAR</tspan>
                                            <tspan x="0" y="24">KENSINGTON</tspan>
                                        </text>
                                    </g>
                                </a></Link>
                            </g>
                            <g id="Group_17736" data-name="Group 17736" transform="translate(10982 380)">
                                <Link href={'/project/sanmar-cavendish'}><a>
                                    <g transform="matrix(1, 0, 0, 1, -10982, 1170)" filter="url(#Rectangle_5006-4)">
                                        <rect id="Rectangle_5006-8" data-name="Rectangle 5006" width="219.999"
                                              height="88"
                                              rx="44" transform="translate(1106 569)" fill="#f2eee8"/>
                                    </g>
                                    <g id="Group_17733-4" data-name="Group 17733">
                                        <path id="Path_7096-4" data-name="Path 7096"
                                              d="M59.865,8.922a6.711,6.711,0,0,0,.073-1.247,8,8,0,0,0-3.081-6.308A8.357,8.357,0,0,0,51.576-.1h-4.4V7.968a8.084,8.084,0,0,0-7.408,3.007A8.357,8.357,0,0,0,38.3,16.257v4.4h8.068a11.025,11.025,0,0,0-.147,1.467A8,8,0,0,0,49.3,28.433,8.357,8.357,0,0,0,54.584,29.9h4.4V21.611a11.024,11.024,0,0,0,1.467.147,8,8,0,0,0,6.308-3.081A8.357,8.357,0,0,0,68.227,13.4V9H59.865ZM53.557,14.57a6.712,6.712,0,0,1-.073-1.247V9.729h5.428A7.176,7.176,0,0,1,56.417,13.4,5.64,5.64,0,0,1,53.557,14.57Zm-5.208-13.5h3.227a7.02,7.02,0,0,1,4.694,1.32,6.6,6.6,0,0,1,2.641,5.355,9.03,9.03,0,0,1-.147,1.467v.073H53.19V13.25a6.629,6.629,0,0,0-.954-1.907A7.379,7.379,0,0,0,48.422,8.7V1.074Zm4.768,15.4V20H47.322a6.706,6.706,0,0,1,2.421-3.374,6.371,6.371,0,0,1,3.3-1.247A4.857,4.857,0,0,1,53.117,16.477ZM47.982,9A6.618,6.618,0,0,1,51.8,11.563a7.3,7.3,0,0,1,1.247,3.154,9.352,9.352,0,0,1-1.467.073H47.982ZM39.474,19.631V16.4a7.02,7.02,0,0,1,1.32-4.694,6.64,6.64,0,0,1,5.428-2.641,10.023,10.023,0,0,1,1.394.147h.073v5.868h4.548a6,6,0,0,0-2.494,1.1,7.7,7.7,0,0,0-2.494,3.374H39.474Zm18.411,9.315H54.657a7.02,7.02,0,0,1-4.694-1.32,6.6,6.6,0,0,1-2.641-5.355,7.234,7.234,0,0,1,.22-1.76v-.073H53.41V16.477a8.256,8.256,0,0,0,.954,1.98,7.7,7.7,0,0,0,3.374,2.494v8Zm.367-8.362A6.569,6.569,0,0,1,53.7,15.3c.293,0,.66-.073,1.027-.073h3.521v5.355ZM67.2,13.323a7.02,7.02,0,0,1-1.32,4.694,6.6,6.6,0,0,1-5.355,2.641,7.234,7.234,0,0,1-1.76-.22h-.073v-5.5H54.144a6,6,0,0,0,2.494-1.1A6.884,6.884,0,0,0,59.2,10.169h7.922v3.154Z"
                                              transform="translate(-9894.299 1768.1)" fill="#8f6d4f"/>
                                        <text id="SANMAR_cavendish" data-name="SANMAR
cavendish" transform="translate(-9806 1777)" fill="#736640" font-size="20" font-family="OregonLDO, Oregon LDO">
                                            <tspan x="0" y="0">SANMAR</tspan>
                                            <tspan x="0" y="24">CAVENDISH</tspan>
                                        </text>
                                    </g>
                                </a></Link>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>


        </StyledComponent>
    );
};

const StyledComponent = styled.section`

  .big-banner__inner {
    padding-top: calc(837 / 1366 * 100%);
    position: relative;
  }

  svg {
    position: absolute;
    height: 100% !important;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    background-size: cover;
  }

  tspan {
    transition: letter-spacing .4s ease;
  }

  a {
    &:hover {
      tspan {
        letter-spacing: 2px !important;
      }
    }
  }
`;

export default MyComponent;