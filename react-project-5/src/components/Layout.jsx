import { Link } from "react-router-dom"
export default function Layout(){
   function logOut(){

   }
    return(
   <>
    <nav>
        <Link to="/info">My Info</Link>
        <br/>
        <Link to="/posts">Posts</Link>
        <br/>
        <Link to="/album">Album</Link>
        <br/>
        <Link to="/todo">To-do</Link>

    </nav>
    <footer>
    <button onClick={logOut}>Log Out</button>
    </footer>
    </>)
}