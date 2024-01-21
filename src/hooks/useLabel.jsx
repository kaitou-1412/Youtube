import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import { useSelector } from "react-redux";

const useLabel = () => {
  const accessToken = useSelector((store) => store.app.accessToken);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    if (accessToken) {
      getLabels(accessToken);
    }
  }, [accessToken]);

  const getLabels = async (accessToken) => {
    const data = await fetch(
      `${YOUTUBE_API.VideoCategoriesList}&acess_token=${accessToken}`
    );
    const { items } = await data.json();
    setLabels(items.map((item) => item.snippet.title));
  };

  return labels;
};

export default useLabel;
