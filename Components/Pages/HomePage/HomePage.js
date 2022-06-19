import React from 'react'
import HeroImageText from '../../UI/Hero/HeroImageText'
import styled from 'styled-components'
import Video from '../../UI/Video/Video'
import VerticleLayout from '../../UI/TextImageLayouts/VerticleLayout'
import VideoText from '../../UI/Video/VideoText'
import HorizontalLayout from '../../UI/TextImageLayouts/HorizontalLayout'
import LeaseLayout from '../../UI/LeaseLayout/LeaseLayout'
import HeroSection from './HeroSection/HeroSection'
import BotCards from './BotCards/BotCards'
import MaxWidthContainer from '../../UI/MaxWidthContainer/MaxWidthContainer'
import ContactForm from '../../UI/ContactForm/ContactForm'
import RowTitle from '../../UI/Typography/Titles/RowTitle'
import ContactSection from './ContactSection/ContactSection'
import ProductCards from './ProductCards/ProductCards'
import Slider from '../../UI/Slider/Slider'
import Steps from './Steps/Steps'
import RobotList from './RobotList/RobotList'
import Media from './Media/Media'
import ExtraLargeTitle from '../../UI/Typography/Titles/ExtraLargeTitle'
function HomePage({ kettyBot, bellaBot, puduBot, holaBot, heroImages, steps, allRobots, media }) {
    let robots = [kettyBot, bellaBot, puduBot, holaBot]
    const sliderImages = heroImages.map(item => {
        return {
            link: item.acf.link,
            desktopImage: item.acf.desktop_image
        }
    })

    // get hero data for home page
    const heroData = heroImages.filter(item => {
        // console.log(item)
        if (item.slug === "all-robots") {
            return item
        }
    })
    return (

        <Container>

            <Video
                videoFile={heroData[0].acf.video_file}
                video={heroData[0].acf.video} />

            <Slider
                sliderImages={sliderImages}
            />


            {/* <RobotList allRobots={allRobots} /> */}
            <HeroSection
                image={holaBot.acf.image}
                title={holaBot.acf.title}
                subtitle={holaBot.acf.subtitle}
                backgroundColor="#0C0D15"
                flex="column"
                imageHeight="100"
                imageWidth="100"
                color="var(--offWhite)"
                showLink={true}
                link="/hola-bot"
            />
            {/* <img src={robotData.kettyBot.acf.robot_flexible_content[0].desktop_image} width="50%" /> */}
            <MaxWidthContainer backgroundColor="var(--silver)">
                <Heading1>Robots for Restaurants</Heading1>

                <Flex>
                    <BotCards
                        title={bellaBot.acf.title}
                        subtitle={bellaBot.acf.subtitle}
                        image={bellaBot.acf.image}
                        link="/bella-bot"
                    />
                    <BotCards
                        title={puduBot.acf.title}
                        subtitle={puduBot.acf.subtitle}
                        image={puduBot.acf.image}
                        link="/bella-bot"
                    />
                </Flex>
            </MaxWidthContainer>

            <HeroSection
                image={kettyBot.acf.image}
                title={kettyBot.acf.title}
                subtitle={kettyBot.acf.subtitle}
                backgroundColor="#FBFBFC"
                flex="column"
                imageHeight="100"
                imageWidth="100"
                showLink={true}
                link="/ketty-bot"
            />

            <Steps steps={steps} />
            {/* <MaxWidthContainer backgroundColor="white">
                <Media media={media} />
            </MaxWidthContainer> */}
            <ContactSection
                tag="h2"
                title="Get A Quote"
                emailTo="info@grobotics.co.nz"
                emailRouteUrl="https://greensrobotics.co.nz/wp-json/webduel/v1/contact-email"
            />
        </Container>

    )
}

export default HomePage
const Container = styled.section``
const VerticleLayoutStyle = styled(VerticleLayout)`
padding-bottom: 0;
`
const Flex = styled.div`
display: flex;
padding: 0 0 50px 0;
justify-content: center;
@media (max-width: 1000px){ 
    flex-wrap: wrap;
}
`
const Heading1 = styled.h1`
    font-size: 4rem;
    text-align:center; 
    padding:50px 10px 0 10px ;
    font-weight: 700;
    @media(max-width: 1000px){ 
        font-size: 3rem;
    }
`