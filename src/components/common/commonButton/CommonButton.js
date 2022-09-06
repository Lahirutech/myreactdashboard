import { Button } from '@mui/material'
import React from 'react'

const CommonButton=({ children, color, disabled, size, sx, variant })=> {
    return (
        <Button color={color}
            disabled={disabled}
            size={size}
            sx={sx}
            variant={variant}>
            {children}
        </Button>
    )
}
export default CommonButton
