import { Avatar, Badge, Box, Grid, IconButton, Input, Menu, MenuItem, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import CommonButton from '../../common/commonButton/CommonButton'
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import RefreshIcon from '@mui/icons-material/Refresh';
import GridWrapper from '../../common/GridWrapper/GridWrapper';
import SearchBar from '../../common/SearchBar/SearchBar';
import BasicCard from '../../common/BasicCard/BasicCard';
import NewUserModal from '../../Modals/NewUserModal/NewUserModal';

export default function Authentication() {

  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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
      console.log(value)
    };

    const addUser = () => {
      setOpen(true);
  };
    return (
      <Box sx={cardStyles.cardHeader}>
        <SearchBar
          placeholder="placeholder"
          onChange={(e) => handleChange(e)}
          searchBarWidth="720px" />
        <Box>
          <CommonButton
            onClick={addUser}
            size="large"
            variant="contained" sx={cardStyles.addUserButton}>
            Add user
          </CommonButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>
        {/* modal */}

      </Box>
    )

  }

  const getContent = () => (
    <Typography
      align="center"
      sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem' }}>
      No users for this project yet
    </Typography>
  )

  const addNewUser = (data) => {
    users.push({ ...data });
    setOpen(false);
};


  return (
    <GridWrapper >
      {/* card component */}
      <BasicCard
        header={getHeader()}
        content={getContent()} />
      
      <NewUserModal open={open} onClose={() => setOpen(false)} addNewUser={addNewUser} />

    </GridWrapper>
  )
}
