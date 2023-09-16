import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

function SearchBar() {
    return (
        <Paper
            component="form"
            onClick={() => {document.querySelector('#search-bar').focus()}}
            style={{cursor: 'text'}}
            onSubmit={() => { }}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                boxShadow: 'none',
                pl: 2
            }}
        >
            <input
                id="search-bar"
                className="search-bar"
                placeholder="Search..."
                value=""
                onChange={() => { }}
            />
            <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchBar