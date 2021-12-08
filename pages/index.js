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
      />
    </React.Fragment >
  )
}

export async function getServerSideProps(context) {
  // get home page data using category from hero images 
  // const homePage = await getPage('home-page')
  const kettyBot = await getHomeRobot('kettybot')

  return {
    props: {
      // homePage: homePage[0],
      kettyBot: kettyBot[0]
    }
  }

}