import React from 'react'
import LargeTitle from '../Typography/Titles/LargeTitle'
import styled from 'styled-components'
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer'
import ColumnTitle from '../Typography/Titles/ColumnTitle'
import Image from 'next/image'
function VerticleLayout({ title, content, image, className }) {
    return (
        <MaxWidthContainer backgroundColor="var(--silver)" >
            <Container className={className}>
                <LargeTitle align="center">{title}</LargeTitle>
                <ColumnTitle align="center"
                    color="var(--lightGrey)">
                    {content}
                </ColumnTitle>
                <ImageContainer>
                    <Image
                        src={image}
                        alt={content}
                        width="100"
                        height="100"
                        layout="responsive"
                        quality="100"
                    />
                </ImageContainer>
            </Container>
        </MaxWidthContainer>

    )
}

export default VerticleLayout

const Container = styled.section`
padding: 100px 0 100px 0;
max-width: 1000px; 
margin: 0 auto;
`
const ImageContainer = styled.div`
width: 100%;
max-width: 700px;
margin: 0 auto;
`