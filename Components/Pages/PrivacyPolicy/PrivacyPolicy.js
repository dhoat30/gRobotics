import React from 'react'
import RowTitle from '../../UI/Typography/Titles/RowTitle'
import styled from 'styled-components'
import MaxWidthContainer from '../../UI/MaxWidthContainer/MaxWidthContainer'
function PrivacyPolicy({ privacyPolicy }) {
    console.log(privacyPolicy)
    return (
        <MaxWidthContainer backgroundColor="var(--offWhite)">
            <Container>
                <RowTitle>{privacyPolicy.title.rendered}</RowTitle>
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