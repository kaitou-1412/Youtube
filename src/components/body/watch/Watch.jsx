import React, { useEffect } from "react";
import { closeSidebar } from "../../../redux/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import useVideo from "../../../hooks/useVideo";
import Comments from "./comments/Comments";
import LiveChat from "./chat/LiveChat";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [video] = useVideo({ id: videoId });

  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div className="col-span-11 p-5">
      <div className="flex flex-col">
        <div className="px-5 flex">
          <div className="w-[1100px]">
            <iframe
              width="1100"
              height="600"
              title="Watch youtube video"
              src={"https://www.youtube.com/embed/" + videoId}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            {video && (
              <ul className="pt-3">
                <li className="font-bold text-3xl">{video.snippet.title}</li>
                <li>{video.snippet.channelTitle}</li>
                <li>
                  {video.statistics.viewCount} views -{" "}
                  {video.statistics.likeCount} likes -{" "}
                  {video.statistics.commentCount} comments
                </li>
              </ul>
            )}
          </div>
          <div className="flex-grow">
            <LiveChat></LiveChat>
          </div>
        </div>
        <Comments videoId={videoId} />
      </div>
    </div>
  );
};

export default Watch;
