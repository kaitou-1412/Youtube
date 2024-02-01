import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../redux/searchSlice";
import { useNavigate } from "react-router-dom";
import fetchJsonp from "fetch-jsonp";

const useSearch = () => {
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);

  useEffect(() => {
    // DEBOUNCING
    const timer = setTimeout(() => {
      if (searchQuery !== "") {
        if (searchCache[searchQuery]) {
          setSearchSuggestions(searchCache[searchQuery]);
        } else {
          getSearchSuggestions();
        }
      } else {
        setSearchSuggestions([]);
      }
    }, 200);
    setShowSuggestions(true);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetchJsonp(YOUTUBE_API.Search + searchQuery);
    let res = await data.json();
    res = res[1].map((arr) => arr[0]);
    setSearchSuggestions(res);
    dispatch(cacheResults({ [searchQuery]: res }));
  };

  const onSearch = (e, searchQuery) => {
    e.preventDefault();
    setSearchQuery(searchQuery);
    navigate("/results?search_query=" + encodeURIComponent(searchQuery));
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" && selectedSuggestion > 0) {
      setSelectedSuggestion((prev) => prev - 1);
    } else if (
      e.key === "ArrowDown" &&
      selectedSuggestion < searchSuggestions.length - 1
    ) {
      setSelectedSuggestion((prev) => prev + 1);
    } else if (e.key === "Enter" && selectedSuggestion >= 0) {
      onSearch(e, searchSuggestions[selectedSuggestion]);
      setTimeout(() => setShowSuggestions(false), 200);
    }
  };

  return {
    searchQuery,
    setSearchQuery,
    searchSuggestions,
    showSuggestions,
    setShowSuggestions,
    onSearch,
    handleKeyDown,
    selectedSuggestion,
    setSelectedSuggestion,
  };
};

export default useSearch;
