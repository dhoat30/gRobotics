import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import MediumFonts from '../../UI/Typography/Paragraph/MediumFonts'
function GetSocial({ facebook, instagram }) {
    return (
        <div>
            <MediumFonts color="var(--offWhite)">Get Social</MediumFonts>

            <Navbar>
                <li>
                    <Anchor href={facebook} target="_blank">
                        <IconStyle icon={faFacebookSquare} />
                    </Anchor>
                </li>
                <li>
                    <Anchor href={instagram} target="_blank">
                        <IconStyle icon={faInstagram} />
                    </Anchor>
                </li>
            </Navbar>
        </div>
    )
}

export default GetSocial

const Navbar = styled.ul`
margin-top: 0;
display: flex; 
`
const Anchor = styled.a`
color: var(--fontGrey);
&:hover{ 
    color: white;
}
font-size: 2rem;
margin-right: 5px;
`
const IconStyle = styled(FontAwesomeIcon)`

`