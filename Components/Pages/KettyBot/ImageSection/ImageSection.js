import React from 'react'
import LargeTitle from '../../../UI/Typography/Titles/LargeTitle'
import styled from 'styled-components'
import ColumnTitle from '../../../UI/Typography/Titles/ColumnTitle'
import Subtitle from '../../../UI/Typography/Titles/Subtitle'
import MaxWidthContainer from '../../../UI/MaxWidthContainer/MaxWidthContainer'
import RowTitle from '../../../UI/Typography/Titles/RowTitle'
import Image from 'next/image'

function ImageSection({ image, title, content, backgroundColor, theme, flex }) {
    let titleColor = theme === 'dark' ? "var(--offWhite)" : "var(--darkGrey)"
    return (
        <MaxWidthContainer backgroundColor={backgroundColor}>
            <Container>
                <Content>

                    {title && <LargeTitle align="center">{title}</LargeTitle>}
                    <ColumnTitleStyle
                        align="center"
                        theme={theme}
                        color="var(--lightGrey)">{content}</ColumnTitleStyle>
                    <Margin />
                </Content>
                <ImageContainer>
                    <ImageStyle
                        src={image}
                        layout="fill"
                    />
                </ImageContainer>
            </Container>
        </MaxWidthContainer>
    )
}

export default ImageSection
const Container = styled.section`
padding: 100px 0 100px 0;
margin: 0 auto 0 auto;
max-width: 1000px;
@media (max-width: 1000px){ 
    padding: 50px 0;
}
`

const Margin = styled.div`
margin-top: 50px;
`
const ColumnTitleStyle = styled(ColumnTitle)`
margin-top: 10px;
`
const Content = styled.div`

`
const ImageContainer = styled.div`
position: relative;
width: 100%;
padding-bottom: 60%;

`
const ImageStyle = styled(Image)`
object-fit: cover;
border-radius: 30px;
`