import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import { useSelector } from "react-redux";

const useVideo = ({ id, searchQuery }) => {
  const accessToken = useSelector((store) => store.app.accessToken);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (accessToken) {
      getVideos(accessToken);
    }
  }, [accessToken, searchQuery]);

  const getVideos = async (accessToken) => {
    let api = `${YOUTUBE_API.VideosList}&acess_token=${accessToken}`;
    if (id) {
      api = `${YOUTUBE_API.VideoDetail}&acess_token=${accessToken}&id=${id}`;
    } else if (searchQuery) {
      api = `${YOUTUBE_API.SearchVideosList}&acess_token=${accessToken}&q=${searchQuery}`;
    }
    const data = await fetch(api);
    let { items } = await data.json();
    if (searchQuery) {
      items = items.map((item) => ({ ...item, id: item?.id?.videoId }));
    }
    setVideos(items);
  };

  return videos;
};

export default useVideo;
