import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, login, logout } from "../utils/slices/appSlice";
import { Link } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

const Header = () => {
  const isLoggedIn = useSelector((store) => store.app.isLoggedIn);

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

  return (
    <div className="grid grid-flow-col px-5 py-4 shadow-lg">
      <div className="flex items-center col-span-1">
        <img
          className="h-8 mx-2 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="hamburger menu icon"
          onClick={toggleSidebarHandler}
        />{" "}
        <Link to="/">
          <img
            className="h-6 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="Youtube Logo"
          />
        </Link>
      </div>
      <div className="col-span-10 px-20">
        <input
          className="w-2/3 border border-r-0  border-gray-400 px-5 py-2 text-xl rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 bg-gray-100 px-7 py-2 text-xl rounded-r-full">
          🔍
        </button>
      </div>
      <div className="col-span-1 flex items-center justify-around">
        <img
          className="h-10"
          src="https://www.svgrepo.com/show/350417/user-circle.svg"
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
