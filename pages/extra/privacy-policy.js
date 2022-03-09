import cookie from 'cookie'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import BellaBot from '../../Components/Pages/BellaBot/BellaBot'
import PrivacyPolicy from '../../Components/Pages/PrivacyPolicy/PrivacyPolicy'
import SEO from '../../Components/SEO'
import getPage from '../../util/get-page'
import getRobot from '../../util/get-robot'

export default function Home(props) {
    const seo = {
        title: props.privacyPolicy.yoast_head_json.og_title,
        description: props.privacyPolicy.yoast_head_json.og_description,
    }
    return (
        < React.Fragment >
            <SEO
                seo={seo}
            />
            <PrivacyPolicy privacyPolicy={props.privacyPolicy} />
        </React.Fragment >
    )
}

export async function getStaticProps(context) {
    // get home page data using category from hero images 
    const privacyPolicy = await getPage('privacy-policy')
    return {
        props: {
            privacyPolicy: privacyPolicy[0]
        },
        revalidate: 10
    }
}