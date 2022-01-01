import React from 'react'
import styled from 'styled-components'
import MaxWidthContainer from '../../../UI/MaxWidthContainer/MaxWidthContainer'
import Image from 'next/image'
import ColumnTitle from '../../../UI/Typography/Titles/ColumnTitle'
import Paragraph from '../../../UI/Typography/Paragraph/Paragraph'

function PuduFeatures({ data }) {
    // split the array in two groups
    const half = Math.ceil(data.bullet_points.length / 2);
    const firstHalf = data.bullet_points.slice(0, half)
    const secondHalf = data.bullet_points.slice(-half)

    const listOne = firstHalf.map((item, index) => {
        return <ListItem key={index}>
            <ColumnTitle>{item.bullet_point}</ColumnTitle>
            <Paragraph
                color="var(--fontGrey)"
                fontWeight="400">{item.subtitle}</Paragraph>
        </ListItem>
    })

    const listTwo = secondHalf.map((item, index) => {
        return <ListItem key={index}>
            <ColumnTitle>{item.bullet_point}</ColumnTitle>
            <Paragraph fontWeight="400">{item.subtitle}</Paragraph>
        </ListItem>
    })


    return (
        <MaxWidthContainer backgroundColor="var(--offWhite)">
            <Container>
                <ListItems>
                    {listOne}
                </ListItems>
                <ImageContainerRes>
                    <Image src={data.image}
                        layout="responsive"
                        width="100"
                        height="100"
                        alt="PuduBot Features List"
                    />
                </ImageContainerRes>
                <ListItems>
                    {listTwo}
                </ListItems>
            </Container>
        </MaxWidthContainer>

    )
}

export default PuduFeatures
const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
max-width: 1300px;
margin: 0 auto;
padding: 100px 0;
`

const ImageContainerRes = styled.div`
display: block;
width: 100%; 
max-width: 550px;
`

const ListItems = styled.ul`
display: flex;
flex-direction: column; 
justify-content: space-between; 
width: 100%;
max-width: 250px;
@media (max-width: 1100px){ 
    max-width: 100%;
}
`
const ListItem = styled.li`
    margin-bottom: 20px;
`