import cookie from 'cookie'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import getRobot from '../util/get-robot'

export default function Home(props) {
  console.log(props)
  return (
    < React.Fragment >
      <Head>
        {/* add seo in here */}
        <title>G Robotics | HolaBot</title>
      </Head>
    </React.Fragment >
  )
}

export async function getStaticProps(context) {
  // get home page data using category from hero images 
  const services = await getRobot('bellabot')

  return {
    props: {
      bellaBot: services[0]
    },
    revalidate: 10
  }


}