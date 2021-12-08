import React from 'react'
import styled from 'styled-components'
import RowTitle from '../../../UI/Typography/Titles/RowTitle'
import Subtitle from '../../../UI/Typography/Titles/Subtitle'
import Image from 'next/image'
import Link from 'next/link'
import AnchorButton from '../../../UI/Buttons/AnchorButton'
import ColumnTitle from '../../../UI/Typography/Titles/ColumnTitle'

function BotCards({ title, subtitle, image, link }) {
    return (
        <Container>
            <Content>
                <RowTitle align="center" color="var(--offWhite)">{title}</RowTitle>
                {/* <Subtitle color="var(--offWhite)">{subtitle}</Subtitle> */}
                <ColumnTitle align="center" color="var(--offWhite)">{subtitle}</ColumnTitle>
                <Link href={link} passHref>
                    <AnchorButton align="center">
                        Learn More
                    </AnchorButton>
                </Link>
            </Content>
            <ImageContainer>
                <ImageStyle
                    alt={title}
                    src={image}
                    layout="fill"
                />
            </ImageContainer>
        </Container>
    )
}

export default BotCards
const Container = styled.div`
width: 100%;
height: 700px;
max-width: 600px;
background: var(--black);
padding: 20px 20px;
position: relative;
z-index: 0;
margin: 10px;

@media (max-width: 550px){ 
    height: 400px;
max-width: 600px;
margin: 10px 0;
padding: 20px 0;
}
`
const ImageContainer = styled.div`
width: 100%;
height: 100%;
`
const Content = styled.div`
position: relative;
z-index: 2;
@media (max-width: 550px){ 
    background: rgba(0,0,0,0.8); 
}

`
const ImageStyle = styled(Image)`
object-fit: cover;
`