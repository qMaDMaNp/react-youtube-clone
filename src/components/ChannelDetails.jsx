import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

function ChannelDetails() {
  const [channelDetails, setChannelDetails] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getChannelData = async () => {
      const data = await fetchFromApi(`channels?part=snippet&id=${id}`);
      setChannelDetails(data?.items[0])
    };

    const getVideos = async () => {
      const data = await fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setVideos(data?.items)
    };

    getChannelData();
    getVideos();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height: '300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <div style={{ marginTop: '-93px' }}>
          <ChannelCard channelDetails={channelDetails} />
        </div>
      </Box>

      <Box p={2} display="flex" justifyContent="center">
        <div style={{ maxWidth: '1680px' }}>
          <Videos videos={videos} />
        </div>

      </Box>
    </Box>
  );
}

export default ChannelDetails