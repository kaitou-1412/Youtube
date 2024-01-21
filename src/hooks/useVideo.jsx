import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import { useSelector } from "react-redux";

const useVideo = (id = "") => {
  const accessToken = useSelector((store) => store.app.accessToken);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (accessToken) {
      getVideos(accessToken);
    }
  }, [accessToken]);

  const getVideos = async (accessToken) => {
    const api =
      id === ""
        ? `${YOUTUBE_API.VideosList}&acess_token=${accessToken}`
        : `${YOUTUBE_API.VideoDetail}&acess_token=${accessToken}&id=${id}`;
    const data = await fetch(api);
    const { items } = await data.json();
    setVideos(items);
  };

  return videos;
};

export default useVideo;
