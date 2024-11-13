import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import LogIn from "./components/logIn/LogIn";
import Register from "./components/logIn/Register";
import Home from "./components/main/Home";
import Info from "./components/main/Info";
import SearchItem from "./components/main/todoList/searchItem";
import Posts from "./components/main/posts/Posts";
import Album from "./components/main/Album";
import Layout from "./components/Layout";
import MyPosts from "./components/main/posts/MyPost";
import AllPosts from "./components/main/posts/AllPosts";
import NotFound from "./components/main/NotFound";

function App() {
  const [username, setUserName] = useState();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />

          <Route element={<Layout />}>
            <Route path="/home" element={<Home />}>
              <Route path="info" element={<Info />} />
            </Route>
            <Route path="/todo" element={<SearchItem />} />
            <Route path="/posts" element={<Posts />}>
              <Route path="myPosts" element={<MyPosts />} />
              <Route path="allPosts" element={<AllPosts />} />
            </Route>
            <Route path="/album" element={<Album />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
