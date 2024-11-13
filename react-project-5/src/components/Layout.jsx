import { Link, Outlet } from "react-router-dom"
export default function Layout(){
   
    function handleLogout(){
        localStorage.removeItem("current User");
    }

    const isLoggedIn = localStorage.getItem("current User");

    console.log("is logged in" ,isLoggedIn);
    console.log("type of: is logged in:" ,typeof(isLoggedIn));
    return(
   <>
   {typeof(localStorage.getItem("current User"))==="string"?
    <>

        <nav>
            <Link to="/home">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/album">Album</Link>
            <Link to="/todo">To-do</Link>
        </nav>
        <footer>
        <Link to="/login" onClick={handleLogout} replace >log out</Link>
        </footer>
        <Outlet/>
    </>:
    
    <>
        <p> you are not logged in </p>
        <br />
        <Link to="/login" replace >log in</Link>
        </>}
    </>
    )
}