import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import getRobot from '../util/get-robot'
import PuduBot from '../Components/Pages/PuduBot/PuduBot'
export default function PuduBotPage(props) {
    return (
        < React.Fragment >
            <Head>
                {/* add seo in here */}
                <title>G Robotics | HolaBot</title>
            </Head>
            <h1>Coming Soon </h1>
            {/* <PuduBot robotData={props.robotData} /> */}
        </React.Fragment >
    )
}

export async function getStaticProps(context) {
    // get home page data using category from hero images 
    const services = await getRobot('holabot')
    return {
        props: {
            robotData: services[0]
        },
        revalidate: 10
    }
}