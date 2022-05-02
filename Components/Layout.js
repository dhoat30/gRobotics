import React, { useContext } from 'react'
import styled from 'styled-components'
import LoadingOverlay from './UI/LoadingOverlay/LoadingOverlay'
import LoadingContext from '../store/loading-context'
import Header from './Header/Header'
import Footer from './Footer/Footer'


function Layout(props) {
    const loadingCtx = useContext(LoadingContext)


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