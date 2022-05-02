import React from 'react'
import styled from 'styled-components'
import MaxWidthContainer from '../../../UI/MaxWidthContainer/MaxWidthContainer'
import Image from 'next/image'
import ColumnTitle from '../../../UI/Typography/Titles/ColumnTitle'
import Paragraph from '../../../UI/Typography/Paragraph/Paragraph'
import RowTitle from '../../../UI/Typography/Titles/RowTitle'
function FlexibleDishCover({ data }) {

    const list = data.bullet_points.map((item, index) => {
        return <ListItem key={index}>
            <ColumnTitle color="var(--lightGrey)">{item.bullet_point}</ColumnTitle>

        </ListItem>
    })



    return (
        <MaxWidthContainer backgroundColor="var(--white)">
            <Container>
                <Content>
                    <RowTitle>{data.title}</RowTitle>
                    <ListItems>
                        {list}
                    </ListItems>
                </Content>

                <ImageContainerRes>
                    <Image src={data.image}
                        layout="responsive"
                        width="100"
                        height="70"
                        alt="PuduBot Features List"
                    />
                </ImageContainerRes>

            </Container>
        </MaxWidthContainer>

    )
}

export default FlexibleDishCover
const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
max-width: 1500px;
margin: 100px auto;
padding: 100px 100px;
background: var(--offWhite);
@media (max-width: 700px){ 
    margin: 50px auto;
padding: 50px 0;
}
`
const Content = styled.div`
width: 50%;
@media (max-width: 1000px){ 
    width: 100%; 
}
`
const ImageContainerRes = styled.div`
display: block;
width: 50%; 
@media (max-width: 1000px){ 
    width: 100%; 
}
`

const ListItems = styled.ul`
list-style: disc; 
color: var(--lightGrey);
margin: 30px 0 0 20px;
`
const ListItem = styled.li`
    margin-bottom: 20px;
`