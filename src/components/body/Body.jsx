import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Main></Main>
    </div>
  );
};

export default Body;
