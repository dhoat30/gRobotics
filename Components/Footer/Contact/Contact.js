import React from 'react'
import MediumFonts from '../../UI/Typography/Paragraph/MediumFonts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/pro-solid-svg-icons'
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
                            <IconStyle icon={faPhoneAlt} />
                            {phoneNumber}
                        </Anchor>
                    </Link>
                </li>
                <li>
                    <Link href={`mailto:${email}`} passHref>
                        <Anchor>
                            <IconStyle icon={faEnvelope} />
                            {email}
                        </Anchor>
                    </Link>
                </li>
                <li>
                    <Anchor href="https://goo.gl/maps/cS8Q7DLnb3WzTknz6" target="_blank">
                        <IconStyle icon={faMapMarkerAlt} />
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
`
const IconStyle = styled(FontAwesomeIcon)`
margin-right: 5px;
`