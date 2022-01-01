import React from 'react'
import LargeTitle from '../../../UI/Typography/Titles/LargeTitle'
import styled from 'styled-components'
import ColumnTitle from '../../../UI/Typography/Titles/ColumnTitle'
import Subtitle from '../../../UI/Typography/Titles/Subtitle'
import MaxWidthContainer from '../../../UI/MaxWidthContainer/MaxWidthContainer'
import RowTitle from '../../../UI/Typography/Titles/RowTitle'

function VideoSection({ video, title, content, backgroundColor, theme, flex }) {
    let titleColor = theme === 'dark' ? "var(--offWhite)" : "var(--darkGrey)"
    return (
        <MaxWidthContainer backgroundColor={backgroundColor}>
            <Container>
                <Content>

                    {title && <RowTitle>{title}</RowTitle>}
                    <ColumnTitleStyle
                        theme={theme}
                        color="var(--lightGrey)">{content}</ColumnTitleStyle>
                    <Margin />
                </Content>
                <VideoContainer>
                    <Video dangerouslySetInnerHTML={{ __html: video }}>
                    </Video>
                </VideoContainer>
            </Container>
        </MaxWidthContainer>
    )
}

export default VideoSection
const Container = styled.section`
padding: 100px 0 100px 0;
margin: 0 auto 0 auto;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
@media (max-width: 1000px ){ 
    padding: 50px 0 50px 0;

}
`
const Video = styled.div`

`
const Margin = styled.div`
margin-top: 50px;
`
const ColumnTitleStyle = styled(ColumnTitle)`
margin-top: 10px;
`
const Content = styled.div`
width: 33%;
@media (max-width: 1000px ){ 
    width: 100%;
}
`
const VideoContainer = styled.div`
width: 65%;
@media (max-width: 1000px ){ 
    width: 100%;
}

`