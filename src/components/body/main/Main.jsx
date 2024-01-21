import React from "react";
import VideoLabels from "./video-labels/VideoLabels";
import VideoContainer from "./video-container/VideoContainer";

const Main = () => {
  return (
    <div className="col-span-11">
      <VideoLabels></VideoLabels>
      <VideoContainer></VideoContainer>
    </div>
  );
};

export default Main;
