import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen p-5  bg-gray-400">
        <ul className="menu text-lg text-white font-semibold">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/dashboard/allUsers">All Users</NavLink></li>
            <li><NavLink to="/dashboard/allArticlesDashboard">All Articles</NavLink></li>
            <li><NavLink to="/dashboard/addPublisher">Add Publisher</NavLink></li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
