import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ContactInfoContext from '../store/contact-info-context'
import LoadingOverlay from './UI/LoadingOverlay/LoadingOverlay'
import LoadingContext from '../store/loading-context'
import Header from './Header/Header'
import getContactInfo from '../util/get-contact-info'
import Footer from './Footer/Footer'


function Layout(props) {
    const contactInfoCtx = useContext(ContactInfoContext)
    const loadingCtx = useContext(LoadingContext)
    const [testState, setTestState] = useState('')
    useEffect(() => {
        getContactInfo()
            .then(res => {
                if (res) {
                    contactInfoCtx.getContactData(res[0])
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <Header />
            <Main>{props.children}
                <LoadingOverlay show={loadingCtx.loadingOverlay} />
            </Main>
            <Footer />
        </div>
    )
}

export default Layout
const Main = styled.section`
min-height: 100%;
position: relative;
`