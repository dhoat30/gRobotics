import React from 'react'
import styled from 'styled-components'
import ContactForm from '../../../UI/ContactForm/ContactForm'
import MaxWidthContainer from '../../../UI/MaxWidthContainer/MaxWidthContainer'
import RowTitle from '../../../UI/Typography/Titles/RowTitle'
function ContactSection({ title }) {
    return (
        <MaxWidthContainer backgroundColor="var(--offWhite)">
            <ContactFlex>
                <RowTitle>{title}</RowTitle>
                <ContactContainer>

                    <ContactForm />
                </ContactContainer>

            </ContactFlex>
        </MaxWidthContainer>
    )
}

export default ContactSection
const ContactFlex = styled.div`
display: flex;
padding: 50px 0;
justify-content: space-between;
@media (max-width: 1200px){ 
    flex-wrap: wrap;
}
`
const ContactContainer = styled.div`
width: 60%;
@media (max-width: 1200px){ 
    width: 100%;
    margin-top: 20px;
}
`