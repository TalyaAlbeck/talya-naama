import { useEffect, useState } from "react";

export default function AddPost({ setMyPosts }) {
  const [newPost, setNewPost] = useState("");
  const currentUser = JSON.parse(localStorage.getItem("current User"));
  const [postId, setPostId] = useState(100);
  //   console.log("currentUser: ", currentUser);
  //   console.log("currentUser id: ", currentUser.id);
  useEffect(() => {}, []);
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: JSON.parse(currentUser.id),
        id: Math.random() * 10000000,
        title: "post title",
        body: newPost,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setMyPosts((prev) => {
          return [...prev, res];
        });
      });

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="new post" onChange={({ target }) => setNewPost(target.value)} required /> <br />
        <br />
        <button type="submit" onClick={handleSubmit}>
          {" "}
          add post
        </button>
      </form>
    </>
  );
}
