
import React, { useContext, useEffect } from 'react'

import ContactPage from '../Components/Pages/ContactPage/ContactPage'
import getFaq from '../util/get-faq'
import SEO from '../Components/SEO'
import getContactInfo from '../util/get-contact-info'
import ContactInfoContext from '../store/contact-info-context'

export default function Home(props) {
  const seo = {
    title: "Contact Us | G Robotics |  Browse Robots For Restaurants, Hospitals & Warehouses",
    description: "International High-tech Enterprise that integrates R&D, design, production, and sales businesses of catering service robots together."
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
