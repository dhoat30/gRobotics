import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import MaxWidthContainer from '../../../../UI/MaxWidthContainer/MaxWidthContainer'
import RowTitle from '../../../../UI/Typography/Titles/RowTitle'
import Subtitle from '../../../../UI/Typography/Titles/Subtitle'

function Touch({ data, backgroundColor, theme }) {
    let fontColor = theme === "dark" ? "var(--offWhite)" : "var(--darkGrey)"
    return (
        <MaxWidthContainer backgroundColor={backgroundColor}>
            <Container>
                <Image src={data.images[0].image}
                    layout="fixed"
                    width="100"
                    height="100"
                />

                <RowTitle
                    color={fontColor}
                    align="center">
                    {data.title}
                </RowTitle>

                <SubtitleStyle color="var(--fontGrey)" align="center">{data.content}</SubtitleStyle>
                <ImageContainer>
                    <Image src={data.images[1].image}
                        layout="responsive"
                        width="100"
                        height="100"
                    />
                </ImageContainer>


            </Container>

        </MaxWidthContainer>

    )
}

export default Touch
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 1200px;
margin: 0 auto;
padding: 150px 0 50px 0;
`
const SubtitleStyle = styled(Subtitle)`
margin: 0;
`
const ImageContainer = styled.div`
position: relative;
width: 100%;
max-width: 600px;
height: 500px;
margin-top: 50px;

`
