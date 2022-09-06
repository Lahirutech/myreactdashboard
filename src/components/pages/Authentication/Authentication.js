import { Grid } from '@mui/material'
import React from 'react'
import CommonButton from '../../common/commonButton/CommonButton'

export default function Authentication() {
  return (
    <Grid item xs={8}>
      <CommonButton  variant="contained">
        Add User2
      </CommonButton>
      <CommonButton  variant="outlined">
        Add User1
      </CommonButton>

    </Grid>
  )
}
