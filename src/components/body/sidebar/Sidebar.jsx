import React from "react";
import SidebarSection from "./sidebar-section/SidebarSection";
import { SECTION_DATA } from "../../../utils/constants";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);
  const darkTheme = useSelector((store) => store.app.darkTheme);

  // Early return pattern
  if (!isSidebarOpen) return null;

  return (
    <div
      className={
        "col-span-1 p-5 shadow-lg" +
        (darkTheme ? " border-r border-r-darkModeGray" : "")
      }
    >
      {SECTION_DATA.length > 0 &&
        SECTION_DATA.map((section, index) => (
          <SidebarSection key={index} {...section} />
        ))}
    </div>
  );
};

export default Sidebar;
