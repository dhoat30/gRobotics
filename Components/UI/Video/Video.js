import React from 'react'

function Video({ video }) {
    return (
        <div>
            <div
                dangerouslySetInnerHTML={{ __html: video }}
            ></div>
        </div>
    )
}

export default Video
