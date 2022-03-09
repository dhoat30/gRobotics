import cookie from 'cookie'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import HomePage from '../Components/Pages/HomePage/HomePage'
import getPage from '../util/get-page'
import getRobot from '../util/get-robot'
import getHomeRobot from '../util/get-home-robot'
import ContactPage from '../Components/Pages/ContactPage/ContactPage'
import getFaq from '../util/get-faq'
import SEO from '../Components/SEO'

export default function Home(props) {
  const seo = {
    title: "Contact Us | G Robotics |  Browse Robots For Restaurants, Hospitals & Warehouses",
    description: "International High-tech Enterprise that integrates R&D, design, production, and sales businesses of catering service robots together."
  }

  return (
    < React.Fragment >
      <SEO seo={seo} />
      <ContactPage faq={props.faq} />
    </React.Fragment >
  )
}

export async function getStaticProps(context) {
  // get home page data using category from hero images 
  const services = await getFaq()

  return {
    props: {
      faq: services
    },
    revalidate: 10
  }
}
