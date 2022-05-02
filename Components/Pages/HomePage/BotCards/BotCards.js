import React, { useEffect } from 'react'
import styled from 'styled-components'
import RowTitle from '../../../UI/Typography/Titles/RowTitle'
import Image from 'next/image'
import Link from 'next/link'
import AnchorButton from '../../../UI/Buttons/AnchorButton'
import ColumnTitle from '../../../UI/Typography/Titles/ColumnTitle'
// import { motion, useAnimation } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
function BotCards({ title, subtitle, image, link }) {
    // const { ref, inView } = useInView()
    // const animation = useAnimation()
    // const imageAnimation = useAnimation()

    // useEffect(() => {
    //     if (inView) {
    //         animation.start({
    //             opacity: 1,
    //             transition: {
    //                 duration: 0.3,
    //                 delay: 0.9
    //             }
    //         })

    //         imageAnimation.start({
    //             opacity: 1,
    //             transition: {
    //                 duration: 3,
    //                 delay: 0.9
    //             }
    //         })
    //     }
    // }, [inView])
    // const variants = {
    //     hidden: {
    //         opacity: 0
    //     }
    // }
    return (

        <Container>
            <Content>
                <RowTitle align="center" color="var(--offWhite)">{title}</RowTitle>
                {/* <Subtitle color="var(--offWhite)">{subtitle}</Subtitle> */}
                <ColumnTitle align="center" color="var(--offWhite)">{subtitle}</ColumnTitle>
                {/* <motion.div ref={ref}
                    variants={variants}
                    animate={animation}
                    initial="hidden"
                > */}
                <Link href={link} passHref>
                    <AnchorButton align="center">
                        Learn More
                    </AnchorButton>
                </Link>
                {/* </motion.div> */}
            </Content>
            {/* <motion.div ref={ref}
                animate={imageAnimation}
                initial={{ opacity: 0 }}
            > */}
            <ImageContainer>
                <ImageStyle
                    alt={title}
                    src={image}
                    layout="fill"
                />
            </ImageContainer>
            {/* </motion.div> */}
        </Container>

    )
}

export default BotCards
const Container = styled.div`
width: 100%;
height: 700px;
max-width: 600px;
background: var(--black);
padding: 20px 20px;
position: relative;
z-index: 0;
margin: 10px;

@media (max-width: 550px){ 
    height: 400px;
max-width: 600px;
margin: 10px 0;
padding: 20px 0;
}
`
const ImageContainer = styled.div`
width: 100%;
height: 100%;
`
const Content = styled.div`
position: relative;
z-index: 2;
@media (max-width: 550px){ 
    background: rgba(0,0,0,0.8); 
}

`
const ImageStyle = styled(Image)`
object-fit: cover;
`