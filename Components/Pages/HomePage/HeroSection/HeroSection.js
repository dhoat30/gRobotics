import React from 'react'
import styled from 'styled-components'
import ExtraLargeTitle from '../../../UI/Typography/Titles/ExtraLargeTitle'
import Image from 'next/image'
import ColumnTitle from '../../../UI/Typography/Titles/ColumnTitle'

function HeroSection({ image, title, subtitle, imageWidth, imageHeight, backgroundColor, color }) {
    console.log(image)
    return (
        <Container backgroundColor={backgroundColor}>
            <MaxWidth>
                <Content>
                    <ExtraLargeTitle align="center" color={color}>{title}</ExtraLargeTitle>
                    <ColumnTitleSytle align="center" color={color}>{subtitle}</ColumnTitleSytle>
                </Content>
                <ImageContainer>
                    <Image src={image}
                        layout="fill"
                    />
                </ImageContainer>
            </MaxWidth>
        </Container>
    )
}

export default HeroSection
const Container = styled.div`
 background-color: ${props => props.backgroundColor ? props.backgroundColor : "var(--darkGrey)"};
`
const MaxWidth = styled.div`
max-width: 1500px; 
 margin: 0 auto;
padding: 0 10px;
display: flex;
flex-direction: column;
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
    padding: 50px 10px 0 10px;
}
`
const ColumnTitleSytle = styled(ColumnTitle)`
margin-top: 25px;
`
const Content = styled.div`
`

const ImageContainer = styled.div`
display: block;
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
overflow: hidden;
`
const ImageStyle = styled(Image)`
object-fit: cover;
object-position: top;
`