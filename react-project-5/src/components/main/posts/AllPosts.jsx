import { useState, useEffect } from "react";
import Comments from "./comments";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [showComment, setShowComment] = useState(false);
  const [commentIndex, setCommentIndex] = useState(0);
  //   const currentUser = JSON.parse(localStorage.getItem("current User")).id;

  let disable = false;

  useEffect(() => {
    fetch("http://localhost:3000/posts/")
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        setPosts(data);
      });
  }, []);

  // function getUser(data) {
  //   for (let user in data) {
  //     if (currentUser.username === data[user].username) {
  //       setList(data[user].todo[0]);
  //       console.log('data[user].todo: ', data[user].todo);
  //     }
  //   }
  // }

  function commentHandler(item) {
    if (!showComment) {
      setShowComment(true);
    } else {
      setShowComment(false);
    }
  }

  console.log(posts[commentIndex]);

  return (
    <>
      {posts.length ? (

        <div className="shownPost">
          <div>
            <strong>Post Nr.</strong> {posts[commentIndex].id}
          </div>
          <div>
            <strong>Title:</strong> {posts[commentIndex].title}
          </div>
          <div>
            <strong>Post:</strong> {posts[commentIndex].body}
          </div>
          <br />
          <button
            className="previousPost"
            disabled={disable}
            onClick={() => {
              commentIndex <= 0 ? (disable = true) : setCommentIndex((prev) => prev - 1);
            }}
          >
            previous post
          </button>
          <button
            className="nextPost"
            onClick={() => {
              commentIndex >= posts.length - 1 ? (disable = true) : setCommentIndex((prev) => prev + 1);
            }}
          >
            next post
          </button>
        </div>
      ) : (
        // </ul>
        <p>loading...</p>
      )}
    </>
  );
}
