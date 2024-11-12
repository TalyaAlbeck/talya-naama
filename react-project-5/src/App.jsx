import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import './App.css'
import LogIn from './components/logIn/LogIn'
import Register from './components/logIn/Register';
import Home from './components/userInfo/Home';
import Info from './components/userInfo/Info';
import Todo from './components/userInfo/Todo';
import Posts from './components/userInfo/Posts';
import Album from './components/userInfo/Album';
import Layout from './components/Layout';

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((dat) => {setData(dat); console.log(data)})
  }, [])
  
  return (
    <>
    


    <Router>
     
     <h1>{!data ? "loading..." : data[0].username}</h1>


     <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />

        <Route element={<Layout />}>
            <Route path="/home" element={<Home />}>
              <Route path="info" element={<Info />}/>
            </Route>
            <Route path="/todo" element={<Todo />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/album" element={< Album/>} />
        </Route>
     </Routes>
     </Router>
    </>
  )
}

export default App
