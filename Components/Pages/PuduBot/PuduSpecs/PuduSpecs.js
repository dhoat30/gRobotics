import React from 'react'
import styled from 'styled-components'
import MaxWidthContainer from '../../../UI/MaxWidthContainer/MaxWidthContainer'
import Image from 'next/image'
import { style } from 'dom-helpers'
import MediumTitle from '../../../UI/Typography/Titles/Subtitle'
function PuduSpecs({ image, specsArray, backgroundColor, secondSpecs }) {
    const specsList = specsArray.map((item, index) => {
        console.log(item)
        return <tbody key={index}>
            <ListItem>
                <Key> {item.key}</Key>
                <Value>{item.value}</Value>
            </ListItem>
        </tbody>
    })
    const secondSpecsList = secondSpecs.map((item, index) => {
        console.log(item)
        return <ListItem key={index}>
            <Key> {item.key}</Key>
            <Value>{item.value}</Value>
        </ListItem>
    })
    return (
        <MaxWidthContainer backgroundColor={backgroundColor}>
            <Container>
                <ImgContainer>
                    <Image
                        src={image}
                        alt="robot specification"
                        layout="responsive"
                        width="100"
                        height="100"
                        quality="100"
                    />
                </ImgContainer>

                <div>
                    <SpecsContainer>
                        {specsList}
                    </SpecsContainer>
                    <SecondSpecsContainer>
                        <MediumTitle color="var(--fontGrey)">Dish Cover Specifications</MediumTitle>
                        <SpecsContainer>
                            {secondSpecsList}
                        </SpecsContainer>
                    </SecondSpecsContainer>

                </div>
            </Container>
        </MaxWidthContainer>

    )
}

export default PuduSpecs
const Container = styled.div`

@media(max-width: 500px){ 
    display: none;
}
display: flex;
justify-content:center;
align-items: flex-start;
padding: 100px 0;
@media (max-width: 1000px){ 
    flex-direction: column; 
}
`
const ImgContainer = styled.div`
    display: block;
    width: 30%;
    margin-right: 50px;
    
`
const SpecsContainer = styled.table`
overflow-x: auto;

`
const ListItem = styled.tr`
color: var(--offWhite);
letter-spacing: 0.05rem;
font-size:1rem;
/* display: flex;
justify-content: flex-start;  
width: 100%;
max-width: 300px;  */
`
const Value = styled.td`
 padding: 15px 0 15px 10px !important;

max-width: 500px;
`
const Key = styled.td`

`
const SecondSpecsContainer = styled.div`
border-top: 1px solid var(--lightGrey); 
margin-top: 20px;
`