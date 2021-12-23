import React from 'react'
import styled from 'styled-components'
function HeroVideo() {
    return (

        <Container>
            <IFrameStyle src="https://iframe.videodelivery.net/d276a0e5eb68f770ffdbbd346d547d10?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fvideodelivery.net%2Fd276a0e5eb68f770ffdbbd346d547d10%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></IFrameStyle>
        </Container>


    )
}

export default HeroVideo
const Container = styled.div`
position: relative;
 padding-top: 56.25%;
`
const IFrameStyle = styled.iframe`
border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;
`