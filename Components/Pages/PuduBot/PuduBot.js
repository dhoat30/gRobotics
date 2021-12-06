import React from 'react'
import HeroImageText from '../../UI/Hero/HeroImageText'
import styled from 'styled-components'
import VideoText from '../../UI/VideoText/VideoText'
function BellaBot({ robotData }) {
    console.log(robotData)
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
            <VideoText />
        </Container>

    )
}

export default BellaBot
const Container = styled.section``