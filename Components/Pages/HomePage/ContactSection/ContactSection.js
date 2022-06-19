import React from 'react'
import styled from 'styled-components'
import ContactForm from '../../../UI/ContactForm/ContactForm'
import MaxWidthContainer from '../../../UI/MaxWidthContainer/MaxWidthContainer'
import RowTitle from '../../../UI/Typography/Titles/RowTitle'
function ContactSection({ title, emailTo, emailRouteUrl, tag }) {
    return (
        <MaxWidthContainer backgroundColor="var(--offWhite)">
            <ContactFlex>
                {tag === 'h2' ?
                    <Heading2>
                        {title}
                    </Heading2>
                    : <Title>{title} </Title>

                }
                <ContactContainer>

                    <ContactForm
                        emailTo={emailTo}
                        emailRouteUrl={emailRouteUrl}
                    />
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
const Title = styled.h1`
margin: 10px 0;
    font-size: 4rem;
    line-height: 4rem;
    font-weight: 600;
    text-align: left;
    color: var(--darkGrey);
    @media (max-width: 500px)

{
    font-size: 2.5rem;
    line-height: 2.5rem;
}
`
const Heading2 = styled.h2`
margin: 10px 0;
    font-size: 4rem;
    line-height: 4rem;
    font-weight: 600;
    text-align: left;
    color: var(--darkGrey);
    @media (max-width: 500px)

{
    font-size: 2.5rem;
    line-height: 2.5rem;
}
`