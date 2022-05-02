import React from 'react'

import styled from 'styled-components'
import MediumFonts from '../../UI/Typography/Paragraph/MediumFonts'
function GetSocial({ facebook, instagram }) {
    return (
        <div>
            <MediumFonts color="var(--offWhite)">Get Social</MediumFonts>

            <Navbar>
                <li>
                    <Anchor href={facebook} target="_blank">
                        <IconStyle width="31.5" height="31.5" viewBox="0 0 31.5 31.5">
                            <path id="Icon_awesome-facebook-square" data-name="Icon awesome-facebook-square" d="M28.125,2.25H3.375A3.375,3.375,0,0,0,0,5.625v24.75A3.375,3.375,0,0,0,3.375,33.75h9.65V23.041H8.6V18h4.43V14.158c0-4.37,2.6-6.784,6.586-6.784a26.836,26.836,0,0,1,3.9.34V12h-2.2a2.521,2.521,0,0,0-2.842,2.723V18h4.836l-.773,5.041H18.475V33.75h9.65A3.375,3.375,0,0,0,31.5,30.375V5.625A3.375,3.375,0,0,0,28.125,2.25Z" transform="translate(0 -2.25)" />
                        </IconStyle>
                    </Anchor>
                </li>
                <li>
                    <Anchor href={instagram} target="_blank">
                        <IconStyle width="30.849" height="30.848" viewBox="0 0 30.849 30.848">
                            <path id="Icon_metro-instagram" data-name="Icon metro-instagram" d="M28.3,1.928H7.692A5.136,5.136,0,0,0,2.571,7.049V27.655a5.136,5.136,0,0,0,5.121,5.121H28.3a5.136,5.136,0,0,0,5.121-5.121V7.049A5.136,5.136,0,0,0,28.3,1.928Zm-15.852,13.5h11.1a5.874,5.874,0,1,1-11.1,0Zm17.117,0V26.992a1.934,1.934,0,0,1-1.928,1.928H8.355a1.934,1.934,0,0,1-1.928-1.928V15.424H9.443a8.767,8.767,0,1,0,17.1,0l3.016,0Zm0-6.75a.967.967,0,0,1-.964.964H26.671a.967.967,0,0,1-.964-.964V6.748a.967.967,0,0,1,.964-.964H28.6a.967.967,0,0,1,.964.964Z" transform="translate(-2.571 -1.928)" />
                        </IconStyle>

                    </Anchor>
                </li>
            </Navbar>
        </div>
    )
}

export default GetSocial

const Navbar = styled.ul`
margin-top: -10px;
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
const IconStyle = styled.svg`
margin-right: 5px;
fill: var(--fontGrey); 
width: 20px;
&:hover{ 
    fill:white; 
}
`