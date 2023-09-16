import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar } from '../components';
import { categories } from '../utils/constants';

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{
        height: { sx: "auto", md: "92vh" },
        borderRight: "1px solid #3d3d3d",
        px: { sx: 0, md: 2 }
      }}>
        <Sidebar {...{ selectedCategory, setSelectedCategory }} />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 JSM Media
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed