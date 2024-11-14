import { useState, useEffect } from "react";
import Comments from "./comments";

export default function AllPosts() {
  const [posts, setPosts] = useState([])
  const [showComment, setShowComment] = useState(false)
  const [commentIndex, setCommentIndex] = useState(0)
  const currentUser = JSON.parse(localStorage.getItem("current User")).id;

  let disable = false;

  useEffect(() => {
    fetch("http://localhost:3000/posts/")
      .then((res) => res.json())
      .then((data) => {
        console.log('data: ', data);
        setPosts(data)
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
    setShowComment(true)
    } else {
      setShowComment(false)
    }
  }

console.log(posts[commentIndex]);



  return (
    <>
      {posts ? (
        // <ul key="1">
        //   {posts.map((item) => (
        //     item.id <= 10 &&
        //     <div  className="comment" key={item.id}>
        //     <p key={item.title}>
        //       {item.body}
        //     </p>
        //     <button onClick={() => {commentHandler(item);
        //       // item.isShoed = true;
        //     }}>comments</button>
        //     {showComment && <Comments post={item} />}
        //     </div>
        //   ))}

        <div className="shownPost">
          {JSON.stringify(posts[commentIndex])}
          <br/><button className="previousPost" disabled={disable} onClick={() => {
            commentIndex <= 0 ? disable = true : 
            setCommentIndex((prev) => prev - 1)            
            }}>previous post</button>
          <button className="nextPost" onClick={() => {
            commentIndex > posts.length ? disable = true : 
            setCommentIndex((prev) => prev + 1)
          }}>next post</button>
        </div>
        // </ul>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
