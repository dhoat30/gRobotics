import cookie from 'cookie'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import HomePage from '../Components/Pages/HomePage/HomePage'
import getPage from '../util/get-page'
import getRobot from '../util/get-robot'

export default function Home(props) {
  console.log(props)
  return (
    < React.Fragment >
      <Head>
        {/* add seo in here */}
        <title>G Robotics | HolaBot</title>
      </Head>
      <HomePage
        robotData={props.homePage}
      />
    </React.Fragment >
  )
}

export async function getServerSideProps(context) {
  // get home page data using category from hero images 
  const homePage = await getPage('home-page')
  let response
  await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=home-page`)
    .then(res => res.json())
    .then(res => response = res)
    .catch(err => response = err)

  return {
    props: {
      homePage: homePage[0],
      response: response
    }
  }


}