import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos }) => {
  if(!videos?.length) return <Loader />;
  
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((video, idx) => (
        <Box key={idx}>
          {video.id.videoId && <VideoCard video={video} /> }
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;