import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Logo from '../UI/Logo/Logo'
import Navbar from './Navbar/Navbar'
import Link from 'next/link'
import ContactInfoContext from '../../store/contact-info-context'
function Header() {
    // contact context 
    const contactInfoCtx = useContext(ContactInfoContext)
    if (contactInfoCtx.contactData) {
        console.log(contactInfoCtx.contactData.acf.logo)
    }
    return (
        <Section>

            <Container>
                <Link href="/" passHref>
                    <a> <Logo /></a>
                </Link>

                <Navbar />
            </Container>

        </Section>
    )
}

export default Header
const Section = styled.section`
border: solid red;
`
const Container = styled.section`
    max-width: 1650px; 
    margin: 0 auto;
    padding: 0 10px;
`
