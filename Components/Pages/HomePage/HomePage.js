import React from 'react'
import HeroImageText from '../../UI/Hero/HeroImageText'
import styled from 'styled-components'
import Video from '../../UI/Video/Video'
import VerticleLayout from '../../UI/TextImageLayouts/VerticleLayout'
import VideoText from '../../UI/Video/VideoText'
import HorizontalLayout from '../../UI/TextImageLayouts/HorizontalLayout'
import LeaseLayout from '../../UI/LeaseLayout/LeaseLayout'
import HeroSection from './HeroSection/HeroSection'
function HomePage({ kettyBot }) {
    console.log(kettyBot.acf)


    return (

        <Container>

            <HeroSection
                image={kettyBot.acf.image}
                title={kettyBot.acf.title}
                subtitle={kettyBot.acf.subtitle}
                backgroundColor="var(--silver)"
                flex="column"
                imageHeight="100"
                imageWidth="100"
            />
            {/* <img src={robotData.kettyBot.acf.robot_flexible_content[0].desktop_image} width="50%" /> */}

        </Container>

    )
}

export default HomePage
const Container = styled.section``
const VerticleLayoutStyle = styled(VerticleLayout)`
padding-bottom: 0;
`