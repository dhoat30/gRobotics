import React from 'react'

function VideoText({ video, title, content }) {
    return (
        <div>
            {title}
            <div
                dangerouslySetInnerHTML={{ __html: video }}
            >

            </div>
        </div>
    )
}

export default VideoText
