import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

function MenuLink({ title, link }) {
    return (
        <List>
            <Link href={link}>
                <Anchor>
                    {title}
                </Anchor>
            </Link>
        </List>


    )
}

export default MenuLink
const List = styled.li`
display: inline-block;
`
const Anchor = styled.a`
color: white;
margin-left: 50px;
cursor: pointer; 
&:hover{ 
    color: var(--lightGrey); 
}
`
