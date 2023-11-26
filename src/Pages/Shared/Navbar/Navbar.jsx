import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("login success"))
      .catch((error) => {
        console.error(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-gray-600 underline font-bold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addArticles"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-gray-600 underline font-medium"
              : ""
          }
        >
          Add Articles
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allArticles"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-gray-600 underline font-medium"
              : ""
          }
        >
          All Articles
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/subscription"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-gray-600 underline font-medium"
              : ""
          }
        >
         Subscription
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myArticles"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-gray-600 underline font-medium"
              : ""
          }
        >
         My Articles
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/premiumArticles"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-gray-600 underline font-medium"
              : ""
          }
        >
         Premium Articles
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <div className="w-[10rem]">
            <img src={logo} alt="" className="w-full" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex  gap-3">
                <div className="hidden  md:flex items-center">
                  {/* <span className="mr-4">{user.email}</span> */}
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-24 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                </div>
                <button
                  onClick={handleLogOut}
                  className="p-3 font-bold rounded  bg-[#02a388] text-white"
                >
                  Log Out
                </button>
              </div>
            </>
          ) : (
            <Link to="/login">
              <button className="p-3 font-bold rounded  bg-[#02a388] text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
