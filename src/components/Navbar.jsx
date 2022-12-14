import Logo from "/logo(48-27).svg";
// import Logo from "../assets/images/Logo.png";

import { Link } from "react-router-dom";

import "./styles/NavBar.scss";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="logo we need workout" />
      </Link>

      <ul className="navbar__ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/#exercises">Exercises</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
