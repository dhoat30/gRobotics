import React from 'react'
import VerticleNavbar from '../../UI/Footer/VerticalNavbar/VerticleNavbar'
import MediumFonts from '../../UI/Typography/Paragraph/MediumFonts'
import styled from 'styled-components'
const menuItems = [
    {
        name: "Contact",
        link: "/contact"
    },
    {
        name: "Services",
        link: "/services"
    },
    {
        name: "Privacy Policy",
        link: "/privacy-policy"
    },
    {
        name: "Terms & Condition",
        link: "/terms-condition"
    }
]

function UsefulLinks() {
    return (
        <Container>
            <MediumFonts color="var(--offWhite)"> Useful Links</MediumFonts>
            <VerticleNavbar menuItems={menuItems}></VerticleNavbar>
        </Container>
    )
}

export default UsefulLinks
const Container = styled.div`
min-width: 200px;
margin-bottom: 20px;
`