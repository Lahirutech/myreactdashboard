import { Avatar, Badge, Box, Grid, IconButton, Input, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import CommonButton from '../../common/commonButton/CommonButton'
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import RefreshIcon from '@mui/icons-material/Refresh';
import GridWrapper from '../../common/GridWrapper/GridWrapper';
import SearchBar from '../../common/SearchBar/SearchBar';
import BasicCard from '../../common/BasicCard/BasicCard';

export default function Authentication() {
  const cardStyles = {
    cardHeader: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: '20px',
      paddingRight: '20px',
      height: '65px',
      backgroundColor: '#f5f5f5',
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',


    },
    addUserButton: {
      fontSize: '1.05rem',
    },
  }

  const getHeader = () => {
    const handleChange = (value) => {
      console.log(value);
    };

    const addUser = () => {
      console.log('click')
    };

    return (
      <Box sx={cardStyles.cardHeader}>
        <SearchBar
          placeholder="placeholder"
          onChange={(e) => handleChange(e)}
          searchBarWidth="720px" />
        <Box>
          <CommonButton onClick={addUser}
            size="large"
            variant="contained" sx={cardStyles.addUserButton}> Add user</CommonButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    )

  }

  const getContent = () => (<Typography
    align="center"
    sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem' }}
  >
    No users for this project yet
  </Typography>
  )




  return (
    <GridWrapper >
      {/* card component */}
      <BasicCard
        header={getHeader()}
        content={getContent()} />


    </GridWrapper>
  )
}
