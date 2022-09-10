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
import { cardHeaderStyles } from './styles';

export default function Authentication() {

  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState(users);

  const getHeader = () => {

    const handleSearch = (value) => {
      filterData(value);
  };

    const addUser = () => {
      setOpen(true);
    };

    const filterData = (value) => {
      const lowercasedValue = value.toLowerCase().trim()
      if (lowercasedValue === '') setUsers(searchResults)
      else {
        const filteredData = searchResults.filter((item) => {
          return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(lowercasedValue)
          )
        })
        setUsers(filteredData)
      }

    }


    return (
      <Box sx={cardHeaderStyles.wrapper}>
        <SearchBar
          placeholder="placeholder"
          onChange={(e) => handleSearch(e.target.value)}
          searchBarWidth="720px" />
        <Box>
          <CommonButton
            onClick={addUser}
            size="large"
            variant="contained" sx={cardHeaderStyles.addUserButton}>
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
    <>
      {
        users.length ?
          users.map((user) => (
            <Box sx={{ marginBottom: '20px' }}>
              <Typography>User ID: {user.userId}</Typography>
              <Typography>Email: {user.email}</Typography>
              <Typography>Phone Number: {user.phoneNumber}</Typography>
            </Box>
          )) :

          < Typography
            align="center"
            sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem' }}>
            No users for this project yet
          </Typography>
      }
    </>
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
