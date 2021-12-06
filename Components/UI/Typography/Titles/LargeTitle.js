import React from 'react'
import styled from 'styled-components'
function LargeTitle(props) {

    return (
        <Container
            dangerouslySetInnerHTML={{ __html: props.children }}
            className={props.className} align={props.align} color={props.color}>
        </Container>
    )
}

export default LargeTitle
const Container = styled.div`
font-size: 6rem !important;
margin: 10px 0;
line-height: 5rem;
color: ${props => props.color ? props.color : 'var(--darkGrey)'};
text-align: ${props => props.align ? props.align : "left"};


`
