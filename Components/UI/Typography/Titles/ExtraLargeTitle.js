import React from 'react'
import styled from 'styled-components'

function ExtraLargeTitle({ children, align, color, className }) {
    return (
        <Container
            dangerouslySetInnerHTML={{ __html: children }}
            className={className}
            align={align}
            color={color}>
        </Container>
    )
}

export default ExtraLargeTitle
const Container = styled.h1`
font-size: 8rem;
font-weight: 700;
margin: 10px 0;
line-height: 5rem;
color: ${props => props.color ? props.color : 'var(--darkGrey)'};
text-align: ${props => props.align ? props.align : "left"};
@media (max-width: 600px ){ 
   font-size: 5rem;
   line-height: 2rem;

}
@media (max-width: 400px ){ 
   font-size: 4rem;
   line-height: 1rem;

}
`
