import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

function MenuLink({ title, link, hideMobileMenu }) {
    const anchorClickHandler = () => {
        hideMobileMenu(false)
    }
    return (
        <List>
            <Link href={link} >
                <Anchor onClick={anchorClickHandler}>
                    {title}
                </Anchor>
            </Link>
        </List>


    )
}

export default MenuLink
const List = styled.li`
    @media (max-width: 1000px){ 
        border-bottom: 1px solid var(--lightGrey);
        margin: 0 10px;
      
    }
`
const Anchor = styled.a`
color: white;
margin-left: 50px;
cursor: pointer; 
&:hover{ 
    color: var(--lightGrey); 
}
@media (max-width: 1000px){ 
       margin-left: 0;
       padding: 10px 10px;
       display: block;
    }

`
