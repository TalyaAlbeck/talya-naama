import { useEffect, useState } from "react";

export default function MyPosts() {
  const [myPosts, setMyPosts] = useState([])
  const [postIndex, setPostIndex] = useState(0);

  let disable = false;
  const id = JSON.parse(localStorage.getItem("current User")).id

  useEffect(() => {
    fetch(`http://localhost:3000/posts`)
      .then((res) => res.json())
      .then((data) => {

        const userPosts = data.filter(item => JSON.stringify(item.userId) === id)
        console.log("userPosts: ", userPosts);
        setMyPosts(userPosts);
      });
    
  }, []);
  return (
    <>
    { myPosts.length  ? (
      <>
      <div className="showMyPost">
          <div>
            <strong>Post Nr.</strong> {myPosts[postIndex].id}
          </div>
          <div>
            <strong>Title:</strong> {myPosts[postIndex].title}
          </div>
          <div>
            <strong>Post:</strong> {myPosts[postIndex].body}
          </div><br />
          <button
            className="previousPost"
            disabled={disable}
            onClick={() => {
              postIndex <= 0 ? (disable = true) : setPostIndex((prev) => prev - 1);
            }}
          >
            previous post
          </button>
          <button
            className="nextPost"
            onClick={() => {
              postIndex >= myPosts.length - 1 ? (disable = true) : setPostIndex((prev) => prev + 1);
            }}
          >
            next post
          </button>
        </div>
      </>
    ) : (
        <h1>loading...</h1>
      )
    }
    </>
    
  );
}
