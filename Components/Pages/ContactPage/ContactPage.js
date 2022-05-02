import React from 'react'
import MaxWidthContainer from '../../UI/MaxWidthContainer/MaxWidthContainer'
import ContactSection from '../HomePage/ContactSection/ContactSection'
import styled from 'styled-components'
import AccordionComponent from '../../UI/Accordion/Accordion'
import RowTitle from '../../UI/Typography/Titles/RowTitle'
function ContactPage({ faq }) {
    return (
        <MaxWidthContainer backgroundColor="var(--offWhite)">
            <Container>
                <ContactSection
                    title="Contact Us"
                    emailTo="info@grobotics.co.nz"
                    emailRouteUrl="https://greensrobotics.co.nz/wp-json/webduel/v1/contact-email"
                />
            </Container>
            {faq.length === 0 ? null :
                <FAQSection>
                    <RowTitle align="center">FAQ</RowTitle>
                    <AccordionComponent faq={faq} />
                </FAQSection>
            }
        </MaxWidthContainer>
    )
}

export default ContactPage
const Container = styled.div`
padding: 50px 0;
`
const FAQSection = styled.section`
 background: white;
 padding: 100px 50px;
`