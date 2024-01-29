import React from "react";
import { useSelector } from "react-redux";

const Label = ({ name }) => {
  const darkTheme = useSelector((store) => store.app.darkTheme);
  return (
    <button
      className={
        "m-2 px-5 py-2 rounded-lg" +
        (darkTheme ? " bg-darkModeGray text-white" : " bg-gray-200")
      }
    >
      {name}
    </button>
  );
};

export default Label;
