import React from 'react'
import { InlineWidget } from "react-calendly";
import { openPopupWidget } from "react-calendly";
import HeroVideo from './HeroVideo/HeroVideo';
import RowTitle from '../../UI/Typography/Titles/RowTitle'
import styled from 'styled-components';
import Image from 'next/image'
import MaxWidthContainer from '../../UI/MaxWidthContainer/MaxWidthContainer';
import ColumnTitle from '../../UI/Typography/Titles/ColumnTitle';
import Subtitle from '../../UI/Typography/Titles/Subtitle';
import PrimaryButton from '../../UI/Buttons/PrimaryButton';
import AccordionComponent from '../../UI/Accordion/Accordion'
import Link from 'next/link'
function Services({ services, faq }) {

    const serviceCard = services.reverse().map(item => {
        console.log(item.acf)

        let url = item.acf.link
        return <Card key={item.id}>
            <ImageContainer>
                <ImageStyle
                    src={item.acf.service_card_image}
                    layout="fill"
                    alt={item.title.rendered}
                />
            </ImageContainer>
            <Content>
                <ColumnTitle align="center">{item.title.rendered}</ColumnTitle>
                <Subtitle align="center">{item.acf.service_description}</Subtitle>
                <Subtitle align="center">{item.acf.service_charges}</Subtitle>
                {url ?
                    <ButtonStyle onClick={() => openPopupWidget({ url })}>Book Now</ButtonStyle>
                    :
                    <ButtonStyle><Link href="/contact" passHref>
                        <a style={{ color: "white" }}>Book Now</a>
                    </Link>
                    </ButtonStyle>
                }

            </Content>
        </Card>
    })

    return (
        <React.Fragment>
            {/* <HeroVideo /> */}
            <MaxWidthContainer backgroundColor="var(--white)">
                <ServicesContainer>
                    <RowTitle align="center">Our Services</RowTitle>
                    <Cards>
                        {serviceCard}
                    </Cards>
                </ServicesContainer>

                {faq.length === 0 ? null :
                    <FAQSection>
                        <RowTitle align="center">FAQ</RowTitle>
                        <AccordionComponent faq={faq} />
                    </FAQSection>
                }

            </MaxWidthContainer>
        </React.Fragment>
    )
}

export default Services
const ServicesContainer = styled.div`
 padding: 70px 0;
`
const Cards = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap; 
margin-top: 30px;
`
const Card = styled.li`
width: 100%;
max-width: 450px;
margin: 10px; 
background: var(--offWhite);
@media(max-width: 400px){ 
    margin: 10px 0;
}
`
const ImageContainer = styled.div`
position: relative;
width: 100%;
height: 300px;
`
const Content = styled.div`
 padding: 20px 0;

 
`
const ImageStyle = styled(Image)`
object-fit: cover; 
`
const ButtonStyle = styled(PrimaryButton)`
margin: 0 auto !important;
display: block;
`
const FAQSection = styled.section`
 background: white;
 padding: 100px 50px;
`