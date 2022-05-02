import React, { useContext, useEffect } from 'react'
import SEO from '../Components/SEO'
import Services from '../Components/Pages/Services/Services'
import getServices from '../util/get-services'
import getFaq from '../util/get-faq'
import getContactInfo from '../util/get-contact-info'
import ContactInfoContext from '../store/contact-info-context'
import getPage from '../util/get-page'
export default function Home(props) {
    const seo = {
        title: props.servicesSeo.yoast_head_json.title,
        description: props.servicesSeo.yoast_head_json.description,
        imageSrc: props.servicesSeo.yoast_head_json.og_image && props.servicesSeo.yoast_head_json.og_image[0].url

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

export async function getServerSideProps(context) {
    const services = await getServices()
    const faq = await getFaq()
    const contactData = await getContactInfo()
    const servicesSeo = await getPage('services')

    return {
        props: {
            services: services,
            faq: faq,
            contactData: contactData[0],
            servicesSeo: servicesSeo[0]

        },

    }

}