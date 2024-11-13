import { useState, useEffect } from "react";

export default function Todo (){

    const [list, setList] = useState([])
    const currentUser = JSON.parse(localStorage.getItem("current User"))

        fetch("http://localhost:3000/users/")
        .then((res) => res.json())
        .then((data) => {getUser(data)})


    function getUser(data) {
        for (let user in data) {
            if(currentUser === data[user].username) {
                setList(data[user].todo)
            }
        } 
    }

    const handleCheck = (id) => {
        const listItems = list.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setList(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    const handelDelete = (id) => {
        const listItems = list.filter((item) => item.id !== id)
        setList(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    return (<>
        <p>hi from todo</p>
         {list.length ? (
                <ul>
                    {list.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? {textDecoration: "line-through"} : null}
                            >{item.item}</label>
                            <button
                                onClick={() => handelDelete(item.id)}
                            >-</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your list is empty.</p>
            )}
    </>)
}