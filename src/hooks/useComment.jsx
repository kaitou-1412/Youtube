import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";

const useComment = (videoId) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    let api = `${YOUTUBE_API.Comments}&videoId=${videoId}`;
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
