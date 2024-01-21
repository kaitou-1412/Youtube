import React from "react";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex-grow grid grid-flow-col">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
