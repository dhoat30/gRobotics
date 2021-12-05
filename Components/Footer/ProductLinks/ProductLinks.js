import React from 'react'
import MediumFonts from '../../UI/Typography/Paragraph/MediumFonts'
import styled from 'styled-components'
import VerticleNavbar from '../../UI/Footer/VerticalNavbar/VerticleNavbar'
const menuItems = [
    {
        name: "PuduBot",
        link: '/pudu-bot'
    },
    {
        name: "KettyBot",
        link: '/ketty-bot'
    },
    {
        name: "BellaBot",
        link: '/bella-bot'
    },
    {
        name: "HollaBot",
        link: '/holla-bot'
    }
]
function ProductLinks() {

    return (
        <Container>
            <MediumFonts color="var(--offWhite)">Products</MediumFonts>
            <VerticleNavbar menuItems={menuItems} />
        </Container>
    )
}

export default ProductLinks
const Container = styled.div`
min-width: 200px;
margin-bottom: 20px;
`