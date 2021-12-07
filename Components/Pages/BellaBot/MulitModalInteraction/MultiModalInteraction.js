import React from 'react'
import ImagesTitleSection from './ImagesTitleSection/ImagesTitleSection'
import Light from './Light/Light'
import SmartExpressions from './SmartExpressions/SmartExpressions'
import Touch from './Touch/Touch'
function MultiModalInteraction({ robotData }) {
    return (
        <div>
            <ImagesTitleSection data={robotData[8]}
                backgroundColor="var(--silver)"
                theme="light"
            />
            <SmartExpressions data={robotData[9]}
                backgroundColor="var(--silver)"
                theme="light"
            />

            <Touch
                data={robotData[10]}
                backgroundColor="var(--black)"
                theme="dark"
            />
            <Light
                data={robotData[11]}
                backgroundColor="var(--black)"
                theme="dark"
            />

        </div>
    )
}

export default MultiModalInteraction
