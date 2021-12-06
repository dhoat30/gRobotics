import React from 'react'
import styled from 'styled-components'

function MediumTitle({ children, align, color, className, fontWeight }) {
    // const lower = props.children.toLowerCase();
    // let text = lower.charAt(0).toUpperCase() + lower.slice(1);
    return (
        <Container
            color={color}
            dangerouslySetInnerHTML={{ __html: children }}
            fontWeight={fontWeight}
            className={className}
            align={align}
        >
        </Container>
    )
}

export default MediumTitle
const Container = styled.h5`
    font-size: 2.3rem;
    font-weight: ${props => props.fontWeight ? props.fontWeight : "500"};
    text-align: ${props => props.align ? props.align : "left"};
    margin: 10px 0;
    text-transform: capitalize;
    color: ${props => props.color ? props.color : "var(--darkGrey)"}
`