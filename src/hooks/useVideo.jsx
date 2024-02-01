import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";

const useVideo = ({ id, searchQuery }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, [searchQuery]);

  const getVideos = async () => {
    let api = `${YOUTUBE_API.VideosList}`;
    if (id) {
      api = `${YOUTUBE_API.VideoDetail}&id=${id}`;
    } else if (searchQuery) {
      api = `${YOUTUBE_API.SearchVideosList}&q=${searchQuery}`;
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
