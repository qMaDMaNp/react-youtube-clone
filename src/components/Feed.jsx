import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import { categories } from '../utils/constants';
import { fetchFromApi } from "../utils/fetchFromApi";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [videos, setVideos] = useState(null);

  const getVideos = async () => {
    const data = await fetchFromApi(`search?part=snippet&q=${selectedCategory}`);
    setVideos(data.items)
  };

  useEffect(() => {
    setVideos(null);
    getVideos();
  }, [selectedCategory]);

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

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed