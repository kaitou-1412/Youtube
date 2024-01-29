import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { YOUTUBE_API } from "../utils/constants";

const useComment = (videoId) => {
  const accessToken = useSelector((store) => store.app.accessToken);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (accessToken) {
      getComments(accessToken);
    }
  }, [accessToken]);

  const getComments = async (accessToken) => {
    let api = `${YOUTUBE_API.Comments}&acess_token=${accessToken}&videoId=${videoId}`;
    const data = await fetch(api);
    let { items } = await data.json();
    // TODO: Mapping needs to be automated for n-level nested comments, it's fine for 2-level nesting though!
    items = items.map((item) => ({
      name: item?.snippet?.topLevelComment?.snippet?.authorDisplayName,
      text: item?.snippet?.topLevelComment?.snippet?.textOriginal,
      replies: item?.replies
        ? item?.replies?.comments.map((reply) => ({
            name: reply?.snippet?.authorDisplayName,
            text: reply?.snippet?.textOriginal,
            replies: [],
          }))
        : [],
    }));
    setComments(items);
  };

  return comments;
};

export default useComment;
