import { Avatar, Badge, Box, Grid, IconButton, Input, Menu, MenuItem, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import CommonButton from '../../common/commonButton/CommonButton'
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import RefreshIcon from '@mui/icons-material/Refresh';
import GridWrapper from '../../common/GridWrapper/GridWrapper';
import SearchBar from '../../common/SearchBar/SearchBar';
import BasicCard from '../../common/BasicCard/BasicCard';

export default function Authentication() {

  const [modelOpen, setModelOpen] = useState(false)

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
      console.log('click')
      setModelOpen(true)
    };

    const handleClose = () => {
      setModelOpen(false)
    }



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
        <Modal
          open={modelOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
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
