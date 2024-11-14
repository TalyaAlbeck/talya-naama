import { useEffect } from "react";

export default function MyPosts() {
  useEffect(() => {
    fetch("http://localhost:3000/posts/1")
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        setPosts(data);
      });
  }, []);
  return <></>;
}
