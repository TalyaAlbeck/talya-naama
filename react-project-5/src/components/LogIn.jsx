import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import App from '../App';

export default function LogIn() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState(null)
    
    useEffect(() => {
      fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((dat) => {setData(dat); console.log(data)})
  }, [])

    function handelSubmit() {
        for (let user in data) {
            if(userName === data[user].username && password === data[user].website) {
                alert(`hello, ${userName}`);
                return data[user].name;
            } else {
                alert("name or password are incorrect")
                return;    
            }
        } 
    }

    return (
        <>
            <input placeholder="userName" /> <br />
            <input placeholder="password" /> <br />
            <button type="submit">log in</button>
            <Link to="/register">dont have user?  click here</Link>
        </>
    )
}