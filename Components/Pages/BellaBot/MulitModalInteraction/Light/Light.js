import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import MaxWidthContainer from '../../../../UI/MaxWidthContainer/MaxWidthContainer'
import RowTitle from '../../../../UI/Typography/Titles/RowTitle'
import Subtitle from '../../../../UI/Typography/Titles/Subtitle'

function Light({ data, backgroundColor, theme }) {
    let fontColor = theme === "dark" ? "var(--offWhite)" : "var(--darkGrey)"
    console.log(data)
    return (
        <MaxWidthContainer backgroundColor={backgroundColor}>
            <Container>
                <Image src={data.images[0].image}
                    layout="fixed"
                    width="100"
                    height="100"
                    alt={data.title}
                />

                <RowTitle
                    color={fontColor}
                    align="center">
                    {data.title}
                </RowTitle>

                <SubtitleStyle color="var(--fontGrey)" align="center">{data.content}</SubtitleStyle>
                <Flex>
                    <ImageContainer>
                        <Image src={data.images[1].image}
                            layout="responsive"
                            width="100"
                            height="100"
                            alt={data.title}
                        />
                    </ImageContainer>
                    <ImageContainer>
                        <Image src={data.images[2].image}
                            layout="responsive"
                            width="100"
                            height="100"
                            alt={data.title}
                        />
                    </ImageContainer>
                    <ImageContainer>
                        <Image src={data.images[3].image}
                            layout="responsive"
                            width="100"
                            height="100"
                            alt={data.title}
                        />
                    </ImageContainer>
                </Flex>
            </Container>

        </MaxWidthContainer>

    )
}

export default Light
const Container = styled.div`

max-width: 1200px;
margin: 0 auto;
padding: 150px 0 50px 0;
`
const SubtitleStyle = styled(Subtitle)`
margin: 0;
`
const ImageContainer = styled.div`
position: relative;
width: 370px;
height: auto;
margin:  5px;
`
const Flex = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 50px;
`