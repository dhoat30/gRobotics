
import React, { useContext, useEffect } from 'react'

import ContactPage from '../Components/Pages/ContactPage/ContactPage'
import getFaq from '../util/get-faq'
import SEO from '../Components/SEO'
import getContactInfo from '../util/get-contact-info'
import ContactInfoContext from '../store/contact-info-context'

export default function Home(props) {
  const seo = {
    title: props.contactData.yoast_head_json.title,
    description: props.contactData.yoast_head_json.description,
    imageSrc: props.contactData.yoast_head_json.og_image && props.contactData.yoast_head_json.og_image[0].url
  }
  const contactInfoCtx = useContext(ContactInfoContext)

  useEffect(() => {
    contactInfoCtx.getContactData(props.contactData)
  }, [])

  return (
    < React.Fragment >
      <SEO seo={seo} />
      <ContactPage faq={props.faq} />
    </React.Fragment >
  )
}

export async function getServerSideProps(context) {
  // get home page data using category from hero images 
  const services = await getFaq()
  const contactData = await getContactInfo()
  return {
    props: {
      faq: services,
      contactData: contactData[0]

    },

  }
}
