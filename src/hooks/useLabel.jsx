import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";

const useLabel = () => {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    getLabels();
  }, []);

  const getLabels = async () => {
    const data = await fetch(`${YOUTUBE_API.VideoCategoriesList}`);
    const { items } = await data.json();
    setLabels(items.map((item) => item.snippet.title));
  };

  return labels;
};

export default useLabel;
