import React from 'react'
import styled from 'styled-components'
import ExtraLargeTitle from '../../../UI/Typography/Titles/ExtraLargeTitle'
import Image from 'next/image'
import ColumnTitle from '../../../UI/Typography/Titles/ColumnTitle'
import Link from 'next/link'
import AnchorButton from '../../../UI/Buttons/AnchorButton'
function HeroSection({ image, title, subtitle, imageWidth, imageHeight, backgroundColor, color, theme }) {
    console.log(theme)
    return (
        <Container backgroundColor={backgroundColor}>
            <MaxWidth>
                <Content>
                    <ExtraLargeTitle align="center" color={color}>{title}</ExtraLargeTitle>
                    <ColumnTitleSytle align="center" color={color}>{subtitle}</ColumnTitleSytle>
                    <Link href="/kettybot" passHref><AnchorButton align="center">Learn More</AnchorButton></Link>
                </Content>
                <ImageContainer>
                    <Image src={image}
                        layout="responsive"
                        width="100"
                        height="100"
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
padding: 50px 0;
`
const ColumnTitleSytle = styled(ColumnTitle)`
margin-top: 40px;

`
const Content = styled.div`
`

const ImageContainer = styled.div`
display: block;
    height: 90%;
    width: 600px;
    /* position: relative; */
    margin: 20px auto 0 auto;
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