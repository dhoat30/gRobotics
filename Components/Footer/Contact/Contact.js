import React from 'react'
import MediumFonts from '../../UI/Typography/Paragraph/MediumFonts'

import styled from 'styled-components'
import Link from 'next/link'
function Contact({ email, location, phoneNumber }) {
    return (
        <Container>
            <MediumFonts color="var(--offWhite)">Contact</MediumFonts>

            <Navbar>
                <li>
                    <Link href={`tel:${phoneNumber}`} passHref>
                        <Anchor>
                            <IconStyle width="27" height="27" viewBox="0 0 27 27">
                                <path id="Icon_material-local-phone" data-name="Icon material-local-phone" d="M9.93,16.185a22.723,22.723,0,0,0,9.885,9.885l3.3-3.3a1.491,1.491,0,0,1,1.53-.36A17.11,17.11,0,0,0,30,23.265a1.5,1.5,0,0,1,1.5,1.5V30A1.5,1.5,0,0,1,30,31.5,25.5,25.5,0,0,1,4.5,6,1.5,1.5,0,0,1,6,4.5h5.25A1.5,1.5,0,0,1,12.75,6a17.041,17.041,0,0,0,.855,5.355,1.505,1.505,0,0,1-.375,1.53l-3.3,3.3Z" transform="translate(-4.5 -4.5)" />
                            </IconStyle>
                            {phoneNumber}
                        </Anchor>
                    </Link>
                </li>
                <li>
                    <Link href={`mailto:${email}`} passHref>
                        <Anchor>
                            <IconStyle width="30" height="24" viewBox="0 0 30 24">
                                <path id="Icon_material-email" data-name="Icon material-email" d="M30,6H6A3,3,0,0,0,3.015,9L3,27a3.009,3.009,0,0,0,3,3H30a3.009,3.009,0,0,0,3-3V9A3.009,3.009,0,0,0,30,6Zm0,6L18,19.5,6,12V9l12,7.5L30,9Z" transform="translate(-3 -6)" />
                            </IconStyle>


                            {email}
                        </Anchor>
                    </Link>
                </li>
                <li>
                    <Anchor href="https://goo.gl/maps/cS8Q7DLnb3WzTknz6" target="_blank">
                        <IconStyle width="21" height="30" viewBox="0 0 21 30">
                            <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M18,3A10.492,10.492,0,0,0,7.5,13.5C7.5,21.375,18,33,18,33S28.5,21.375,28.5,13.5A10.492,10.492,0,0,0,18,3Zm0,14.25a3.75,3.75,0,1,1,3.75-3.75A3.751,3.751,0,0,1,18,17.25Z" transform="translate(-7.5 -3)" />
                        </IconStyle>

                        {location}
                    </Anchor>
                </li>
            </Navbar>
        </Container>
    )
}

export default Contact
const Container = styled.div`

`
const Navbar = styled.ul`
margin-top: 5px;
`
const Anchor = styled.a`
color: var(--fontGrey);
&:hover{ 
    color: white;
}
&:hover svg{ 
fill: white;
}
`
const IconStyle = styled.svg`
margin-right: 5px;
fill: var(--fontGrey); 
width: 15px;

`