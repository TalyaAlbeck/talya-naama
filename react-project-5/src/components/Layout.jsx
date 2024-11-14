import { Link, Outlet } from "react-router-dom";
export default function Layout() {
  function handleLogout() {
    localStorage.removeItem("current User");
    localStorage.removeItem("list");
  }

  const isLoggedIn = localStorage.getItem("current User");

  return (
    <>
      {typeof localStorage.getItem("current User") === "string" ? (
        <>
          <nav>
            <Link to="/home" className="nav">
              Home
            </Link>
            {/* <br/> */}
            <Link to="/posts" className="nav">
              Posts
            </Link>
            {/* <br/> */}
            <Link to="/album" className="nav">
              Album
            </Link>
            {/* <br/> */}
            <Link to="/todo" className="nav">
              To-do
            </Link>
          </nav>
          <footer>
            <Link to="/login" onClick={handleLogout} replace>
              log out
            </Link>
          </footer>
          <Outlet />
        </>
      ) : (
        <>
          <p> you are not logged in </p>
          <br />
          <Link to="/login" replace>
            log in
          </Link>
        </>
      )}
    </>
  );
}
