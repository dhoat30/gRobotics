import cookie from 'cookie'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import getRobot from '../util/get-robot'
import PuduBot from '../Components/Pages/PuduBot/PuduBot'
import getHomeRobot from '../util/get-home-robot'
import KettyBot from '../Components/Pages/KettyBot/KettyBot'
export default function KettyBotPages(props) {
    return (
        < React.Fragment >
            <Head>
                {/* add seo in here */}
                <title>G Robotics | HolaBot</title>
            </Head>
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