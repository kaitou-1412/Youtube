import React from "react";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const darkTheme = useSelector((store) => store.app.darkTheme);
  return (
    <div
      className={
        "flex-grow grid grid-flow-col" +
        (darkTheme ? " bg-darkModeDarkGray text-white" : "")
      }
    >
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
