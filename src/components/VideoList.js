import React from "react";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <div className="ui relaxed divided list" key={video.id.videoId}>
        <VideoItem
          video={video}
          onVideoSelect={onVideoSelect}
          key={video.id.videoId}
        />
      </div>
    );
  });
  return <div>{renderedList}</div>;
};

export default VideoList;
