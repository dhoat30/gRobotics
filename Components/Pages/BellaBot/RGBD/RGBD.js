import React, { useRef, useEffect } from 'react'
import LargeTitle from '../../../UI/Typography/Titles/LargeTitle'
import styled from 'styled-components'
import MaxWidthContainer from '../../../UI/MaxWidthContainer/MaxWidthContainer'
import ColumnTitle from '../../../UI/Typography/Titles/ColumnTitle'
import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// import { useAnimation } from 'framer-motion'

function RGBD({ title, content, image, video, className, theme, backgroundColor, subtitle }) {

    return (
        <MaxWidthContainer backgroundColor={backgroundColor} >
            <Container className={className} >

                {image &&
                    // <motion.div>
                    <ImageContainer
                        className="image-animation">
                        <ImageStyle
                            src={image}
                            alt={content}
                            width="100"
                            height="100"
                            layout="fill"
                            quality="100"
                        />
                    </ImageContainer>
                    // </motion.div>
                }

                <Video dangerouslySetInnerHTML={{ __html: video }}>
                </Video>

                {/* <motion.div > */}
                <LargeTitle
                    theme={theme}
                    color={theme === 'dark' ? 'var(--offWhite)' : "var(--darkGrey)"}
                    align="center">{title}</LargeTitle>
                {/* </motion.div> */}

                {/* <motion.div > */}
                <ColumnTitleStyle
                    theme={theme}
                    align="center"
                    color="var(--lightGrey)">
                    {content}
                </ColumnTitleStyle>
                {/* </motion.div> */}
                <Sub dangerouslySetInnerHTML={{ __html: subtitle }}></Sub>
            </Container>
        </MaxWidthContainer>

    )
}

export default RGBD

const Container = styled.section`
padding: 0 0 100px 0;
max-width: 1000px; 
margin: 0 auto;
`
const ImageContainer = styled.div`
position: relative; 
width: 100%;
padding-bottom: 70%; 
`
const Video = styled.div`
margin-top: 10px;
`
const Sub = styled.div`
color: white;
text-align: center !important;
font-size: 2rem; 
font-weight: 500;
`
const ColumnTitleStyle = styled(ColumnTitle)`
margin-bottom: 50px;
`
const ImageStyle = styled(Image)`
margin-top: -70px !important;
display: block;
`