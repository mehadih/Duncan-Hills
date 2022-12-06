import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import {ParallaxProvider} from "react-scroll-parallax";
import Title from "../components/Title";
import React, {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import Logo from "../public/images/static/logo.svg";
import InnerBanner from "../components/InnerBanner";
import banner from '../public/images/static/banner.jpg'
import {NextSeo} from "next-seo";

const MyComponent = () => {
    // animation
    ScrollTrigger.refresh();
    gsap.registerPlugin(ScrollTrigger);

    // animation
    useEffect(() => {
        let allAnim = document.querySelectorAll('.fade-up');
        // console.log('from home page', allAnim)
        allAnim.forEach((el, index) => {
            gsap.fromTo(el, {
                autoAlpha: 0,
                y: 50,
                ease: "none",
            }, {
                y: 0,
                autoAlpha: 1,
                ease: "power2",
                duration: 1,
                scrollTrigger: {
                    id: `${index + 1}`,
                    trigger: el,
                    // start: 'top center+=100',
                    toggleActions: 'play none none reverse',
                }
            })
        })
    }, [])
    return (

        <>
            <StyledComponent className={'terms'}>
                <NextSeo
                    title={'Terms | Duncan Hills By Sanmar'}
                    description={'Duncan Hills by Sanmar sets a new benchmark for luxury in Chattogram and Bangladesh. ' +
                        'Bringing a level of aesthetics and quality that is unsurpassed and a lifestyle that is without equal, ' +
                        'Duncan Hills possesses the finest expertise from across the globe. Encompassing of four projects and ' +
                        'six residential towers, Sanmar Kensington, Sanmar Knightsbridge, Sanmar Belgravia and Sanmar Cavendish, ' +
                        'Duncan Hills is suited for a lifestyle that desires the best.'}

                />
                <ParallaxProvider>
                    <InnerBanner title={'Terms'} img={banner}/>
                    <Container className={'pt-160 pb-160'}>
                        <Row>
                            <Col>
                                <div className="terms__content">
                                    <Title margin={'0 0 40px 0'} text={'Terms'}/>
                                    <p className={'fade-up'}>Consectetur adipisicing elit. Ab ducimus magni neque
                                        pariatur sed! A
                                        architecto, commodi cupiditate deserunt, dicta dolore et eveniet expedita facere
                                        impedit
                                        nesciunt odit, placeat quae sit unde veritatis voluptas. Ab asperiores aut
                                        commodi,
                                        corporis
                                        eaque inventore laboriosam laborum, maiores non officiis quod unde ut,
                                        voluptas.</p>
                                    <p className={'fade-up'}>Exercitationem ipsa ipsum magni modi mollitia nam
                                        nesciunt qui repellendus similique sit tempore? Non quia reiciendis soluta
                                        tempore
                                        vero? Accusamus alias, consectetur corporis debitis deserunt eum harum ipsa
                                        magnam
                                        maxime minus modi nostrum numquam omnis, provident quam quia sit vero voluptate?
                                        A
                                        aliquid amet consequatur cumque dolorem, doloremque et ex excepturi, expedita
                                        facilis hic incidunt ipsa ipsum necessitatibus officia perferendis vitae! A aut
                                        distinctio dolores enim facilis iure nihil, nostrum numquam officia quas quidem
                                        vel
                                        voluptatum! Aliquam, aliquid asperiores commodi consequatur corporis dicta
                                        eligendi
                                        ipsa iste iure mollitia omnis quaerat qui quia, tenetur totam ullam velit. Aut
                                        consectetur, dolorem ducimus illo iste iusto labore laboriosam perspiciatis qui
                                        rerum sequi tempore totam! Debitis in laborum mollitia nostrum nulla omnis saepe
                                        tenetur? Alias facere modi omnis repudiandae unde? Ab incidunt mollitia
                                        necessitatibus suscipit? Culpa delectus ipsum labore laboriosam molestiae
                                        placeat,
                                        sed. A accusantium ad assumenda autem blanditiis commodi culpa, cumque deserunt
                                        dolore dolorem eius eligendi eos esse excepturi facilis fugit id impedit
                                        inventore
                                        itaque iusto magnam molestias natus officia quae quasi qui recusandae reiciendis
                                        repellat reprehenderit sed unde ut vel veritatis vero vitae voluptas voluptatem.
                                        Consequatur, nesciunt.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </ParallaxProvider>
            </StyledComponent>
        </>
    );
};

const StyledComponent = styled.section`
  .terms__content {
    p {
      margin-bottom: 10px;
      font-size: 16px;
    }
  }
`;

export default MyComponent;
