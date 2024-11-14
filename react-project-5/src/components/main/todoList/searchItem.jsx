import React, { useState } from "react";
import Todo from "./Todo";

export default function SearchItem() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  return (
    <>
      <form
        className="searchForm inputForm1"
        onSubmit={(e) => {
          e.preventDefault();
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
      <Todo list={list.filter((item) => {return item.item.toLowerCase().includes(search.toLowerCase())})} setList={setList} />
    </>
  );
}
