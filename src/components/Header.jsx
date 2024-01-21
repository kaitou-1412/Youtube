import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/slices/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
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
        <img
          className="h-6 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="Youtube Logo"
        />
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
      <div className="col-span-1 flex items-center justify-center">
        <img
          className="h-10"
          src="https://www.svgrepo.com/show/350417/user-circle.svg"
          alt="User Icon"
        />
      </div>
    </div>
  );
};

export default Header;
