import React from 'react'
import styled from 'styled-components'
function PrimaryButton({ children, className }) {
    return (
        <Button className={className}>
            {children}
        </Button>
    )
}

export default PrimaryButton

const Button = styled.button`
border: 1px solid var(--green);
background: var(--green);
color: white;
padding: 5px 50px;
margin-top: 20px;
&:hover{ 
    background: var(--darkGreen);

}
`