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
    link: "/services",
    title: "Services"
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

    if (contactInfoCtx.contactData === 'false') {
        return
    }
    console.log(contactInfoCtx)

    // hide menu on link click
    const linkClickHandler = (value) => {

        setShowMobileMenu(value)
    }
    // map menu array  object
    const menu = menuItems.map(item => {
        return < MenuLink
            hideMobileMenu={linkClickHandler}
            link={item.link}
            title={item.title}
            key={item.link}
        />
    })


    return (
        <NavbarStyle>
            <Link href="/" passHref>
                <a>
                    {contactInfoCtx.contactData ?
                        <Logo logo={contactInfoCtx.contactData.acf.logo} videoLogo={contactInfoCtx.contactData.acf.logo_video} /> :
                        null
                    }
                </a>
            </Link>
            <MenuContainer>
                <MenuListItems>
                    {menu}
                </MenuListItems>
            </MenuContainer>

            {showMobileMenu ?
                <MobileMenuContainer>
                    <MenuListItems >
                        {menu}
                    </MenuListItems>
                </MobileMenuContainer> : null
            }
            <IconStyle style={{ 'fontSize': '2rem', 'width': "20px" }} icon={showMobileMenu ? faTimes : faBars} onClick={() => setShowMobileMenu(showMobileMenu ? false : true)} />
        </NavbarStyle>
    )
}

export default NavbarComponent
const NavbarStyle = styled(Navbar)`
height: 40px;
padding: 0;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
 
`
const MenuContainer = styled.div`
height: 43px; 
display: flex; 
align-items: center; 
@media (max-width: 1000px){ 
    display: none !important;
}
`
const MenuListItems = styled.ul`
display: flex; 
@media(max-width: 1000px ){ 
    flex-direction: column; 
    position: fixed; 
    background: var(--darkGrey);
    width: 100%;
    top: 50px;
    left: 0; 
    bottom: 0;
    height: 100vh;
    z-index: 10;
}
`
const MobileMenuContainer = styled.div`

`
const IconStyle = styled(FontAwesomeIcon)`
    color: white; 
 
    cursor: pointer; 
    @media (min-width: 1000px){ 
        display: none; 
    }
`
