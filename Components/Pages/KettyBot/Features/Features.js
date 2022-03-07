import React from 'react'
import MaxWidthContainer from '../../../UI/MaxWidthContainer/MaxWidthContainer'
import styled from 'styled-components'
import Image from 'next/image'
import Subtitle from '../../../UI/Typography/Titles/Subtitle'
import Parallax from 'react-rellax'

function Features({ image, images, className, backgroundColor }) {
    const imagesList = images.map(item => {
        console.log(item)
        return <ImageContainer key={item.image.ID}>
            <Image
                src={item.image.url}
                layout="fixed"
                width="50"
                height="50"
                alt={item.image.title}
            />
            <Subtitle align="center" color="var(--fontGrey)">{item.image.title}</Subtitle>

        </ImageContainer>
    })
    return (
        <MaxWidthContainer backgroundColor={backgroundColor}>
            <Container>
                <Flex>
                    {imagesList}
                </Flex>
                <AbsoluteImage>

                    <Image src={image.url}
                        layout="responsive"
                        width="100"
                        height="250"
                    />

                </AbsoluteImage>
            </Container>

        </MaxWidthContainer>

    )
}

export default Features
const Container = styled.div`
padding: 50px 0;
align-items: center;
display: flex;

`
const Flex = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-wrap: wrap;
max-width: 1000px;
/* position: absolute;
top: 50%;
transform: translate(0, -50%); */
`
const ImageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px 10px;
width:200px;
`
const AbsoluteImage = styled.div`

display: block;
width: 400px;

`

const Heading = styled.h1``