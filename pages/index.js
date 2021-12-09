import cookie from 'cookie'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import HomePage from '../Components/Pages/HomePage/HomePage'
import getPage from '../util/get-page'
import getRobot from '../util/get-robot'
import getHomeRobot from '../util/get-home-robot'

export default function Home(props) {
  console.log(props)
  return (
    < React.Fragment >
      <Head>
        {/* add seo in here */}
        <title>G Robotics | HolaBot</title>
      </Head>
      <HomePage
        kettyBot={props.kettyBot}
        bellaBot={props.bellaBot}
        puduBot={props.puduBot}
        holaBot={props.holaBot}
      />
    </React.Fragment >
  )
}

export async function getStaticProps(context) {
  // get home page data using category from hero images 
  // const homePage = await getPage('home-page')
  const kettyBot = await getHomeRobot('kettybot')
  const bellaBot = await getHomeRobot('bellabot')
  const puduBot = await getHomeRobot('pudubot')
  const holaBot = await getHomeRobot('holabot')
  return {
    props: {
      // homePage: homePage[0],
      kettyBot: kettyBot[0],
      bellaBot: bellaBot[0],
      puduBot: puduBot[0],
      holaBot: holaBot[0]
    },
    revalidate: 86400
  }

}