import React from 'react'
import styled from 'styled-components'
function SectionTitle(props) {
    console.log(props.theme)
    return (
        <React.Fragment>
            <Container
                align={props.align}
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
font-size: 4rem;
  line-height: 4rem;
font-weight: ${props => props.fontWeight ? props.fontWeight : "600"};
text-align: ${props => props.align ? props.align : "left"};
color: ${props => props.color ? props.color : "var(--darkGrey)"}; 
@media (max-width: 500px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
}
`
