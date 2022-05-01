
import React, { useContext, useEffect } from 'react'
import BellaBot from '../../Components/Pages/BellaBot/BellaBot'
import SEO from '../../Components/SEO'
import getRobot from '../../util/get-robot'
import getContactInfo from '../../util/get-contact-info'
import ContactInfoContext from '../../store/contact-info-context'

export default function Home(props) {
    const seo = {
        title: props.bellaBot.yoast_head_json.og_title,
        description: props.bellaBot.yoast_head_json.og_description,
        imageSrc: props.bellaBot.yoast_head_json.og_image[0].url
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
            <BellaBot robotData={props.bellaBot} />

        </React.Fragment >
    )
}

export async function getServerSideProps(context) {
    // get home page data using category from hero images 
    const services = await getRobot('bellabot')
    const contactData = await getContactInfo()

    return {
        props: {
            bellaBot: services[0],
            contactData: contactData[0]

        }
    }
}