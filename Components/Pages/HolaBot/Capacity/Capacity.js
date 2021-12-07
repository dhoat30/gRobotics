import React, { useRef, useEffect } from 'react'
import LargeTitle from '../../../UI/Typography/Titles/LargeTitle'
import styled from 'styled-components'
import MaxWidthContainer from '../../../UI/MaxWidthContainer/MaxWidthContainer'
import Subtitle from '../../../UI/Typography/Titles/Subtitle'
import Image from 'next/image'



function VerticleLayout({ title, content, image, video, className, theme, backgroundColor }) {
    // const sectionRef = useRef(null)
    // let imageItem = useRef(null)
    // let titleItem = useRef(null)
    // let contentItem = useRef(null)
    // const { ref, inView } = useInView({
    //     threshold: 0.5
    // })
    // const animationTitle = useAnimation()
    // const animationContent = useAnimation()
    // const animationImage = useAnimation()

    // useEffect(() => {
    //     if (inView) {
    //         animationTitle.start({
    //             y: 0,
    //             opacity: 1,
    //             transition: {
    //                 ease: 'easeOut', duration: 1
    //             }
    //         })
    //         animationContent.start({
    //             y: 0,
    //             opacity: 1,
    //             transition: {
    //                 ease: 'easeOut', duration: 1
    //             }
    //         })
    //         animationImage.start({
    //             y: 0,
    //             opacity: 1,
    //             transition: {
    //                 ease: 'easeOut', duration: 1
    //             }
    //         })
    //     }
    //     if (!inView) {
    //         animationTitle.start({
    //             y: '50px',
    //             opacity: 0,
    //         })
    //         animationContent.start({
    //             y: '50px',
    //             opacity: 0
    //         })
    //         animationImage.start({
    //             y: '50px',
    //             opacity: 0,
    //             transition: {
    //                 ease: 'easeOut', duration: 1
    //             }
    //         })
    //     }
    // }, [inView])

    return (
        <MaxWidthContainer backgroundColor={backgroundColor} >
            <Container className={className} >
                <div >
                    <LargeTitle
                        theme={theme}
                        color={theme === 'dark' ? 'var(--offWhite)' : "var(--darkGrey)"}
                        align="center">{title}</LargeTitle>
                </div>

                <div >
                    <Subtitle
                        theme={theme}
                        align="center"
                        color="var(--lightGrey)">
                        {content}
                    </Subtitle>
                </div>
                {image &&
                    <div>
                        <ImageContainer
                            className="image-animation">
                            <Image
                                src={image}
                                alt={content}
                                width="100"
                                height="160"
                                layout="responsive"
                                quality="100"
                            />
                        </ImageContainer>
                    </div>
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