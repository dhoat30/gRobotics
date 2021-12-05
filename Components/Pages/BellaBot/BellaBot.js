import React from 'react'
import HeroImageText from '../../UI/Hero/HeroImageText'

function BellaBot({ robotData }) {
    console.log(robotData)
    console.log(robotData.acf.robot_flexible_content)
    if (!robotData) {
        return null
    }
    const heroData = robotData.acf.robot_flexible_content.filter(item => {
        return item.acf_fc_layout === "hero_section"
    })
    console.log(heroData)
    return (
        <div>
            <HeroImageText
                image={robotData.acf.robot_flexible_content}
            />
        </div>
    )
}

export default BellaBot
