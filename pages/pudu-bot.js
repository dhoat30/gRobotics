import cookie from 'cookie'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import getRobot from '../util/get-robot'
import PuduBot from '../Components/Pages/PuduBot/PuduBot'
import getHomeRobot from '../util/get-home-robot'
export default function PuduBotPage(props) {
    console.log(props.kettyBot)
    return (
        < React.Fragment >
            <Head>
                {/* add seo in here */}
                <title>G Robotics | HolaBot</title>
            </Head>
            <PuduBot robotData={props.robotData} />
        </React.Fragment >
    )
}

export async function getStaticProps(context) {
    // get home page data using category from hero images 
    const kettyBot = await getHomeRobot('kettybot')
    const services = await getRobot('pudubot')
    return {
        props: {
            robotData: services[0],
            kettyBot: kettyBot[0]
        },
        revalidate: 86400
    }
}