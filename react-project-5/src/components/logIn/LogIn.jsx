import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import App from '../../App';

export default function LogIn() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState(null)
    
    useEffect(() => {
      fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((dat) => {setData(dat); console.log("hello from fetch")})
  }, [])

    function handelSubmit() {        
        for (let user in data) {
            if(userName === data[user].username && password === data[user].website) {
                console.log('userName: ', userName);
                localStorage.setItem("current User", JSON.stringify(userName) )
                return data[user].name;
            }
        } 
        alert("name or password are incorrect")
    }

    return (
        <>
            <input placeholder="userName" onChange={({target}) => setUserName(target.value)}/> <br />
            <input placeholder="password" onChange={({target}) => setPassword(target.value)}/> <br />
            <button type="submit" onClick={handelSubmit}>log in</button><br />
            <Link to="/register">dont have user? click here</Link>
        </>
    )
}