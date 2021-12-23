import React, { useEffect } from 'react'
import styled from 'styled-components'
import ExtraLargeTitle from '../../../UI/Typography/Titles/ExtraLargeTitle'
import Image from 'next/image'
import ColumnTitle from '../../../UI/Typography/Titles/ColumnTitle'
import Link from 'next/link'
import AnchorButton from '../../../UI/Buttons/AnchorButton'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
function HeroSection({ image, title, subtitle, imageWidth, imageHeight, backgroundColor, color, theme, showLink, link }) {
    const { ref, inView } = useInView()
    const animation = useAnimation()
    const imageAnimation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                transition: {
                    duration: 0.3,
                    delay: 0.9
                }
            })

            imageAnimation.start({
                opacity: 1,
                transition: {
                    duration: 3,
                    delay: 0.9
                }
            })
        }

    }, [inView])

    const variants = {
        hidden: {
            opacity: 0
        }
    }
    return (
        <Container backgroundColor={backgroundColor}>
            <MaxWidth>
                <Content>

                    <ExtraLargeTitle align="center" color={color}>{title}</ExtraLargeTitle>

                    <ColumnTitleSytle align="center" color={color}>{subtitle}</ColumnTitleSytle>
                    {showLink &&
                        <motion.div ref={ref}
                            variants={variants}
                            animate={animation}
                            initial="hidden"
                        >
                            <Link href={link} passHref><AnchorButton align="center">Learn More</AnchorButton></Link>
                        </motion.div>
                    }
                </Content>

                <motion.div ref={ref}

                    animate={imageAnimation}
                    initial={{ opacity: 0 }}
                >
                    <ImageContainer>
                        <Image src={image}
                            layout="responsive"
                            width="100"
                            height="100"
                        />
                    </ImageContainer>
                </motion.div>
            </MaxWidth>
        </Container>
    )
}

export default HeroSection
const Container = styled.div`
 background-color: ${props => props.backgroundColor ? props.backgroundColor : "var(--darkGrey)"};
`
const MaxWidth = styled.div`
padding: 50px 0;
`
const ColumnTitleSytle = styled(ColumnTitle)`
margin-top: 40px;

`
const Content = styled.div`
`

const ImageContainer = styled.div`
display: block;
    height: 90%;
    width: 600px;
    /* position: relative; */
    margin: 20px auto 0 auto;
    @media (max-width: 1200px){ 
    align-self: center;
    height: auto;
    width: 100%;
    max-width: 700px;
        margin-top: 20px;
}
overflow: hidden;
`
const ImageStyle = styled(Image)`
object-fit: cover;
object-position: top;
`