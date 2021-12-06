import React from 'react'
import HeroImageText from '../../UI/Hero/HeroImageText'
import styled from 'styled-components'
import VideoText from '../../UI/Video/VideoText'
import Video from '../../UI/Video/Video'
import VerticleLayout from '../../UI/TextImageLayouts/VerticleLayout'
function BellaBot({ robotData }) {
    console.log(robotData.acf.robot_flexible_content[2])
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
            />
            <Video
                video={robotData.acf.robot_flexible_content[1].video}
            />

            <VerticleLayoutStyle
                title={robotData.acf.robot_flexible_content[2].title}
                content={robotData.acf.robot_flexible_content[2].content}
                image={robotData.acf.robot_flexible_content[2].image}
            />
        </Container>

    )
}

export default BellaBot
const Container = styled.section``
const VerticleLayoutStyle = styled(VerticleLayout)`
padding-bottom: 0;
`