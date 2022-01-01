import React from 'react'
import LargeTitle from '../../../UI/Typography/Titles/LargeTitle'
import styled from 'styled-components'
import ColumnTitle from '../../../UI/Typography/Titles/ColumnTitle'
import Subtitle from '../../../UI/Typography/Titles/Subtitle'
import MaxWidthContainer from '../../../UI/MaxWidthContainer/MaxWidthContainer'
import RowTitle from '../../../UI/Typography/Titles/RowTitle'
import Image from 'next/image'

function ProductColors({ data }) {
    console.log(data)
    return (
        <MaxWidthContainer backgroundColor="var(--white)">
            <Container>
                <RowTitle align="center">{data.title}</RowTitle>
                <Products>
                    <Product>
                        <ColumnTitle>Beige Yellow</ColumnTitle>
                        <ImageContainer>
                            <Image src={data.images[2].image}
                                layout='fill'

                            />
                        </ImageContainer>
                    </Product>
                    <ProductWhite>
                        <ColumnTitle>Salt White</ColumnTitle>
                        <ImageContainer>

                            <Image src={data.images[0].image}
                                layout='fill'

                            />
                        </ImageContainer>
                    </ProductWhite>
                </Products>
            </Container>
        </MaxWidthContainer>
    )
}

export default ProductColors
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
    background: #ffc845;
    width: 40%;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;  
    padding: 50px 50px 0 50px;
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
padding-bottom: 180%; 
margin-top: 30px;
`
const ProductWhite = styled(Product)`
background: var(--offWhite);
`