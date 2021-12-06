import React from 'react'
import LargeTitle from '../Typography/Titles/LargeTitle'
import styled from 'styled-components'
import ColumnTitle from '../Typography/Titles/ColumnTitle'
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer'
function VideoText({ video, title, content }) {
    return (
        <MaxWidthContainer backgroundColor="var(--silver)">
            <Container>
                <LargeTitle align="center">{title}</LargeTitle>
                <ColumnTitle
                    color="var(--lightGrey)"
                    align="center">{content}</ColumnTitle>
                <Video dangerouslySetInnerHTML={{ __html: video }}>
                </Video>
            </Container>
        </MaxWidthContainer>
    )
}

export default VideoText
const Container = styled.section`
padding: 100px 0 100px 0;
max-width: 1000px; 
margin: 20px auto 0 auto;
`
const Video = styled.div`
 margin-top: 50px;
`