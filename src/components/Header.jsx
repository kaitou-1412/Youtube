import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSidebar,
  login,
  logout,
  toggleDarkTheme,
} from "../redux/appSlice";
import { Link } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import useSearch from "../hooks/useSearch";

const Header = () => {
  const isLoggedIn = useSelector((store) => store.app.isLoggedIn);
  const darkTheme = useSelector((store) => store.app.darkTheme);
  const {
    searchQuery,
    setSearchQuery,
    searchSuggestions,
    showSuggestions,
    setShowSuggestions,
    onSearch,
    handleKeyDown,
    selectedSuggestion,
    setSelectedSuggestion,
  } = useSearch();

  const dispatch = useDispatch();
  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };
  const loginHandler = useGoogleLogin({
    onSuccess: (response) => dispatch(login(response.access_token)),
    onError: (error) => console.log(`Login Failed: ${error}`),
  });
  const logoutHandler = () => {
    googleLogout();
    dispatch(logout());
  };
  const darkThemeHandler = () => {
    dispatch(toggleDarkTheme());
  };

  return (
    <div
      className={
        "grid grid-flow-col px-5 py-4 shadow-lg" +
        (darkTheme
          ? " bg-darkModeDarkGray text-white  border-b border-b-darkModeGray"
          : "")
      }
    >
      <div className="flex items-center col-span-1">
        <img
          className="h-8 mx-2 cursor-pointer"
          src={
            darkTheme
              ? "https://cdn2.vectorstock.com/i/1000x1000/33/01/hamburger-like-menu-dark-mode-glyph-ui-icon-vector-43353301.jpg"
              : "https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          }
          alt="hamburger menu icon"
          onClick={toggleSidebarHandler}
        />{" "}
        <Link to="/">
          <img
            className={darkTheme ? "h-16 mx-2" : "h-6 mx-2"}
            src={
              darkTheme
                ? "https://cdn.neowin.com/news/images/uploaded/2018/01/1516306436_youtube4_story.jpg"
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            }
            alt="Youtube Logo"
          />
        </Link>
      </div>
      <div className="col-span-10 px-20">
        <div>
          <input
            className={
              "w-2/3 border border-r-0  border-gray-400 px-5 py-2 text-xl rounded-l-full" +
              (darkTheme ? " bg-darkModeBlack" : "")
            }
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            onKeyDown={handleKeyDown}
          />
          <button
            className={
              "border border-gray-400 px-7 py-2 text-xl rounded-r-full" +
              (darkTheme ? " bg-darkModeGray" : " bg-gray-100")
            }
            onClick={(e) => onSearch(e, searchQuery)}
            disabled={searchQuery === ""}
          >
            🔍
          </button>
        </div>
        {showSuggestions && searchSuggestions.length > 0 && (
          <div
            className={
              "absolute mt-1 py-2 px-5 w-[37.5rem] shadow-lg rounded-lg border" +
              (darkTheme
                ? " bg-darkModeDarkGray border-darkModeGray"
                : " bg-white border-gray-100")
            }
          >
            {searchSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className={
                  "py-2 shadow-sm" +
                  (darkTheme
                    ? " hover:bg-darkModeGray"
                    : " hover:bg-gray-100") +
                  (selectedSuggestion === index
                    ? darkTheme
                      ? " bg-darkModeGray"
                      : " bg-gray-100"
                    : "")
                }
                onClick={(e) => onSearch(e, suggestion)}
                onMouseOver={() => setSelectedSuggestion(-1)}
              >
                🔍 {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="col-span-1 flex items-center justify-around">
        <button className="text-2xl" onClick={darkThemeHandler}>
          {darkTheme ? "🌞" : "🌚"}
        </button>
        <img
          className="h-10"
          src={
            darkTheme
              ? "https://cdn4.vectorstock.com/i/1000x1000/97/68/account-avatar-dark-mode-glyph-ui-icon-vector-44429768.jpg"
              : "https://www.svgrepo.com/show/350417/user-circle.svg"
          }
          alt="User Icon"
        />
        {isLoggedIn ? (
          <button onClick={logoutHandler}>Logout</button>
        ) : (
          <button onClick={loginHandler}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
