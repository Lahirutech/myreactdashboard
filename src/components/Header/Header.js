import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import CommonButton from '../common/commonButton/CommonButton'
import NotificationBell from '../common/NotificationBell/NotificationBell'
import HelpIcon from '@mui/icons-material/Help';

export default function Header({ title = "title" }) {

    const headerStyles = {
        wrapper: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#009be5',
            padding: '20px',
        },
        topRow: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            alignItems: 'center',
            marginBottom: '20px',
            '*': {
                marginRight: '5px',
            },
        }

    }

    return (
        <Box sx={headerStyles.wrapper}>
            <Box sx={headerStyles.topRow}>
                <Typography>
                    Go to docs
                </Typography>
                <NotificationBell
                    iconColor="white"
                />
                <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
            </Box>
            {/* second row */}
            <Box>
                <Typography variant='h1' color="white">
                    title
                </Typography>
                <Box>
                    <CommonButton variant="outlined"> Web Setup</CommonButton>
                    <Tooltip title="help">
                        <IconButton color='white'>
                            <HelpIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    )
}
