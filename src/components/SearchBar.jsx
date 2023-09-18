import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
  
    const handleOnSubmit = (e) => {
      e.preventDefault();
  
      if (searchTerm) {
        navigate(`/search/${searchTerm}`);
        setSearchTerm('');
      }
      else {
        navigate('/');
      }
    };

    return (
        <Paper
            component="form"
            onSubmit={handleOnSubmit}
            onClick={() => {document.querySelector('#search-bar').focus()}}
            style={{cursor: 'text'}}
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchBar