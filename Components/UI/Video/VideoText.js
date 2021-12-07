import React from 'react'
import LargeTitle from '../Typography/Titles/LargeTitle'
import styled from 'styled-components'
import ColumnTitle from '../Typography/Titles/ColumnTitle'
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer'
function VideoText({ video, title, content, backgroundColor, theme }) {
    return (
        <MaxWidthContainer backgroundColor={backgroundColor}>
            <Container>
                {title && <LargeTitle align="center">{title}</LargeTitle>}
                <ColumnTitle
                    theme={theme}
                    color="var(--lightGrey)"
                    align="center">{content}</ColumnTitle>
                <Margin />
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
margin: 0 auto 0 auto;
`
const Video = styled.div`
`
const Margin = styled.div`
margin-top: 50px;
`