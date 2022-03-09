import cookie from 'cookie'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import getRobot from '../util/get-robot'
import PuduBot from '../Components/Pages/PuduBot/PuduBot'
import getHomeRobot from '../util/get-home-robot'
import SEO from '../Components/SEO'
export default function PuduBotPage(props) {
    console.log(props)
    const seo = {
        title: props.robotData.yoast_head_json.og_title,
        description: props.robotData.yoast_head_json.og_description,
        imageSrc: props.robotData.yoast_head_json.og_image[0].url
    }
    return (
        < React.Fragment >
            <SEO seo={seo} />
            <PuduBot robotData={props.robotData} />
        </React.Fragment >
    )
}

export async function getStaticProps(context) {
    // get home page data using category from hero images 
    const services = await getRobot('pudubot')
    return {
        props: {
            robotData: services[0]
        },
        revalidate: 10
    }
}