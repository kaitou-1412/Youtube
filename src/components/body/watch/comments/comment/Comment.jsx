import React from "react";
import { useSelector } from "react-redux";

const Comment = ({ name, text }) => {
  const darkTheme = useSelector((store) => store.app.darkTheme);
  return (
    <div
      className={
        "flex p-2 my-2 shadow-sm rounded-lg" +
        (darkTheme ? " bg-darkModeGray" : " bg-gray-100")
      }
    >
      <img
        className="w-12 h-12"
        src="https://www.svgrepo.com/show/350417/user-circle.svg"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
