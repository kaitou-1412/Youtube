import React from "react";

const Comment = ({ name, text, replies }) => {
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2 ">
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
