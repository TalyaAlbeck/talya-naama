import React from 'react';
import { useState, useEffect } from 'react';

export default function Register() {
    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [mail, setMail] = useState("")
    const [phone, setPhone] = useState(0)

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then((res) => res.json())
        .then((dat) => {setData(dat); console.log(data)})
    }, [])

    function handelSubmit() {
        fetch("http://localhost:3000/users", {
            method:"POST",
            body: JSON.stringify({
                id: data.length + 1,
                name: name,
                username: userName,
                email: mail,
                phone: phone,
                website: password
            })
        })
    }
    

  return (
    <div className='register'>
        <input placeholder="user name" onChange={({target}) => setUserName(target.value)} /> <br />
        <input placeholder="real name" onChange={({target}) => setName(target.value)} /> <br />
        <input placeholder="password" onChange={({target}) => setPassword(target.value)} /> <br />
        <input placeholder="email" onChange={({target}) => setMail(target.value)} /> <br />
        <input placeholder="phone" onChange={({target}) => setPhone(target.value)} /> <br />
        <button type="submit" onClick={handelSubmit}>sign up</button>
    </div>
  )
}
