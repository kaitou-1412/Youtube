import React, { useEffect } from "react";
import VideoLabels from "./video-labels/VideoLabels";
import VideoContainer from "./video-container/VideoContainer";
import { useDispatch } from "react-redux";
import { openSidebar } from "../../../redux/appSlice";
import { useSearchParams } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");

  useEffect(() => {
    dispatch(openSidebar());
  }, []);

  return (
    <div className="col-span-11">
      <VideoLabels></VideoLabels>
      <VideoContainer searchQuery={searchQuery}></VideoContainer>
    </div>
  );
};

export default Main;
