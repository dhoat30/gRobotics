import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import MaxWidthContainer from '../../../../UI/MaxWidthContainer/MaxWidthContainer'
import RowTitle from '../../../../UI/Typography/Titles/RowTitle'
import Subtitle from '../../../../UI/Typography/Titles/Subtitle'

function SmartExpressions({ data, backgroundColor, theme }) {
    console.log(data)
    return (
        <MaxWidthContainer backgroundColor={backgroundColor}>
            <Container>
                <Image src={data.images[0].image}
                    layout="fixed"
                    width="100"
                    height="100"
                />

                <RowTitle
                    align="center">
                    {data.title}
                </RowTitle>

                <SubtitleStyle color="var(--fontGrey)" align="center">{data.content}</SubtitleStyle>

                <ImageContainer>
                    <Image src={data.images[1].image}
                        layout="fill"
                    />
                </ImageContainer>
            </Container>
            <BackgroundImageContainer>
                <Image src={data.images[2].image}
                    layout="fill"
                />
            </BackgroundImageContainer>

        </MaxWidthContainer>

    )
}

export default SmartExpressions
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 1200px;
margin: 0 auto;
`
const SubtitleStyle = styled(Subtitle)`
margin: 0;
`
const ImageContainer = styled.div`
position: relative;
width: 100%;
max-width: 600px;
height: 600px;
margin-top: 50px;
margin-bottom: -150px;
z-index: 2; 
@media (max-width: 600px){ 
    height: 300px;
    width: 300px;
    margin-bottom: -100px;
}
`
const BackgroundImageContainer = styled.div`
position: absolute;
width: 100%;
left: 0;
height: 100px;
bottom: 0;
z-index: 1; 
@media (max-width: 600px){ 
    height: 70px;
    width: 200%;
}
`