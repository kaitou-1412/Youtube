import React, { useEffect } from "react";
import Label from "./video-label/Label";
import { YOUTUBE_API } from "../../../../utils/constants";

const VideoLabels = () => {
  useEffect(() => {
    getLabels();
  }, []);
  const getLabels = async () => {
    const data = await fetch(YOUTUBE_API.VideosList);
    const json = await data.json();
    console.log(json);
  };
  const labels = [
    "All",
    "Gaming",
    "Music",
    "Podcasts",
    "Apple",
    "Tech",
    "Soccer",
    "Cricket",
    "Cooking",
    "News",
  ];
  return (
    <div>
      {labels.length > 0 &&
        labels.map((label, index) => <Label key={index} name={label} />)}
    </div>
  );
};

export default VideoLabels;
