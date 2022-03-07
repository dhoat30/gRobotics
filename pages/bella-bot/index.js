import cookie from 'cookie'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import BellaBot from '../../Components/Pages/BellaBot/BellaBot'
import SEO from '../../Components/SEO'
import getRobot from '../../util/get-robot'

export default function Home(props) {
    const seo = {
        title: props.bellaBot.yoast_head_json.og_title,
        description: props.bellaBot.yoast_head_json.og_description,
        imageSrc: props.bellaBot.yoast_head_json.og_image[0].url
    }
    return (
        < React.Fragment >
            <SEO
                seo={seo}
            />
            <BellaBot robotData={props.bellaBot} />

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
        revalidate: 604800
    }
}