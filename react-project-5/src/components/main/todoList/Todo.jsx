import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import SearchItem from "./searchItem";

export default function Todo({ list, setList }) {
  const currentUser = JSON.parse(localStorage.getItem("current User"));

  useEffect(() => {
    fetch("http://localhost:3000/users/")
      .then((res) => res.json())
      .then((data) => {
        getUser(data);
      });
  }, []);

  function getUser(data) {
    for (let user in data) {
      if (currentUser === data[user].username) {
        setList(data[user].todo);
      }
    }
  }

  const handleCheck = (id) => {
    const listItems = list.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
    setList(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handelDelete = (id) => {
    const listItems = list.filter((item) => item.id !== id);
    setList(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <>
      <AddItem list={list} setList={setList} />
      {list.length ? (
        <ul>
          {list.map((item) => (
            <p className="item" key={item.id}>
              <input type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked} />
              <label style={item.checked ? { textDecoration: "line-through" } : null}>{item.item}</label>
              <button onClick={() => handelDelete(item.id)}>-</button>
            </p>
          ))}
        </ul>
      ) : (
        <p>Your list is empty.</p>
      )}
    </>
  );
}
