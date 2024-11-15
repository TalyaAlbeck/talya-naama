import { useEffect, useState } from "react";

export default function Comments({ post, postIndex }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/comments")
      .then((res) => res.json())
      .then((data) => {
        setComments(data.filter((item) => item.postId == post.id));
      });
  }, [postIndex]);

  return (
    <div>
      {comments.map((item) => (
        <p className="comment" key={item.id}>{item.body}</p>
      ))}
    </div>
  );
}
