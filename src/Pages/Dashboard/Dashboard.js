import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-3xl font-bold text-purple-500">
          Welcome to the Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to="/dashboard">My Appointments</Link>
          </li>
          <li>
            <Link to="/dashboard/review">My Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
