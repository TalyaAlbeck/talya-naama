import { Link, Outlet } from "react-router-dom"
export default function Layout(){
   

   
    return(
   <>
    <nav>
        <Link to="/home" className="nav">Home</Link>
        {/* <br/> */}
        <Link to="/posts" className="nav">Posts</Link>
        {/* <br/> */}
        <Link to="/album" className="nav">Album</Link>
        {/* <br/> */}
        <Link to="/todo" className="nav">To-do</Link>
    </nav>
    <footer>
    <Link to="/login" replace>log out</Link>
    </footer>
    <Outlet/>
    </>
    )
}