import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex px-16  items-center py-4  bg-zinc-50 ">
      <div className="flex-initial w-32  text-3xl font-bold">
        <Link to="/">Snap</Link>
      </div>
      <div className="flex flex-1 space-x-8 font-semibold text-zinc-500 ">
        <Link to="/Features" className="flex  items-center gap-1">
          Features
          <div>
            <ChevronDown size={16} />
          </div>
        </Link>
        <Link to="/" className="flex  items-center gap-1">
          Company
          <div>
            <ChevronDown size={16} />
          </div>
        </Link>
        <Link to="/">Careers</Link>
        <Link to="/">About</Link>
      </div>
      <div className="space-x-8 text-zinc-500">
        <Link to="/Login" className=" font-semibold">
          Login
        </Link>
        <Link to="/Register">
          <button className=" border-2 border-black px-4 py-2 rounded-xl font-semibold text-zinc-500">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
