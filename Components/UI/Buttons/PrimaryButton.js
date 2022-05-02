import React from 'react'
// import { motion } from 'framer-motion'

function PrimaryButton({ children, className, onClick }) {

    return (
        <button
            onClick={onClick}
            style={buttonStyle}

            className={className}>
            {children}
        </button>
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
