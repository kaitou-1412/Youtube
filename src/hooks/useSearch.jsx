import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import { readStream } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/slices/searchSlice";

const useSearch = () => {
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    // DEBOUNCING
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_API.Search + searchQuery);
    const reader = data.body.getReader();
    const res = await readStream(reader);
    setSearchSuggestions(res);
    dispatch(cacheResults({ [searchQuery]: res }));
  };

  return {
    searchQuery,
    setSearchQuery,
    searchSuggestions,
    showSuggestions,
    setShowSuggestions,
  };
};

export default useSearch;
