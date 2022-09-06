import { Avatar, Badge, Grid, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import CommonButton from '../../common/commonButton/CommonButton'
export default function Authentication() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item xs={8}>
   
    </Grid>
  )
}
