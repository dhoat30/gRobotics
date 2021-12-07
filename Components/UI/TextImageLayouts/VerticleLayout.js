import React, { useRef, useEffect } from 'react'
import LargeTitle from '../Typography/Titles/LargeTitle'
import styled from 'styled-components'
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer'
import ColumnTitle from '../Typography/Titles/ColumnTitle'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

function VerticleLayout({ title, content, image, video, className, theme, backgroundColor }) {
    const sectionRef = useRef(null)
    let imageItem = useRef(null)
    let titleItem = useRef(null)
    let contentItem = useRef(null)
    const { ref, inView } = useInView({
        threshold: 0.5
    })
    const animationTitle = useAnimation()
    const animationContent = useAnimation()
    const animationImage = useAnimation()

    useEffect(() => {
        if (inView) {
            animationTitle.start({
                y: 0,
                opacity: 1,
                transition: {
                    ease: 'easeOut', duration: 1
                }
            })
            animationContent.start({
                y: 0,
                opacity: 1,
                transition: {
                    ease: 'easeOut', duration: 1
                }
            })
            animationImage.start({
                y: 0,
                opacity: 1,
                transition: {
                    ease: 'easeOut', duration: 1
                }
            })
        }
        if (!inView) {
            animationTitle.start({
                y: '50px',
                opacity: 0,
            })
            animationContent.start({
                y: '50px',
                opacity: 0
            })
            animationImage.start({
                y: '50px',
                opacity: 0,
                transition: {
                    ease: 'easeOut', duration: 1
                }
            })
        }
    }, [inView])

    return (
        <MaxWidthContainer backgroundColor={backgroundColor} ref={ref}>
            <Container className={className} >
                <motion.div >
                    <LargeTitle
                        theme={theme}
                        color={theme === 'dark' ? 'var(--offWhite)' : "var(--darkGrey)"}
                        align="center">{title}</LargeTitle>
                </motion.div>

                <motion.div >
                    <ColumnTitle
                        theme={theme}
                        align="center"
                        color="var(--lightGrey)">
                        {content}
                    </ColumnTitle>
                </motion.div>
                {image &&
                    <motion.div>
                        <ImageContainer
                            className="image-animation"
                            ref={el => { imageItem = el }}>
                            <Image
                                src={image}
                                alt={content}
                                width="100"
                                height="100"
                                layout="responsive"
                                quality="100"
                            />
                        </ImageContainer>
                    </motion.div>
                }

                <Video dangerouslySetInnerHTML={{ __html: video }}>
                </Video>
            </Container>
        </MaxWidthContainer>

    )
}

export default VerticleLayout

const Container = styled.section`
padding: 100px 0 100px 0;
max-width: 1000px; 
margin: 0 auto;
`
const ImageContainer = styled.div`
width: 100%;
max-width: 700px;
margin: 0 auto;
overflow: hidden;
`
const Video = styled.div`
margin-top: 50px;
`