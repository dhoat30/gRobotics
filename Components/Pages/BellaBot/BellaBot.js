import React from 'react'
import HeroImageText from '../../UI/Hero/HeroImageText'
import LeaseLayout from '../../UI/LeaseLayout/LeaseLayout'
import Specifications from '../../UI/Specifications/Specifications'
import ImageTwoTitleLayout from '../../UI/TextImageLayouts/ImageTwoTitleLayout'
import MultipleImagesLayout from '../../UI/TextImageLayouts/MultipleImagesLayout'
import VerticleLayout from '../../UI/TextImageLayouts/VerticleLayout'
import VideoText from '../../UI/Video/VideoText'
import MultiModalInteraction from './MulitModalInteraction/MultiModalInteraction'
import styled from 'styled-components'
import HorizontalLayout from '../../UI/TextImageLayouts/HorizontalLayout'
import RGBD from './RGBD/RGBD'
function BellaBot({ robotData }) {
    if (!robotData) {
        return null
    }
    const heroData = robotData.acf.robot_flexible_content.filter(item => {
        return item.acf_fc_layout === "hero_section"
    })
    const dataArray = robotData.acf.robot_flexible_content
    return (
        <div>
            <HeroImageText
                image={heroData[0].desktop_image}
                imageContainerWidth="300px"
                imageWidth="100"
                imageHeight="150"
                title={heroData[0].title}
                subtitle={heroData[0].subtitle}
                backgroundColor="var(--darkGrey)"
                color="var(--offWhite)"
            />

            <VideoText
                content={dataArray[1].video_content}
                video={dataArray[1].video}
                backgroundColor="var(--black)"
                theme="dark"
            />
            <VerticleLayoutTop
                title={dataArray[2].title}
                subtitle="Visual Slam"
                content={dataArray[2].content}
                video={dataArray[2].video}
                backgroundColor="var(--darkGrey)"
                theme="dark"
            />
            <VerticleLayoutStyle
                subtitle={dataArray[3].title}
                video={dataArray[3].video}
                backgroundColor="var(--darkGrey)"
                theme="dark"
            />
            <MultipleImagesLayout
                title={dataArray[4].title}
                content={dataArray[4].content}
                images={dataArray[4].images}
                theme="dark"
                backgroundColor="var(--black)"
            />
            <VerticleLayout
                title={dataArray[5].title}
                content={dataArray[5].video_content}
                video={dataArray[5].video}
                backgroundColor="var(--darkGrey)"
                theme="dark"
            />
            <ImageTwoTitleLayout
                firstTitle={dataArray[6].title_subtitle[0].title}
                firstSubtitle={dataArray[6].title_subtitle[0].subtitle}
                secondTitle={dataArray[6].title_subtitle[1].title}
                secondSubtitle={dataArray[6].title_subtitle[1].subtitle}
                video={dataArray[6].video}
                backgroundColor="#080808"
                theme="dark"
            />
            <ImageTwoTitleLayout
                firstTitle={dataArray[7].title_subtitle[0].title}
                firstSubtitle={dataArray[7].title_subtitle[0].subtitle}
                secondTitle={dataArray[7].title_subtitle[1].title}
                secondSubtitle={dataArray[7].title_subtitle[1].subtitle}
                video={dataArray[7].video}
                backgroundColor="#080808"
                theme="dark"
            />

            <MultiModalInteraction
                robotData={dataArray}
            />
            <HorizontalLayout
                theme="dark"
                title={dataArray[12].title}
                content={dataArray[12].content}
                image={dataArray[12].image}
                backgroundColor="var(--black)"
                color="var(--offWhite)"
            />
            <HorizontalLayout
                theme="dark"
                title={dataArray[13].title}
                content={dataArray[13].content}
                image={dataArray[13].image}
                backgroundColor="var(--black)"
                color="var(--offWhite)"
                flipFlex="true"
            />


            <RGBDStyle
                title={dataArray[14].title}
                content={dataArray[14].content}
                image={dataArray[14].image}
                backgroundColor="var(--lightBlack)"
                theme="dark"
            />

            <RGBDStyle
                title={dataArray[15].title}
                content={dataArray[15].content}
                image={dataArray[15].image}
                backgroundColor="var(--lightBlack)"
                theme="dark"
            />

            <Specifications
                image={dataArray[16].image}
                specsArray={dataArray[16].robot_specs}
                backgroundColor="var(--darkGrey)"
                theme="dark"
            />


            <LeaseLayout leaseOptions={robotData.acf.lease} />
        </div>
    )
}

export default BellaBot
const VerticleLayoutStyle = styled(VerticleLayout)`
padding: 20px 0 100px 0;
`
const VerticleLayoutTop = styled(VerticleLayout)`
padding-bottom: 0;
`
const RGBDStyle = styled(RGBD)`

`