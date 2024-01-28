import React from "react";
import useComment from "../../../../hooks/useComment";
import Comment from "./comment/Comment";

const CommentsList = ({ comments }) => {
  if (comments.length === 0) return null;
  return comments.map((comment, index) => {
    const { replies } = comment;
    return (
      <div>
        <Comment key={index} {...comment} />
        {replies.length > 0 && (
          <div className="ml-5 pl-5 border border-l-black">
            <CommentsList comments={replies} />
          </div>
        )}
      </div>
    );
  });
};

const Comments = () => {
  // N-Level Nested Comments
  const comments = useComment();
  if (comments.length === 0) return null;
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold ">Comments:</h1>
      <CommentsList comments={comments} />
    </div>
  );
};

export default Comments;
