import React from 'react'
import styled from 'styled-components'
import PrimaryButton from '../Buttons/PrimaryButton'
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer'
import RowTitle from '../Typography/Titles/RowTitle'
function LeaseLayout({ leaseOptions }) {
    const leaseOptionList = leaseOptions.map((item, index) => {
        return <ListItem key={index}>{item.lease_options}</ListItem>
    })
    return (
        <MaxWidthContainer backgroundColor="var(--silver)">
            <Container>
                <Border />
                <Content>
                    <RowTitle>Lease</RowTitle>
                    <List>
                        {leaseOptionList}
                        <PrimaryButton>Order Now</PrimaryButton>
                    </List>
                </Content>
                <Border />
            </Container>
        </MaxWidthContainer >
    )
}

export default LeaseLayout
const Container = styled.section`
padding: 50px 0;
position: relative;
&::before{ 
    width: 500px;
    height: 2px;
    background-color: var(--darkGrey);
    position: absolute;
    top: 0;
    left: 0;
}
`

const Border = styled.div`
border-top: 1px solid rgba(0,0,0,0.2);
margin: 50px 0;
`
const Content = styled.div`
display: flex;
justify-content: space-between;
`
const List = styled.ul``
const ListItem = styled.li`
font-size: 2rem;
margin-top: 5px;
`