import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromApi } from "../utils/fetchFromApi";
import { Videos } from "./";

function SearchFeed() {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetchFromApi(`search?part=snippet&q=${searchTerm}`);
      setVideos(data.items)
    };

    getVideos();
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900} color="white" mb={3} ml={{ sm: "100px" }}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>

      <Box p={2} display="flex" justifyContent="center">
        <div style={{ maxWidth: '1680px' }}>
          <Videos videos={videos} />
        </div>
      </Box>
    </Box>
  );
}

export default SearchFeed