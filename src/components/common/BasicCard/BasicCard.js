import { Card, CardContent } from '@mui/material'
import React from 'react'
import { cardStyles } from './styles'

export default function BasicCard({ header, content }) {
    return (
        <Card sx={cardStyles}>
            {header}
            <CardContent>
                {content}
            </CardContent>
        </Card>
    )
}
