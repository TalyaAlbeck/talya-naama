
import { useState, useEffect } from "react";

export default function AllPosts() {
  const [posts, setPosts] = useState([])
  const currentUser = JSON.parse(localStorage.getItem("current User")).id;

  useEffect(() => {
    fetch("http://localhost:3000/posts/")
      .then((res) => res.json())
      .then((data) => {
        // getUser(data);
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

  // const handleCheck = async (id) => {
  //   const listItems = list.map((item) => 
  //     (item.id === id ? { ...item, checked: !item.checked } : item));
  //   setList(listItems);
  //   localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  //   updateList(1, listItems)
  // };

  // const handelDelete = async (id) => {
  //   const listItems = list.filter((item) => item.id !== id);
  //   setList(listItems);
  //   localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  //   updateList(1, listItems)
  // };

  return (
    <>
      {posts ? (
        <ul>
          {posts.map((item) => (
            <li className="item" key={item.id}>
              {/* <input type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked} />
              <label style={item.checked ? { textDecoration: "line-through" } : null}>{item.item}</label>
              <button onClick={() => handelDelete(item.id)}>-</button> */}
              {item.body}
            </li>
          ))}
        </ul>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
