import React from 'react'
import styled from 'styled-components'

const ColumnTitle = React.forwardRef((props, ref) => {
    return (
        <Container
            ref={ref}
            color={props.color}
            dangerouslySetInnerHTML={{ __html: props.children }}
            fontWeight={props.fontWeight}
            className={props.className}
            align={props.align}>
        </Container>
    )
})
export default ColumnTitle

const Container = styled.div`
    font-size: 2rem;
    font-weight: ${props => props.fontWeight ? props.fontWeight : "600"};
    margin: 0;
    text-align: ${props => props.align ? props.align : "left"};
    color: ${props => props.color ? props.color : "var(--darkGrey)"}

`
