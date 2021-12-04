import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

function Logo({ className }) {

    return (
        <Container className={className}>
            <Image
                src="/logo.svg"
                width="100"
                height="100"
                layout="responsive"
                alt="G Robotics Logo"
            />
        </Container>
    )
}

export default Logo

const Container = styled.div`
display: block;
width: 100px;
`
