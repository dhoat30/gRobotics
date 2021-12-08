import React from 'react'
import styled from 'styled-components'
function AnchorButton({ children, className, align }) {
    return (
        <Anchor align={align}>
            {children}
        </Anchor>
    )
}

export default AnchorButton
const Anchor = styled.a`
color: var(--green);
font-size: 1.2rem;
display: block;
text-align: ${props => props.align ? props.align : "left"}; 
&:hover{ 
    text-decoration: underline; 
}
`