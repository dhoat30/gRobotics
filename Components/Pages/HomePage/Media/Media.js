import React from 'react'
import RowTitle from '../../../UI/Typography/Titles/RowTitle'
import styled from 'styled-components'
import Video from '../../../UI/Video/Video'
import Subtitle from '../../../UI/Typography/Titles/Subtitle'
import ColumnTitle from '../../../UI/Typography/Titles/ColumnTitle'
function Media({ media }) {
    const card = media.map(item => {
        return <Card key={item.id}>
            <Video video={item.content.rendered} />
            <Subtitle>{item.title.rendered}</Subtitle>
        </Card>
    })

    return (
        <Container className='media-container'>
            <RowTitle align="center">Media</RowTitle>
            <Cards>
                {card}
            </Cards>
        </Container>
    )
}

export default Media
const Container = styled.div`
margin: 100px 0;
@media (max-width:  500px){ 
    margin: 50px 0;
}
`

const Cards = styled.ul`
display: flex;
justify-content: center; 
flex-wrap: wrap;

`
const Card = styled.li`
margin: 20px;
width: 100%; 
max-width: 500px;
@media(max-width: 500px){ 
    margin: 20px 0;
}
`