import React, { useContext, useEffect } from 'react'
import getRobot from '../util/get-robot'
import KettyBot from '../Components/Pages/KettyBot/KettyBot'
import SEO from '../Components/SEO'
import getContactInfo from '../util/get-contact-info'
import ContactInfoContext from '../store/contact-info-context'

export default function KettyBotPages(props) {
    const seo = {
        title: props.kettyBot.yoast_head_json.og_title,
        description: props.kettyBot.yoast_head_json.og_description,
        imageSrc: props.kettyBot.yoast_head_json.og_image[0].url
    }
    const contactInfoCtx = useContext(ContactInfoContext)

    useEffect(() => {
        contactInfoCtx.getContactData(props.contactData)
    }, [])
    return (
        < React.Fragment >
            <SEO seo={seo} />
            <KettyBot robotData={props.kettyBot} />
            {/* ketty bot */}
        </React.Fragment >
    )
}

export async function getServerSideProps(context) {
    // get home page data using category from hero images 
    const kettyBot = await getRobot('kettybot')
    const contactData = await getContactInfo()

    return {
        props: {
            kettyBot: kettyBot[0],
            contactData: contactData[0]

        },

    }
}