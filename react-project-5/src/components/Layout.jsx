import { Link, Outlet } from "react-router-dom"
export default function Layout(){
   

   
    return(
   <>
    <nav>
        <Link to="/home">Home</Link>
        <br/>
        <Link to="/posts">Posts</Link>
        <br/>
        <Link to="/album">Album</Link>
        <br/>
        <Link to="/todo">To-do</Link>

    </nav>
    <footer>
    <Link to="/login" replace>log out</Link>
    </footer>
    <Outlet/>
    </>
    )
}