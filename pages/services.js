import React, { useContext, useEffect } from 'react'
import SEO from '../Components/SEO'
import Services from '../Components/Pages/Services/Services'
import getServices from '../util/get-services'
import getFaq from '../util/get-faq'
import getContactInfo from '../util/get-contact-info'
import ContactInfoContext from '../store/contact-info-context'

export default function Home(props) {
    console.log(props)
    const seo = {
        title: "G Robotics | Browse Robots For Restaurants, Hospitals & Warehouses",
        description: "International High-tech Enterprise that integrates R&D, design, production, and sales businesses of catering service robots together."
    }
    const contactInfoCtx = useContext(ContactInfoContext)

    useEffect(() => {
        contactInfoCtx.getContactData(props.contactData)
    }, [])
    return (
        < React.Fragment >
            <SEO
                seo={seo}
            />
            <Services
                services={props.services}
                faq={props.faq}
            />
        </React.Fragment >
    )
}

export async function getStaticProps(context) {
    const services = await getServices()
    const faq = await getFaq()
    const contactData = await getContactInfo()

    return {
        props: {
            services: services,
            faq: faq,
            contactData: contactData[0]

        },
        revalidate: 86400
    }

}