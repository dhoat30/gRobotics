import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/pro-duotone-svg-icons'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../../UI/Logo/Logo'
import Link from 'next/link'
import ContactInfoContext from '../../../store/contact-info-context'
import MenuLink from './MenuLink/MenuLink'

const menuItems = [{
    link: "/",
    title: "Home"
},
{
    link: "/bella-bot",
    title: "BellaBot"
},
{
    link: "/pudu-bot",
    title: "PuduBot"
},
{
    link: "/hola-bot",
    title: "HolaBot"
},
{
    link: "/ketty-bot",
    title: "KettyBot"
},
{
    link: "/contact",
    title: "Contact"
}
]

function NavbarComponent() {
    // use state
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    // contact context 
    const contactInfoCtx = useContext(ContactInfoContext)

    // map menu array  object
    const menu = menuItems.map(item => {
        return < MenuLink
            link={item.link}
            title={item.title}
            key={item.link}
        />
    })
    console.log(showMobileMenu)
    return (
        <NavbarStyle>
            <Link href="/" passHref>
                <a>
                    {contactInfoCtx.contactData ?
                        <Logo logo={contactInfoCtx.contactData.acf.logo} /> :
                        null
                    }
                </a>
            </Link>
            <MenuContainer>
                <ul>
                    {menu}
                </ul>
            </MenuContainer>

            {showMobileMenu ?
                <MobileMenuContainer>
                    <ul>
                        {menu}
                    </ul>
                </MobileMenuContainer> : null
            }
            <IconStyle icon={showMobileMenu ? faTimes : faBars} onClick={() => setShowMobileMenu(showMobileMenu ? false : true)} />
        </NavbarStyle>
    )
}

export default NavbarComponent
const NavbarStyle = styled(Navbar)`
padding: 0;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`
const MenuContainer = styled.div`
@media (max-width: 1000px){ 
    display: none;
}
`
const MobileMenuContainer = styled.div`

`
const IconStyle = styled(FontAwesomeIcon)`
    color: white; 
    font-size: 2rem;
    cursor: pointer; 
`
