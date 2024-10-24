import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <Link to="/">Snap</Link>
      <Link to="/Features">Features</Link>
      <Link to="/">Company</Link>
      <Link to="/">Careers</Link>
      <Link to="/">About</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Register">
        <button>Register</button>
      </Link>
    </div>
  );
}

export default Navbar;
