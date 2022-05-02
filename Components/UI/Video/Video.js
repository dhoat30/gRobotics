import React, { useEffect, useState } from 'react'
// import { Stream } from "@cloudflare/stream-react";
import styled from 'styled-components'
function Video({ video }) {
    // const videoIdOrSignedUrl = "019cf67db448787e33fd0b5dc237294e";
    const [showVideo, setShowVideo] = useState(false)
    useEffect(() => {
        setShowVideo(true)
    }, [])
    return (
        <Container className="just-video">
            {showVideo ? <div
                dangerouslySetInnerHTML={{ __html: video }}
            ></div>
                : <VideoContainer></VideoContainer>
            }

            {/* <div>
                <Stream controls src={videoIdOrSignedUrl} />
            </div> */}
        </Container>
    )
}
const Container = styled.div`
position: relative; 

`
const VideoContainer = styled.div`
position:  absolute;
padding-top: 56.25%; 
`
export default Video
