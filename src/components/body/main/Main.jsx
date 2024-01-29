import React, { useEffect } from "react";
import VideoLabels from "./video-labels/VideoLabels";
import VideoContainer from "./video-container/VideoContainer";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../../../utils/slices/appSlice";

const Main = () => {
  const isLoggedIn = useSelector((store) => store.app.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSidebar());
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="col-span-11 flex items-center justify-center text-3xl">
        You have to be logged in to view content
      </div>
    );
  }

  return (
    <div className="col-span-11">
      <VideoLabels></VideoLabels>
      <VideoContainer></VideoContainer>
    </div>
  );
};

export default Main;
