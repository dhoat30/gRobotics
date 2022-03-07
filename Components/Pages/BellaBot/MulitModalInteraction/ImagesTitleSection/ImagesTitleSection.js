import React from 'react'
import MaxWidthContainer from '../../../../UI/MaxWidthContainer/MaxWidthContainer'
import LargeTitle from '../../../../UI/Typography/Titles/LargeTitle'
import styled from 'styled-components'
import Image from 'next/image'
import Subtitle from '../../../../UI/Typography/Titles/Subtitle'
function ImagesTitleSection({ data, backgroundColor, theme }) {
    return (
        <MaxWidthContainer backgroundColor={backgroundColor}>
            <Container>
                <LargeTitle
                    theme={theme}
                    align="center">
                    {data.title}
                </LargeTitle>
                <Flex>
                    <ColumnContainer>
                        <ImageStyle src={data.images[1].image}
                            alt={data.title}
                            layout="fixed"
                            width="100"
                            height="100"
                        />
                        <SubtitleStyle align="center">Draw</SubtitleStyle>
                    </ColumnContainer>
                    <ColumnContainer>
                        <ImageStyle src={data.images[0].image}
                            alt={data.title}
                            layout="fixed"
                            width="100"
                            height="100"
                        />
                        <SubtitleStyle align="center">Light</SubtitleStyle>
                    </ColumnContainer>
                    <ColumnContainer>
                        <ImageStyle src={data.images[2].image}
                            alt={data.title}
                            layout="fixed"
                            width="100"
                            height="100"
                        />
                        <SubtitleStyle align="center">Touch</SubtitleStyle>
                    </ColumnContainer>
                </Flex>

            </Container>
        </MaxWidthContainer>
    )
}

export default ImagesTitleSection
const Container = styled.div`
padding: 50px 0;
`
const Flex = styled.div`
display: flex;
justify-content: space-around;
max-width: 600px;
margin: 30px auto;
flex-wrap: wrap;
`
const ColumnContainer = styled.div``
const ImageStyle = styled(Image)`
 color: red;
`
const SubtitleStyle = styled(Subtitle)`
margin-top: -15px;
`