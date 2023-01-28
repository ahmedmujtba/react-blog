import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Ahmed Mujtba</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About me</Link>
        <Link to="/projects">My Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
