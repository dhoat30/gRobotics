import cookie from 'cookie'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import getRobot from '../util/get-robot'
import PuduBot from '../Components/Pages/PuduBot/PuduBot'
import getHomeRobot from '../util/get-home-robot'
import KettyBot from '../Components/Pages/KettyBot/KettyBot'
import SEO from '../Components/SEO'
export default function KettyBotPages(props) {
    const seo = {
        title: props.kettyBot.yoast_head_json.og_title,
        description: props.kettyBot.yoast_head_json.og_description,
        imageSrc: props.kettyBot.yoast_head_json.og_image[0].url
    }
    return (
        < React.Fragment >
            <SEO seo={seo} />
            <KettyBot robotData={props.kettyBot} />
        </React.Fragment >
    )
}

export async function getStaticProps(context) {
    // get home page data using category from hero images 
    const kettyBot = await getRobot('kettybot')
    return {
        props: {
            kettyBot: kettyBot[0]
        },
        revalidate: 86400
    }
}