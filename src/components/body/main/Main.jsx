import React, { useEffect } from "react";
import VideoLabels from "./video-labels/VideoLabels";
import VideoContainer from "./video-container/VideoContainer";
import { useDispatch } from "react-redux";
import { openSidebar } from "../../../utils/slices/appSlice";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSidebar());
  }, []);

  return (
    <div className="col-span-11">
      <VideoLabels></VideoLabels>
      <VideoContainer></VideoContainer>
    </div>
  );
};

export default Main;
