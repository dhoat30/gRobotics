import React from 'react'
import LargeTitle from '../../../UI/Typography/Titles/LargeTitle'
import styled from 'styled-components'
import ColumnTitle from '../../../UI/Typography/Titles/ColumnTitle'
import Subtitle from '../../../UI/Typography/Titles/Subtitle'
import MaxWidthContainer from '../../../UI/MaxWidthContainer/MaxWidthContainer'
import RowTitle from '../../../UI/Typography/Titles/RowTitle'
import Image from 'next/image'

function Usher({ data }) {
    console.log(data)
    return (
        <MaxWidthContainer backgroundColor="var(--white)">
            <Container>
                <RowTitle align="center">{data.title}</RowTitle>
                <Subtitle align="center" color="var(--fontGrey)">{data.content}</Subtitle>
                <Products>
                    <Product>

                        <ImageContainer>
                            <Image src={data.images[0].image}
                                layout='fill'
                                alt={data.title}
                            />
                        </ImageContainer>
                    </Product>
                    <ProductWhite>

                        <ImageContainer>

                            <Image src={data.images[1].image}
                                layout='fill'

                            />
                        </ImageContainer>
                    </ProductWhite>
                </Products>
            </Container>
        </MaxWidthContainer>
    )
}

export default Usher
const Container = styled.section`
padding: 100px 0 100px 0;
margin: 0 auto 0 auto;
@media (max-width: 1000px ){ 
    padding: 50px 0 50px 0;

}
`
const Products = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap; 

`
const Product = styled.div`
    background: var(--offWhite);
    width: 30%;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;  
    padding: 50px 50px 50px 50px;
    margin: 20px; 
    @media (max-width: 700px){ 
        width: 100%;
}
`
const ImageContainer = styled.div`
display: block;
position: relative;
width: 100%;
max-width: 500px;
padding-bottom: 220%; 
margin-top: 30px;
`
const ProductWhite = styled(Product)`
background: var(--offWhite);
`