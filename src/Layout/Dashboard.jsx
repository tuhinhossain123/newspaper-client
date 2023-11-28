import { FaHouse, FaUser } from "react-icons/fa6";
import { GrArticle } from "react-icons/gr";
import { IoMdPersonAdd } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-black text-white p-3">
        <ul className="menu text-lg text-white font-semibold">
          <li>
            <NavLink to="/">
              <FaHouse />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/allUsers">
              <FaUser></FaUser>
              All Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/allArticlesDashboard">
              <GrArticle />
              All Articles
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addPublisher">
              <IoMdPersonAdd />
              Add Publisher
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8 bg-slate-200">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
