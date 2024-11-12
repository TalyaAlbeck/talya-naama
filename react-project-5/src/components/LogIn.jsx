import { Link } from 'react-router-dom'

export default function LogIn() {
    return (
        <>
            <input placeholder="userName" /> <br />
            <input placeholder="password" /> <br />
            <button type="submit">log in</button>
            <Link to="/register">dont have user?  click here</Link>
            <p> balah sijjh</p>
        </>
    )
}