import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import { updateList } from "../../server";

export default function Todo({ list, setList }) {
  const currentUser = JSON.parse(localStorage.getItem("current User"));
  const userId = currentUser.id;

  useEffect(() => {
    fetch("http://localhost:3000/users/")
      .then((res) => res.json())
      .then((data) => {
        getUser(data);
      });
  }, []);

  function getUser(data) {
    for (let user in data) {
      if (currentUser.username === data[user].username) {
        setList(data[user].todo);
        // setList(data[user].todo[0]);
      }
    }
  }

  const handleCheck = async (id) => {
    const listItems = list.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
    setList(listItems);
    localStorage.setItem("list", JSON.stringify(listItems));
    updateList(userId, listItems);
  };

  const handelDelete = async (id) => {
    const listItems = list.filter((item) => item.id !== id);
    setList(listItems);
    localStorage.setItem("list", JSON.stringify(listItems));
    updateList(userId, listItems);
  };


  return (
    <>
      <AddItem list={list} setList={setList} />
      {list.length ? (
        <ul className="listItems" >
          <h2>To-Do List:</h2>
          {list.map((item) => (
            <p className="item" key={item.id}>
              <input className="" type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked} />
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
