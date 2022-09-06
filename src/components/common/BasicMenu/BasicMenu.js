import { Menu, MenuItem } from '@mui/material'
import React from 'react'

export default function BasicMenu({ anchorEl, open, handleClose, menuItems }) {
    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            {menuItems.map((item, id) => (
                <MenuItem onClick={handleClose}>{item.label}</MenuItem>
            ))}
        </Menu>
    )
}
