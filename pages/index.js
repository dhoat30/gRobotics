import cookie from 'cookie'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'

export default function Home(props) {
  return (
    < React.Fragment >
      <Head>
        {/* add seo in here */}
        <title>G Robotics | HolaBot</title>
      </Head>
      <h1>hello</h1>
    </React.Fragment >
  )
}

export async function getStaticProps(context) {
  // get home page data using category from hero images 

  return {
    props: {

      hello: "hello"
    },
    revalidate: 10
  }


}