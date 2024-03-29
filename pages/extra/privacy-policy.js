
import React, { useContext, useEffect } from 'react'
import PrivacyPolicy from '../../Components/Pages/PrivacyPolicy/PrivacyPolicy'
import SEO from '../../Components/SEO'
import getPage from '../../util/get-page'
import getContactInfo from '../../util/get-contact-info'
import ContactInfoContext from '../../store/contact-info-context'

export default function Home(props) {
    const seo = {
        title: props.privacyPolicy.yoast_head_json.og_title,
        description: props.privacyPolicy.yoast_head_json.og_description,
        imageSrc: props.privacyPolicy.yoast_head_json.og_image && props.privacyPolicy.yoast_head_json.og_image[0].url
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
            <PrivacyPolicy privacyPolicy={props.privacyPolicy} />
        </React.Fragment >
    )
}

export async function getServerSideProps(context) {
    // get home page data using category from hero images 
    const privacyPolicy = await getPage('privacy-policy')
    const contactData = await getContactInfo()

    return {
        props: {
            privacyPolicy: privacyPolicy[0],
            contactData: contactData[0]

        }
    }
}