import React from "react";
import useVideo from "../../../../hooks/useVideo";
import VideoCard from "./video-card/VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const videos = useVideo();

  if (videos.length === 0) return null;

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard {...video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
