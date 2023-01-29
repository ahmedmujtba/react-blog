import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        src="./assets/logo.png"
        alt="website-logo"
        width={100}
        height="100"
      ></img>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About me</Link>
        <Link to="/myprojects">My Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
