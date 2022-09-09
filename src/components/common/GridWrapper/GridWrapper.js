import { Grid } from '@mui/material'
import React from 'react'
import { gridStyles } from './styles'

export default function GridWrapper({ children }) {
    return (
        <Grid item xs={12} sx={gridStyles}>
            {children}
        </Grid>
    )
}
