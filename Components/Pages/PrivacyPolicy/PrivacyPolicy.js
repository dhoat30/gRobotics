import React from 'react'
import RowTitle from '../../UI/Typography/Titles/RowTitle'
import styled from 'styled-components'
import MaxWidthContainer from '../../UI/MaxWidthContainer/MaxWidthContainer'
function PrivacyPolicy({ privacyPolicy }) {
    return (
        <MaxWidthContainer backgroundColor="var(--offWhite)">
            <Container>
                <Title>{privacyPolicy.title.rendered} </Title>
                <div className="policies" dangerouslySetInnerHTML={{ __html: privacyPolicy.content.rendered }}
                ></div>
            </Container>
        </MaxWidthContainer>
    )
}

export default PrivacyPolicy
const Container = styled.div`
padding: 50px 0;
`
const Title = styled.h1`
margin: 10px 0;
    font-size: 4rem;
    line-height: 4rem;
    font-weight: 600;
    text-align: left;
    color: var(--darkGrey);
    @media (max-width: 500px)

{
    font-size: 2.5rem;
    line-height: 2.5rem;
}
`
