import cookie from 'cookie'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import HomePage from '../Components/Pages/HomePage/HomePage'
import getPage from '../util/get-page'
import getRobot from '../util/get-robot'
import getHomeRobot from '../util/get-home-robot'
import SEO from '../Components/SEO'
import getHeroImage from '../util/get-hero-images'

export default function Home(props) {
  const seo = {
    title: "G Robotics |  Browse Robots For Restaurants, Hospitals & Warehouses",
    description: "International High-tech Enterprise that integrates R&D, design, production, and sales businesses of catering service robots together."
  }
  return (
    < React.Fragment >
      <SEO
        seo={seo}
      />

      <HomePage
        kettyBot={props.kettyBot}
        bellaBot={props.bellaBot}
        puduBot={props.puduBot}
        holaBot={props.holaBot}
        heroImages={props.heroImage}
        steps={props.steps[0].acf.steps}
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
  const heroImages = await getHeroImage()
  const steps = await getPage('robot-installation-steps')
  return {
    props: {
      // homePage: homePage[0],
      kettyBot: kettyBot[0],
      bellaBot: bellaBot[0],
      puduBot: puduBot[0],
      holaBot: holaBot[0],
      heroImage: heroImages,
      steps: steps
    },
    revalidate: 86400
  }

}