import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

function PrimaryButton({ children, className }) {
    const [clicked, setClicked] = useState(false)
    const variants = {
        click: {
            scale: 1.2
        },
        unClicked: {
            scale: 1
        }
    }
    const mouseUpHandler = () => {
        setTimeout(() => {
            setClicked(false)
        }, 0.2)
    }
    return (
        <motion.button style={buttonStyle}
            whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px var(--green)"
            }}
            className={className}>
            {children}
        </motion.button>
    )
}

export default PrimaryButton
const buttonStyle = {
    border: "1px solid var(--green)",
    background: "var(--green)",
    color: "white",
    padding: "5px 30px",
    marginTop: "20px"
}
// const Button = styled.button`
// border: 1px solid var(--green);
// background: var(--green);
// color: white;
// padding: 5px 30px;
// margin-top: 20px;
// &:hover{ 
//     background: var(--darkGreen);

// }
// `