import React from 'react'
import styled from 'styled-components'
import AnchorButton from '../../../UI/Buttons/AnchorButton'
import ColumnTitle from '../../../UI/Typography/Titles/ColumnTitle'
import Image from 'next/image'
import MaxWidthContainer from '../../../UI/MaxWidthContainer/MaxWidthContainer'
import Link from 'next/link'
function RobotList(allRobots) {
    const card = allRobots.allRobots.map((item, index) => {
        return <Card key={index}>
            <ImageContainer>
                <Image src={item.acf.list_image}
                    layout='fill'
                    alt={item.title.rendered}
                />
            </ImageContainer>
            <Content>
                <ColumnTitle align="center">{item.title.rendered}</ColumnTitle>
                <AnchorButtonStyle href={item.acf.link} align="center">View</AnchorButtonStyle>
            </Content>


        </Card>
    })
    return (
        <MaxWidthContainer backgroundColor='white'>
            <Container>
                <Cards>
                    {card}
                </Cards>
            </Container>
        </MaxWidthContainer>
    )
}

export default RobotList
const Container = styled.div`
margin:100px 0;
@media(max-width:500px){ 
    margin: 50px 0;
}
`
const Cards = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
`
const Card = styled.li`
background: var(--offWhite);
padding: 40px;
box-shadow: var(--boxShadow);
margin: 20px;
border-radius: var(--cardBorderRadius);
transition: var(--transition);
&:hover{ 
    transform: scale(1.05); 
}
`
const ImageContainer = styled.div`
width: 250px;
display: block;
position: relative; 
padding-bottom: 220%; 

`
const ImageContainer2 = styled.div`
width: 300px;
display: block;
`

const Content = styled.div`
margin-top: 15px; 
`
const AnchorButtonStyle = styled(AnchorButton)`
margin: 0;
`