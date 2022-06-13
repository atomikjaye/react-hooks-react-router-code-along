import { NavLink } from "react-router-dom"


function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* https://www.kindacode.com/article/react-router-how-to-highlight-active-link/ */
        className={({ isActive }) => (isActive ? "link active" : "link")}

      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        className={({ isActive }) => (isActive ? "link active" : "link")}
      // activeStyle={{ background: "darkblue" }}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Login
      </NavLink>
      <NavLink
        to="/signup"
        exact
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        SignUp
      </NavLink>
      <NavLink
        to="/messages"
        exact
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Messages
      </NavLink>
    </div>
  );
}

export default NavBar