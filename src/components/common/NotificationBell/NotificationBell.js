import { Badge, IconButton, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import BasicMenu from '../BasicMenu/BasicMenu';
import NotificationsIcon from '@mui/icons-material/Notifications';

const notifications = [
  {
    id: 0,
    label: 'First notification'
  },
  {
    id: 1,
    label: 'Second notification'
  },
];

export default function NotificationBell({ iconColor }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)


  const newNotifications = `You have ${notifications.length} new notifications!`;
  const noNotifications = 'No new notifications';

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div>
      <Tooltip
        title={notifications.length ? newNotifications : noNotifications}  >
        <IconButton color={iconColor} onClick={notifications.length ? handleOpen : null}
          anchorEl={anchorEl}
        >
          <NotificationsIcon />
        </IconButton>
      </Tooltip>
      <BasicMenu open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        menuItems={notifications}>
      </BasicMenu>

    </div>
  )
}
