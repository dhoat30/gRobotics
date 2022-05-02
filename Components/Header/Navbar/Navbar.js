import React, { useContext, useState } from 'react'
import styled from 'styled-components'

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
            {showMobileMenu ?


                <CloseIcon

                    onClick={() => setShowMobileMenu(showMobileMenu ? false : true)}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.143 24">
                    <path id="Icon_ionic-ios-close" data-name="Icon ionic-ios-close" d="M23.39,21.072l6.99-6.99a1.638,1.638,0,1,0-2.316-2.316l-6.99,6.99-6.99-6.99a1.638,1.638,0,1,0-2.316,2.316l6.99,6.99-6.99,6.99a1.638,1.638,0,0,0,2.316,2.316l6.99-6.99,6.99,6.99a1.638,1.638,0,0,0,2.316-2.316Z" transform="translate(-11.285 -11.289)" />


                </CloseIcon>
                :
                <IconStyle
                    onClick={() => setShowMobileMenu(showMobileMenu ? false : true)}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.143 24">
                    <g id="Icon_ionic-ios-menu" data-name="Icon ionic-ios-menu" transform="translate(-4.5 -10.125)">
                        <path id="Path_9" data-name="Path 9" d="M43.929,13.554H6.214A1.719,1.719,0,0,1,4.5,11.839h0a1.719,1.719,0,0,1,1.714-1.714H43.929a1.719,1.719,0,0,1,1.714,1.714h0A1.719,1.719,0,0,1,43.929,13.554Z" />
                        <path id="Path_10" data-name="Path 10" d="M43.929,20.3H6.214A1.719,1.719,0,0,1,4.5,18.589h0a1.719,1.719,0,0,1,1.714-1.714H43.929a1.719,1.719,0,0,1,1.714,1.714h0A1.719,1.719,0,0,1,43.929,20.3Z" transform="translate(0 3.536)" />
                        <path id="Path_11" data-name="Path 11" d="M43.929,27.054H6.214A1.719,1.719,0,0,1,4.5,25.339h0a1.719,1.719,0,0,1,1.714-1.714H43.929a1.719,1.719,0,0,1,1.714,1.714h0A1.719,1.719,0,0,1,43.929,27.054Z" transform="translate(0 7.071)" />
                    </g>
                </IconStyle>
            }



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
const IconStyle = styled.svg`
    color: white; 
    width: 30px;
    cursor: pointer; 
        path{ 
        fill: white; 
    }
    
   
    @media (min-width: 1000px){ 
        display: none; 
    }
`
const CloseIcon = styled(IconStyle)`

`