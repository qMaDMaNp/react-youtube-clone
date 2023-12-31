import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

function Videos({ videos, direction }) {
  if (!videos?.length) return <Loader />;

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((video, idx) => (
        <Box key={idx}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetails={video} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;