import React, { useState } from 'react';
import Layout from '../Components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import '../Components/Layout.css'
import Head from 'next/head'
import { ContactInfoContextProvider } from '../store/contact-info-context'
import { HeroImageContextProvider } from '../store/hero-image-context';
import { LoadingContextProvider } from '../store/loading-context'
import Router from 'next/router'
import LoadingOverlay from '../Components/UI/LoadingOverlay/LoadingOverlay';

function MyApp({ Component, pageProps }) {
  const [showLoading, setShowLoading] = useState(false)

  // show loading overlay
  Router.events.on('routeChangeStart', (url) => {
    console.log(url)
    setShowLoading(true)
  })

  // hide  loading overlay 
  Router.events.on('routeChangeComplete', (url) => {
    console.log(url)
    setShowLoading(false)
  })
  return (
    <React.Fragment>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <Component {...pageProps} />
          <LoadingOverlay show={showLoading} />
        </Layout>
      </ThemeProvider>

    </React.Fragment>
  )
}

export default MyApp

const theme = {
  colors: {
    primary: "#fafafa",
  },

};
const GlobalStyle = createGlobalStyle`

* {
        box-sizing: border-box !important;
      }

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box !important;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth; 
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: hsla(0, 0%, 0%, 0.8);
  font-family: "Source Sans Pro", sans-serif;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
    padding: 0;
}



/* custom styling  */
.row-container {
  padding: 0 20px;
  max-width: 100% !important;
}

/* font weight */
.black {
  font-weight: 900;
}
.bold {
  font-weight: 700;
}
.medium {
  font-weight: 500;
}
.semi-bold {
  font-weight: 600;
}
.regular {
  font-weight: 400;
}
.light {
  font-weight: 300;
}
.thin {
  font-weight: 100;
}

/* background colors */
/* font colors */
.light-grey {
  color: #888888;
}
.black {
  color: black;
}
.blue {
  color: #007272;
}
.white {
  color: white;
}
.dark-grey {
  color: #474747;
}

/* flex containers */
.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.justify-center {
  justify-content: center;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-between {
  justify-content: space-between;
}

.align-center {
  align-items: center;
}
/* positions  */
.position-relative {
  z-index: 5;
  position: relative;
}
/* font size */
.large-size {
  font-size: 3rem;
  line-height: 4rem;
}
.column-size {
  font-size: 1.5rem;
  margin: 0;
}
.paragraph-size {
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5rem;
}
.small-size {
  font-size: 0.8rem;
  margin: 0;
}
@media (max-width: 600px) {
  .large-size {
    font-size: 2rem;
  }
}
/* text align */
.center-align {
  text-align: center !important;
}
/* box shadow */
.box-shadow {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
}

/* margins */
.margin-auto {
  margin: 0 auto !important;
}
.margin-row-v {
  margin: 50px 0;
}
.margin-element-v {
  margin: 10px 0;
}
.padding-element-v {
  padding: 10px 0;
}

/* card border radius */
.card-border-radius {
  border-radius: 16px;
}

/* width styling */
.fullWidth {
  display: block;
  width: 100%;
  margin: 15px auto;
}

`