import React from 'react'
import HeroImageText from '../../UI/Hero/HeroImageText'
import styled from 'styled-components'
import Video from '../../UI/Video/Video'
import VerticleLayout from '../../UI/TextImageLayouts/VerticleLayout'
import VideoText from '../../UI/Video/VideoText'
import HorizontalLayout from '../../UI/TextImageLayouts/HorizontalLayout'
import LeaseLayout from '../../UI/LeaseLayout/LeaseLayout'
import Capacity from './Capacity/Capacity'
function HolaBot({ robotData }) {
    if (!robotData) {
        return null
    }
    console.log(process.env.url)
    // get hero data
    const heroData = robotData.acf.robot_flexible_content.filter(item => {
        return item.acf_fc_layout === "hero_section"
    })
    const dataArray = robotData.acf.robot_flexible_content

    return (

        <Container>
            <HeroImageText
                image={heroData[0].desktop_image}
                imageContainerWidth="300px"
                imageWidth="100"
                imageHeight="150"
                title={heroData[0].title}
                subtitle={heroData[0].subtitle}
                backgroundColor="var(--black)"
                color="var(--offWhite)"
            />

            <VideoText
                content={dataArray[1].video_content}
                video={dataArray[1].video}
                backgroundColor="var(--darkGrey)"
                theme="dark"
            />


            <Capacity
                title={dataArray[2].title}
                content={dataArray[2].content}
                image={dataArray[2].image}
                backgroundColor="var(--black)"
                theme="dark"
            />
            <LeaseLayout leaseOptions={robotData.acf.lease} />
        </Container>

    )
}

export default HolaBot
const Container = styled.section``
const VerticleLayoutStyle = styled(VerticleLayout)`
padding-bottom: 0;
`