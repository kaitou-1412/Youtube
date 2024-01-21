import React from "react";

const SidebarSection = ({ heading, tabs }) => {
  return (
    <>
      {heading !== "" && <h1 className="font-bold pt-5">{heading}</h1>}
      {tabs.length > 0 && (
        <ul>
          {tabs.map((tab, index) => (
            <li key={index}>{tab}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SidebarSection;
