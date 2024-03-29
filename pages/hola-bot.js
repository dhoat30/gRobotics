import React, { useContext, useEffect } from 'react'
import getRobot from '../util/get-robot'
import HolaBot from '../Components/Pages/HolaBot/HolaBot'
import SEO from '../Components/SEO'
import getContactInfo from '../util/get-contact-info'
import ContactInfoContext from '../store/contact-info-context'

export default function PuduBotPage(props) {
    const seo = {
        title: props.robotData.yoast_head_json.og_title,
        description: props.robotData.yoast_head_json.og_description,
        imageSrc: props.robotData.yoast_head_json.og_image && props.robotData.yoast_head_json.og_image[0].url
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
            <HolaBot robotData={props.robotData} />
        </React.Fragment >
    )
}

export async function getServerSideProps(context) {
    // get home page data using category from hero images 
    const services = await getRobot('holabot')
    const contactData = await getContactInfo()

    return {
        props: {
            robotData: services[0],
            contactData: contactData[0]

        },

    }
}