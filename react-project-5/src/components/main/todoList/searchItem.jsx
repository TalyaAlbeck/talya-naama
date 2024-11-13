import React, { useState } from "react";
import Todo from "./Todo";

export default function SearchItem() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  console.log("list: ", list);

  return (
    <>
      <form
        className="searchForm form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(search);
        }}
      >
        <input
          id="search"
          type="text"
          role="searchbox"
          placeholder="Search Items"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </form>
      <Todo list={list.filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))} setList={setList} />
    </>
  );
}
