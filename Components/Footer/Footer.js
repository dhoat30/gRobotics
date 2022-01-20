import React, { useContext } from 'react'
import ContactInfoContext from '../../store/contact-info-context'
import styled from 'styled-components'
import Logo from '../UI/Logo/Logo'
import MaxWidthContainer from '../UI/MaxWidthContainer/MaxWidthContainer'
import ProductLinks from './ProductLinks/ProductLinks'
import UsefulLinks from './UsefulLinks/UsefulLinks'
import Contact from './Contact/Contact'
import GetSocial from './GetSocial/GetSocial'
import Copyright from '../UI/Footer/Copyright'
function Footer() {
    const contactInfoCtx = useContext(ContactInfoContext)
    return (
        <MaxWidthContainer backgroundColor={"var(--darkGrey)"}>
            <Container>
                {contactInfoCtx.contactData ?
                    <LogoStyle logo={contactInfoCtx.contactData.acf.logo} /> :
                    null
                }

                <ProductLinks />
                <UsefulLinks />
                <FlexBox>
                    {contactInfoCtx.contactData &&
                        <Contact
                            phoneNumber={contactInfoCtx.contactData.acf.phone_number}
                            email={contactInfoCtx.contactData.acf.email_address}
                            location={contactInfoCtx.contactData.acf.location}
                        />
                    }
                    <GetSocial
                        facebook="/"
                        instagram="/"
                    />
                </FlexBox>
            </Container>
            {contactInfoCtx.contactData &&
                <Copyright copyright={contactInfoCtx.contactData.acf.copyright} />
            }
        </MaxWidthContainer>
    )
}

export default Footer
const Container = styled.section`
    padding: 50px 0 0 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1300px;
    margin: 0 auto;
`
const FlexBox = styled.div`
display: flex;
flex-direction: column;
height: 180px;
justify-content: space-between;
flex-wrap: wrap;
min-width: 200px;
margin-bottom: 20px;
`
const LogoStyle = styled(Logo)`
margin-bottom: 20px;

`