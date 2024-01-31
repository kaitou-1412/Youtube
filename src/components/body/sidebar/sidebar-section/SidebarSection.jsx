import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SidebarItem = ({ icon, title }) => {
  const darkTheme = useSelector((store) => store.app.darkTheme);
  return (
    <span className="my-2 flex">
      <img
        className={
          "w-6 rounded-md" + (darkTheme ? " bg-darkModeLightGray" : " bg-white")
        }
        src={icon}
        alt="icon"
      />
      <span className="pl-5">{title}</span>
    </span>
  );
};

const SidebarSection = ({ heading, tabs }) => {
  const darkTheme = useSelector((store) => store.app.darkTheme);
  return (
    <>
      {heading !== "" && <h1 className="font-bold text-xl">{heading}</h1>}
      {tabs.length > 0 && (
        <div>
          <ul>
            {tabs.map((tab, index) => (
              <li key={index}>
                {tab?.link ? (
                  <Link to={tab?.link}>
                    <SidebarItem {...tab} />
                  </Link>
                ) : (
                  <SidebarItem {...tab} />
                )}
              </li>
            ))}
          </ul>
          <hr
            className={
              "border-t my-4" +
              (darkTheme ? " border-darkModeGray" : "  border-gray-300")
            }
          />
        </div>
      )}
    </>
  );
};

export default SidebarSection;
