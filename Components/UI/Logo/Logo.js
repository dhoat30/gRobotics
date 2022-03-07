import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

function Logo({ className, logo, videoLogo }) {
    console.log(videoLogo)
    return (
        <Container className={className}>
            <ImageStyle
                src={logo}
                layout="fill"
                alt="G Robotics Logo"
            />
            <VideoLogoContainer dangerouslySetInnerHTML={{ __html: videoLogo }}></VideoLogoContainer>
        </Container>
    )
}

export default Logo

const Container = styled.div`
width: 230px;
height: 40px;
position: relative;
`
const ImageStyle = styled(Image)`
object-fit: cover;
`
const VideoLogoContainer = styled.div``