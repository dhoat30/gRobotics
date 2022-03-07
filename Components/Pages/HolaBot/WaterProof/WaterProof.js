import React, { useRef, useEffect } from 'react'
import LargeTitle from '../../../UI/Typography/Titles/LargeTitle'
import styled from 'styled-components'
import MaxWidthContainer from '../../../UI/MaxWidthContainer/MaxWidthContainer'
import Subtitle from '../../../UI/Typography/Titles/Subtitle'
import Image from 'next/image'



function WaterProof({ title, content, image, video, className, theme, backgroundColor }) {

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

            </Container>
            {image &&
                <div>
                    <ImageContainer>
                        <ImageStyle
                            src={image}
                            alt={title}
                            layout="fill"
                            quality="100"
                        />
                    </ImageContainer>
                </div>
            }

            <Video dangerouslySetInnerHTML={{ __html: video }}>
            </Video>
        </MaxWidthContainer>

    )
}

export default WaterProof

const Container = styled.section`
padding: 100px 0 0 0;
max-width: 1000px; 
margin: 0 auto;
`
const ImageContainer = styled.div`
width: 100%;
position: relative; 
padding-bottom: 55%;
margin-top: 70px;
`
const ImageStyle = styled(Image)`
    /* object-fit: cover; */
`
const Video = styled.div`
margin-top: 0;
`