import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import getRobot from '../util/get-robot'
import PuduBot from '../Components/Pages/PuduBot/PuduBot'
import HolaBot from '../Components/Pages/HolaBot/HolaBot'
export default function KettyBotPage(props) {
    return (
        < React.Fragment >
            <Head>
                {/* add seo in here */}
                <title>G Robotics | HolaBot</title>
            </Head>
            <KettyBotPage robotData={props.robotData} />

        </React.Fragment >
    )
}

export async function getStaticProps(context) {
    // get home page data using category from hero images 
    const services = await getRobot('kettybot')

    return {
        props: {
            robotData: services[0]
        },
        revalidate: 10
    }
}