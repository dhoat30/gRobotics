import React from 'react'
// import { Stream } from "@cloudflare/stream-react";

function Video({ video }) {
    // const videoIdOrSignedUrl = "019cf67db448787e33fd0b5dc237294e";

    return (
        <div className="just-video">
            <div
                dangerouslySetInnerHTML={{ __html: video }}
            ></div>
            {/* <div>
                <Stream controls src={videoIdOrSignedUrl} />
            </div> */}
        </div>
    )
}

export default Video
