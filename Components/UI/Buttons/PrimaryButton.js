import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

function PrimaryButton({ children, className }) {
    const clickHandler = () => {
        let tra = {
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }
    }
    return (
        <Button
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            onClick={clickHandler}
            className={className}>
            {children}
        </Button>
    )
}

export default PrimaryButton

const Button = styled.button`
border: 1px solid var(--green);
background: var(--green);
color: white;
padding: 5px 30px;
margin-top: 20px;
&:hover{ 
    background: var(--darkGreen);

}
`