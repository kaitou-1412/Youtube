import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ snippet, statistics }) => {
  const { title, channelTitle, thumbnails } = snippet;
  const { viewCount } = statistics;
  const darkTheme = useSelector((store) => store.app.darkTheme);
  return (
    <div
      className={
        "p-2 m-2 w-72 shadow-lg" +
        (darkTheme ? " border border-darkModeGray" : "")
      }
    >
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
