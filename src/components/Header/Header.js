import { Avatar } from '@mui/material'
import React from 'react'
import NotificationBell from '../common/NotificationBell/NotificationBell'

export default function Header() {
    return (
        <div>
            Go to docs
            <NotificationBell
                iconColor="white"
              
            />    <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
        </div>
    )
}
