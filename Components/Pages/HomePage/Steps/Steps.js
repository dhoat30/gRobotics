import React from 'react'
import MaxWidthContainer from '../../../UI/MaxWidthContainer/MaxWidthContainer'
import styled from 'styled-components'

import RowTitle from '../../../UI/Typography/Titles/RowTitle'
function Steps({ steps }) {

    const cards = steps.map((item, index) => {
        return <Card key={index}>
            <Step>
                {item.step}
            </Step>
            <IconStyle xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.243 13.501">
                <path id="Icon_ionic-ios-arrow-round-forward" data-name="Icon ionic-ios-arrow-round-forward" d="M20.784,11.51a.919.919,0,0,0-.007,1.294l4.275,4.282H8.782a.914.914,0,0,0,0,1.828H25.045L20.77,23.2a.925.925,0,0,0,.007,1.294.91.91,0,0,0,1.287-.007l5.794-5.836h0a1.026,1.026,0,0,0,.19-.288.872.872,0,0,0,.07-.352.916.916,0,0,0-.26-.64l-5.794-5.836A.9.9,0,0,0,20.784,11.51Z" transform="translate(-7.875 -11.252)" />
            </IconStyle>

        </Card>
    })
    return (
        <MaxWidthContainer backgroundColor="var(--darkGrey)">
            <Container>
                <RowTitle align="center" color="var(--offWhite) ">Robot Installation Steps</RowTitle>
                <Cards>
                    {cards}
                </Cards>
            </Container>
        </MaxWidthContainer>

    )
}

export default Steps
const Container = styled.div`
padding: 70px 0;
`
const Cards = styled.ul`
display: flex; 
justify-content:center; 
flex-wrap: wrap;
margin: 50px 0 0 0;
@media(max-width: 700px){ 
     margin: 20px 0 0 0;
 }
`
const Card = styled.li`
cursor: pointer;
position: relative;
padding: 10px;
margin: 9px; 
display: flex;
justify-content: center; 
align-items:center; 
width: 100%;
max-width: 250px; 
height: 250px;
background: rgb(20,156,79);
background: linear-gradient(151deg, rgba(20,156,79,1) 0%, rgba(35,185,137,1) 50%, rgba(114,183,255,1) 100%);
transition: var(--transition);
&:hover{ 
    transform: scale(1.1);
}
@media(max-width: 700px){ 
    max-width: 150px; 
height: 150px;
margin: 5px; 
 }
 @media(max-width: 360px){ 
    max-width: 130px; 
height: 150px;
margin: 5px; 
 }
`
const Step = styled.h4`
 color: white; 
 text-align: center; 
 font-size: 1.5rem; 
 line-height: 2rem; 
 @media(max-width: 700px){ 
     font-size: 1rem; 
     line-height: 1.2rem; 
 }

`
const IconStyle = styled.svg`
 position: absolute;
 bottom: 10px;
width: 30px;
 color: white;
 path{ 
     fill: white;
 }
 @media(max-width: 700px){ 
     bottom: -5px; 
 }
`