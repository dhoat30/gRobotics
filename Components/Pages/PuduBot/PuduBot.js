import React from 'react'
import HeroImageText from '../../UI/Hero/HeroImageText'
import styled from 'styled-components'
import Video from '../../UI/Video/Video'
import VerticleLayout from '../../UI/TextImageLayouts/VerticleLayout'
import VideoText from '../../UI/Video/VideoText'
import HorizontalLayout from '../../UI/TextImageLayouts/HorizontalLayout'
import LeaseLayout from '../../UI/LeaseLayout/LeaseLayout'
function BellaBot({ robotData }) {
    if (!robotData) {
        return null
    }

    // get hero data
    const heroData = robotData.acf.robot_flexible_content.filter(item => {
        return item.acf_fc_layout === "hero_section"
    })

    return (

        <Container>
            <HeroImageText
                image={heroData[0].desktop_image}
                title={heroData[0].title}
                subtitle={heroData[0].subtitle}
                backgroundColor="var(--silver)"
            />
            <Video
                video={robotData.acf.robot_flexible_content[1].video}
            />

            <VerticleLayoutStyle
                title={robotData.acf.robot_flexible_content[2].title}
                content={robotData.acf.robot_flexible_content[2].content}
                image={robotData.acf.robot_flexible_content[2].image}
                backgroundColor="var(--silver)"
            />
            {/* <VerticleLayoutStyle
                title={robotData.acf.robot_flexible_content[3].title}
                content={robotData.acf.robot_flexible_content[3].content}
                image={robotData.acf.robot_flexible_content[3].image}
            /> */}
            <VideoText
                title={robotData.acf.robot_flexible_content[3].title}
                content={robotData.acf.robot_flexible_content[3].video_content}
                video={robotData.acf.robot_flexible_content[3].video}
                backgroundColor="var(--silver)"
                theme='light'
            />

            <HorizontalLayout
                title={robotData.acf.robot_flexible_content[6].title}
                content={robotData.acf.robot_flexible_content[6].video_content}
                video={robotData.acf.robot_flexible_content[6].video}
            />
            <HorizontalLayout
                title={robotData.acf.robot_flexible_content[7].title}
                content={robotData.acf.robot_flexible_content[7].content}
                image={robotData.acf.robot_flexible_content[7].image}
            />
            <HorizontalLayout
                title={robotData.acf.robot_flexible_content[8].title}
                content={robotData.acf.robot_flexible_content[8].content}
                image={robotData.acf.robot_flexible_content[8].image}
            />
            <LeaseLayout leaseOptions={robotData.acf.lease} />
        </Container>

    )
}

export default BellaBot
const Container = styled.section``
const VerticleLayoutStyle = styled(VerticleLayout)`
padding-bottom: 0;
`