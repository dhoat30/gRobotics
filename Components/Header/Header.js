import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Logo from '../UI/Logo/Logo'
import Navbar from './Navbar/Navbar'
import Link from 'next/link'
function Header() {
    return (
        <Section>
            <Container>
                <Navbar />
            </Container>
        </Section>
    )
}

export default Header
const Section = styled.section`
background: var(--black);
padding: 5px 0;
height: 50px;
`
const Container = styled.section`
    max-width: 1650px; 
    margin: 0 auto;
    padding: 0 10px;
`
