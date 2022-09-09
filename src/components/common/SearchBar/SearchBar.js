import { Box, Input } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({placeholder, onChange, searchBarWidth}) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SearchIcon sx={{ marginRight: '10px' }} />
            <Input onChange={onChange} disableUnderline placeholder={placeholder} sx={{ width: {searchBarWidth}, color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.1rem' }}></Input> 
        </Box>
    )
}
