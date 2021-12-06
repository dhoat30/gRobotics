import React from 'react'
import styled from 'styled-components'
import ExtraLargeTitle from '../Typography/Titles/ExtraLargeTitle'
import LargeTitle from '../Typography/Titles/LargeTitle'
import Subtitle from '../Typography/Titles/Subtitle'
import Image from 'next/image'
function HeroImageText({ image, title, subtitle }) {

    return (
        <Container>
            <MaxWidth>
                <Content>
                    <ExtraLargeTitle>{title}</ExtraLargeTitle>
                    <SubtitleStyle>{subtitle}</SubtitleStyle>
                </Content>
                <ImageContainer>
                    <ImageStyle
                        src={image}
                        layout="responsive"
                        height="100"
                        width="100"
                    />
                </ImageContainer>
            </MaxWidth>
        </Container>
    )
}

export default HeroImageText
const Container = styled.div`
 background-color: var(--silver);
`
const MaxWidth = styled.div`
    max-width: 1500px; 
 margin: 0 auto;
padding: 0 10px;
display: flex;
justify-content: space-between;
align-items: center;
height: 100vh;
max-height: 700px;
@media (max-width: 1200px){ 
    height: 140vh;
    max-height: 1200px;
    flex-direction: column;
   align-items: center;
   justify-content: center;
}
@media (max-width: 600px){ 
    height: 100vh;
    max-height: 1200px;
}
@media (max-width: 450px){ 
    height: auto;
    max-height: 1200px;
    padding: 50px 10px;
}
`
const SubtitleStyle = styled(Subtitle)`
margin-top: 25px;
`
const Content = styled.div`
`

const ImageContainer = styled.div`
    height: 90%;
    width: 600px;
    /* position: relative; */
    align-self: flex-end;
    @media (max-width: 1200px){ 
    align-self: center;
    height: auto;
    width: 100%;
    max-width: 700px;
        margin-top: 20px;
}
`
const ImageStyle = styled(Image)`

`