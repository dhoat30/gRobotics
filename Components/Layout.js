import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ContactInfoContext from '../store/contact-info-context'
import LoadingOverlay from './UI/LoadingOverlay/LoadingOverlay'
import LoadingContext from '../store/loading-context'
import Header from './Header/Header'
import getContactInfo from '../util/get-contact-info'

function Layout(props) {
    const contactInfoCtx = useContext(ContactInfoContext)
    const loadingCtx = useContext(LoadingContext)

    useEffect(() => {
        getContactInfo()
            .then(res => {
                console.log(res)
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
        </div>
    )
}

export default Layout
const Main = styled.section`
min-height: 90vh;
position: relative;
`