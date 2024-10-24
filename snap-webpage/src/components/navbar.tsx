import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex px-16 border-2 items-center py-4 bg-slate-100">
      <div className="flex-initial w-32  text-3xl font-bold">
        <Link to="/">Snap</Link>
      </div>
      <div className="flex-1 space-x-8 font-semibold">
        <Link to="/Features">Features</Link>
        <Link to="/">Company</Link>
        <Link to="/">Careers</Link>
        <Link to="/">About</Link>
      </div>
      <div className="space-x-8">
        <Link to="/Login" className=" font-semibold">
          Login
        </Link>
        <Link to="/Register">
          <button className=" border-2 border-black px-4 py-2 rounded-xl">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
