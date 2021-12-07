import React from 'react'
import styled from 'styled-components'

function ColumnTitle(props) {
    let colorClass = props.theme === 'dark' ? 'light-strong-color' : null
    return (
        <Container

            color={props.color}
            dangerouslySetInnerHTML={{ __html: props.children }}
            fontWeight={props.fontWeight}
            className={`${props.className} ${colorClass}`}
            align={props.align}>
        </Container>
    )
}
export default ColumnTitle

const Container = styled.div`
  font-size: 2rem;
  line-height: 2.5rem;
    font-weight: ${props => props.fontWeight ? props.fontWeight : "500"};
    margin: 0;
    text-align: ${props => props.align ? props.align : "left"};
    color: ${props => props.color ? props.color : "var(--darkGrey)"}
`
