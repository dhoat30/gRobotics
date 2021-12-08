import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import styled from 'styled-components';
function AccordionComponent({ faq }) {
    if (faq.length === 0) {
        return null
    }
    const faqs = faq.map((item, index) => {
        return <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header>{item.title.rendered}</Accordion.Header>
            <Accordion.Body>
                {item.acf.answer}
            </Accordion.Body>
        </Accordion.Item>
    })
    return (
        <Container>
            <Accordion >
                {faqs}
            </Accordion>
        </Container>

    )
}

export default AccordionComponent

const Container = styled.div`
max-width: 1000px;
margin: 30px auto 0 auto;
`