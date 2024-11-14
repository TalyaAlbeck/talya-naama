import { useState, useEffect } from "react";
import Comments from "./comments";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [showComment, setShowComment] = useState(false);
  const [postIndex, setPostIndex] = useState(0);
  //   const currentUser = JSON.parse(localStorage.getItem("current User")).id;

  let disable = false;

  useEffect(() => {
    fetch("http://localhost:3000/posts/")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  function commentHandler(item) {
    if (!showComment) {
      setShowComment(true);
    } else {
      setShowComment(false);
    }
  }


  return (
    <>
      {posts.length ? (
        <>
          <div className="shownPost">
            <div>
              <strong>Post Nr.</strong> {JSON.stringify(posts[postIndex].id)}
            </div>
            <div>
              <strong>Title:</strong> {JSON.stringify(posts[postIndex].title)}
            </div>
            <div>
              <strong>Post:</strong> {JSON.stringify(posts[postIndex].body)}
            </div>
            <br />
            <button
              className="previousPost"
              disabled={disable}
              onClick={() => {
                postIndex <= 0 ? (disable = true) : setPostIndex((prev) => prev - 1);
              }}
            >
              previous post
            </button>&nbsp;
            <button
              className="nextPost"
              onClick={() => {
                postIndex >= posts.length - 1 ? (disable = true) : setPostIndex((prev) => prev + 1);
              }}
            >
              next post
            </button>
          </div>
          {showComment ? (
            <div className="commentsDiv">
              <button onClick={commentHandler}>hide comments</button>
              <Comments post={posts[postIndex]} postIndex={postIndex} />
            </div>
          ) : (
            <div className="commentsDiv">
              <button onClick={commentHandler}>show comments</button>
            </div>
          )}
        </>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
