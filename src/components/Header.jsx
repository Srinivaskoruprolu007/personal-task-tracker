import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-blue-600 shadow-md p-4 text-yellow-400">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <Link to={"/"} className="hover:text-gray-300">
            Task Tracker
          </Link>
        </div>
        <div>
          <Link to={"/login"} className="mr-4 hover:text-gray-300">
            Login
          </Link>
          <Link to={"/signup"} className="mr-4 hover:text-gray-300">
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Header;
