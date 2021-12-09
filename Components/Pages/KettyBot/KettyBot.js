import React from 'react'
import HeroImageText from '../../UI/Hero/HeroImageText'
import styled from 'styled-components'
import Video from '../../UI/Video/Video'
import VerticleLayout from '../../UI/TextImageLayouts/VerticleLayout'
import HeroSection from '../HomePage/HeroSection/HeroSection'
function KettyBot({ robotData }) {
    console.log(robotData.acf.robot_flexible_content)
    const kettyBot = robotData.acf.robot_flexible_content
    return (

        <Container>
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
