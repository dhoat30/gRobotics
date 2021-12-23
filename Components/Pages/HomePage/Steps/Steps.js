import React from 'react'
import MaxWidthContainer from '../../../UI/MaxWidthContainer/MaxWidthContainer'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-light-svg-icons'

function Steps({ steps }) {
    console.log(steps)
    const cards = steps.map((item, index) => {
        console.log(item)
        return <Card >
            <Step>
                {item.step}
            </Step>
            <IconStyle icon={faLongArrowRight} />
        </Card>
    })
    return (
        <MaxWidthContainer backgroundColor="var(--darkGrey)">
            <Container>
                <Cards>
                    {cards}
                </Cards>
            </Container>
        </MaxWidthContainer>

    )
}

export default Steps
const Container = styled.div`
padding: 70px;
`
const Cards = styled.ul`
display: flex; 
justify-content:center; 
flex-wrap: wrap;
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
`
const Step = styled.h4`
 color: white; 
 text-align: center; 
 font-size: 1.5rem; 
 line-height: 2rem; 

`
const IconStyle = styled(FontAwesomeIcon)`
 position: absolute;
 bottom: 10px;
 font-size: 3rem;
 color: white;
`