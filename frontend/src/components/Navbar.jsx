import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


function Navbar() {
  return (
    <nav className="bg-[#b5ae9d] px-10 py-4 flex items-center justify-between shadow-md">
      
      {/* Logo */}
      <Link to="/" className="h-10 cursor-pointer object-contain transition-transform duration-200 hover:scale-105">
          <img
            src={logo}
            alt="CozyStay"
            className="h-10"
          />
        </Link>

      {/* Search */}
      <div className="w-1/3">
        <input
          type="text"
          placeholder="Search stays..."
          className="w-full px-4 bg-[#2a2a2a] py-2 rounded-md border border-gray-400 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
      </div>

      {/* Links */}
      <div className="flex items-center gap-6 text-black font-medium">
        <span className="cursor-pointer hover:text-gray-700 transition">
          Home
        </span>
        <span className="cursor-pointer hover:text-gray-700 transition">
          Add Stay
        </span>

        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;