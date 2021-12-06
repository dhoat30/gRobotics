import React from 'react'
import styled from 'styled-components'
const MaxWidthContainer = React.forwardRef(({ children, backgroundColor, className }, ref) => {
    return (
        <Section backgroundColor={backgroundColor} className={className} ref={ref}>
            <Container>
                {children}
            </Container>
        </Section>
    )
})

export default MaxWidthContainer

const Section = styled.section`
background: ${props => props.backgroundColor ? props.backgroundColor : "var(--darkGrey)"};
`

const Container = styled.div`
max-width: 1650px;
margin: 0 auto;
padding: 0 10px;
`