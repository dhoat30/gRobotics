import React from 'react'
import HeroImageText from '../../UI/Hero/HeroImageText'
import styled from 'styled-components'
import Video from '../../UI/Video/Video'
import VerticleLayout from '../../UI/TextImageLayouts/VerticleLayout'
import VideoText from '../../UI/Video/VideoText'
import HorizontalLayout from '../../UI/TextImageLayouts/HorizontalLayout'
import LeaseLayout from '../../UI/LeaseLayout/LeaseLayout'
import Capacity from './Capacity/Capacity'
import WaterProof from './WaterProof/WaterProof'
import MaxWidthContainer from '../../UI/MaxWidthContainer/MaxWidthContainer'
import RowTitle from '../../UI/Typography/Titles/RowTitle'
import Process from './Process/Process'
import Specifications from '../../UI/Specifications/Specifications'

function HolaBot({ robotData }) {

    if (!robotData) {
        return null
    }

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

            <HorizontalLayout
                title={robotData.acf.robot_flexible_content[3].title}
                content={robotData.acf.robot_flexible_content[3].video_content}
                video={robotData.acf.robot_flexible_content[3].video}
                backgroundColor="var(--black)"
                theme='dark'
                color="var(--offWhite)"
            />
            <HorizontalLayout
                title={robotData.acf.robot_flexible_content[4].title}
                content={robotData.acf.robot_flexible_content[4].video_content}
                video={robotData.acf.robot_flexible_content[4].video}
                backgroundColor="var(--black)"
                theme='dark'
                color="var(--offWhite)"
            />
            <WaterProof
                title={dataArray[5].title}
                content={dataArray[5].content}
                image={dataArray[5].image}
                backgroundColor="var(--darkGrey)"
                theme="dark"
            />

            <MaxWidthContainerStyle
                backgroundColor="var(--black)"
            >
                <RowTitle color="var(--offWhite)" align="center">Business Process Presentation</RowTitle>
                <Process
                    subtitle={robotData.acf.robot_flexible_content[6].content}
                    image={robotData.acf.robot_flexible_content[6].image}
                    theme="dark"
                />
                <Process
                    subtitle={robotData.acf.robot_flexible_content[7].content}
                    image={robotData.acf.robot_flexible_content[7].image}
                    theme="dark"
                />
            </MaxWidthContainerStyle>
            <Specifications
                image={dataArray[8].image}
                specsArray={dataArray[8].robot_specs}
                backgroundColor="var(--darkGrey)"
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
const MaxWidthContainerStyle = styled(MaxWidthContainer)`
padding: 100px 0;
`