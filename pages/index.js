
import React, { useContext, useEffect } from 'react'
import HomePage from '../Components/Pages/HomePage/HomePage'
import getPage from '../util/get-page'
import getHomeRobot from '../util/get-home-robot'
import SEO from '../Components/SEO'
import getHeroImage from '../util/get-hero-images'
import getMedia from '../util/get-media'
import getContactInfo from '../util/get-contact-info'
import ContactInfoContext from '../store/contact-info-context'

export default function Home(props) {
  console.log(props)
  const seo = {
    title: props.homePageSeo.yoast_head_json.title,
    description: props.homePageSeo.yoast_head_json.description,
    imageSrc: props.homePageSeo.yoast_head_json.og_image && props.homePageSeo.yoast_head_json.og_image[0].url
  }

  let allRobots = [
    props.kettyBot,
    props.homePageSeo,
    props.puduBot,
    props.holaBot
  ]
  const contactInfoCtx = useContext(ContactInfoContext)

  useEffect(() => {
    contactInfoCtx.getContactData(props.contactData)
  }, [])


  return (
    < React.Fragment >
      <SEO
        seo={seo}
      />

      <HomePage
        allRobots={allRobots}
        kettyBot={props.kettyBot}
        bellaBot={props.bellaBot}
        puduBot={props.puduBot}
        holaBot={props.holaBot}
        heroImages={props.heroImage}
        steps={props.steps[0].acf.steps}
      // media={props.media}
      />
    </React.Fragment >
  )
}

export async function getServerSideProps(context) {
  // get home page data using category from hero images 
  // const homePage = await getPage('home-page')
  const kettyBot = await getHomeRobot('kettybot')
  const bellaBot = await getHomeRobot('bellabot')
  const puduBot = await getHomeRobot('pudubot')
  const holaBot = await getHomeRobot('holabot')
  const heroImages = await getHeroImage('home-page')
  const steps = await getPage('robot-installation-steps')
  const homePageSeo = await getPage('home-page')
  // const media = await getMedia()
  const contactData = await getContactInfo()

  return {
    props: {
      // homePage: homePage[0],
      kettyBot: kettyBot[0],
      bellaBot: bellaBot[0],
      puduBot: puduBot[0],
      holaBot: holaBot[0],
      heroImage: heroImages,
      steps: steps,
      // media: media,
      contactData: contactData[0],
      homePageSeo: homePageSeo[0]
    },

  }
}