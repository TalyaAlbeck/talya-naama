import { Outlet, useNavigate } from "react-router-dom";
export default function Posts() {
  const navigate = useNavigate();
  return (
    <>
    <br />
      <button onClick={() => navigate("myPosts")}>my posts</button>
      <button onClick={() => navigate("allPosts")}>all posts</button>
      <Outlet />
    </>
  );
}
