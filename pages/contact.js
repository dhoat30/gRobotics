import cookie from 'cookie'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import HomePage from '../Components/Pages/HomePage/HomePage'
import getPage from '../util/get-page'
import getRobot from '../util/get-robot'
import getHomeRobot from '../util/get-home-robot'
import ContactPage from '../Components/Pages/ContactPage/ContactPage'
import getFaq from '../util/get-faq'

export default function Home(props) {
  return (
    < React.Fragment >
      <Head>
        {/* add seo in here */}
        <title>G Robotics | HolaBot</title>
      </Head>
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
    revalidate: 86400
  }
}
