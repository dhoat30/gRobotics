import React, { useRef, useEffect } from 'react'
import LargeTitle from '../../../UI/Typography/Titles/LargeTitle'
import styled from 'styled-components'
import MaxWidthContainer from '../../../UI/MaxWidthContainer/MaxWidthContainer'
import Subtitle from '../../../UI/Typography/Titles/Subtitle'
import Image from 'next/image'



function Process({ subtitle, content, image, video, className, theme, backgroundColor }) {

    return (

        <Container className={className} >


            <div >
                <Subtitle
                    theme={theme}
                    align="center"
                    color="var(--offWhite)">
                    {subtitle}
                </Subtitle>
            </div>
            {image &&
                <div>
                    <ImageContainer
                        className="image-animation">
                        <Image
                            src={image}
                            alt={content}
                            layout="fill"
                            quality="100"
                        />
                    </ImageContainer>
                </div>
            }

            <Video dangerouslySetInnerHTML={{ __html: video }}>
            </Video>
        </Container>


    )
}

export default Process

const Container = styled.section`
max-width: 1000px; 
margin: 50px auto 0 auto; 
`
const ImageContainer = styled.div`
width: 100%;
position: relative;
padding-bottom: 60%;
margin-top: 20px;
`
const Video = styled.div`
margin-top: 50px;
`