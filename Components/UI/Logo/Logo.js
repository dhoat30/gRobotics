import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

function Logo({ className, logo }) {

    return (
        <Container className={className}>
            <ImageStyle
                src={logo}

                layout="fill"
                alt="G Robotics Logo"
            />
        </Container>
    )
}

export default Logo

const Container = styled.div`
width: 210px;
height: 40px;
position: relative;
`
const ImageStyle = styled(Image)`
object-fit: cover;
`