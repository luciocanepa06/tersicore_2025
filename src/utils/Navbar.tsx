import { NavLink } from "react-router";

function Navbar() {
  return (
    <>
      <h1>Navbar</h1>
      <nav>
        <NavLink to="/" end>
            Home
        </NavLink>
        <NavLink to="/about">
            About
        </NavLink>
      </nav>
    </>
  )
}

export default Navbar
