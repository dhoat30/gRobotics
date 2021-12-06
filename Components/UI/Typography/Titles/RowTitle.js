import React from 'react'
import styled from 'styled-components'
function SectionTitle(props) {
    return (
        <React.Fragment>
            <Container
                fontWeight={props.fontWeight}
                color={props.color}
                dangerouslySetInnerHTML={{ __html: props.children }}
                showUnderline={props.showUnderline}
                className={props.className}>
            </Container>

        </React.Fragment>
    )
}

export default SectionTitle
const Container = styled.div`
margin: 10px 0;
font-weight: ${props => props.fontWeight ? props.fontWeight : "800"};
text-align: ${props => props.align ? props.align : "left"};
color: ${props => props.color ? props.color : "var(--darkGrey)"}; 
`
