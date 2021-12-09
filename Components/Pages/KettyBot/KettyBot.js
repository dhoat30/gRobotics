import React from 'react'
import HeroImageText from '../../UI/Hero/HeroImageText'
import styled from 'styled-components'
import Video from '../../UI/Video/Video'
import VerticleLayout from '../../UI/TextImageLayouts/VerticleLayout'
import HeroSection from '../HomePage/HeroSection/HeroSection'
import Features from './Features/Features'
import VideoText from '../../UI/Video/VideoText'
import VideoSection from './VideoSection/VideoSection'
import ImageSection from './ImageSection/ImageSection'
import LeaseLayout from '../../UI/LeaseLayout/LeaseLayout'
function KettyBot({ robotData }) {
    console.log(robotData.acf.robot_flexible_content)
    const kettyBot = robotData.acf.robot_flexible_content
    return (

        <Container className="ketty-bot-page">
            <HeroSection
                title={kettyBot[0].title}
                subtitle={kettyBot[0].subtitle}
                image={kettyBot[0].desktop_image}
                backgroundColor="#FBFBFC"
                flex="column"
                imageHeight="100"
                imageWidth="100"
                showLink={false}
            />
            <Video
                video={kettyBot[1].video}
            />
            <Features
                backgroundColor="var(--offWhite) "
                image={kettyBot[2].image}
                images={kettyBot[2].images}
            />
            <VideoText
                title={kettyBot[3].title}
                content={kettyBot[3].video_content}
                video={kettyBot[3].video}
                backgroundColor="var(--offWhite)"

            />
            <VideoText
                title={kettyBot[4].title}
                content={kettyBot[4].video_content}
                video={kettyBot[4].video}
                backgroundColor="var(--offWhite)"

            />
            <VideoText
                title={kettyBot[5].title}
                content={kettyBot[5].video_content}
                video={kettyBot[5].video}
                backgroundColor="var(--black)"
                theme="dark"

            />
            <VideoSection
                title={kettyBot[7].title}
                content={kettyBot[7].video_content}
                video={kettyBot[7].video}
                backgroundColor="var(--offWhite)"
            />
            <VideoSection
                title={kettyBot[8].title}
                content={kettyBot[8].video_content}
                video={kettyBot[8].video}
                backgroundColor="var(--offWhite)"
            />

            <ImageSection
                title={kettyBot[9].title}
                content={kettyBot[9].content}
                image={kettyBot[9].image}
                backgroundColor="var(--offWhite)"
            />
            <VideoText
                title={kettyBot[10].title}
                content={kettyBot[10].video_content}
                video={kettyBot[10].video}
                backgroundColor="var(--offWhite)"
            />
            <VideoText
                title={kettyBot[11].title}
                content={kettyBot[11].video_content}
                video={kettyBot[11].video}
                backgroundColor="var(--offWhite)"
            />

            <LeaseLayout leaseOptions={robotData.acf.lease} />
        </Container>

    )
}

export default KettyBot
const Container = styled.section``
const VerticleLayoutStyle = styled(VerticleLayout)`
padding-bottom: 0;
`
const Flex = styled.div`
display: flex;
padding: 50px 0;
justify-content: center;
@media (max-width: 1000px){ 
    flex-wrap: wrap;
}
`
