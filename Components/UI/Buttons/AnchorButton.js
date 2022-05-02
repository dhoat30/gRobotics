import React from 'react'
import styled from 'styled-components'



const AnchorButton = React.forwardRef(({ children, className, align, href }, ref) => {

    return (

        <Anchor
            ref={ref}
            href={href}
            className={className}
            align={align}>
            {children}
        </Anchor>

    )
})
AnchorButton.displayName = 'AnchorButton'
export default AnchorButton
const Anchor = styled.a`

`