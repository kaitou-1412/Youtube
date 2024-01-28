import React from "react";

const useComment = () => {
  const comments = [
    {
      name: "Ruban",
      text: "He is a great communicator",
      replies: [],
    },
    {
      name: "Ruban",
      text: "He is a great communicator",
      replies: [
        {
          name: "Ruban",
          text: "He is a great communicator",
          replies: [
            {
              name: "Ruban",
              text: "He is a great communicator",
              replies: [],
            },
          ],
        },
        {
          name: "Ruban",
          text: "He is a great communicator",
          replies: [],
        },
      ],
    },
    {
      name: "Ruban",
      text: "He is a great communicator",
      replies: [],
    },
    {
      name: "Ruban",
      text: "He is a great communicator",
      replies: [],
    },
  ];
  return comments;
};

export default useComment;
