import React from "react";
import { Outlet } from "react-router";
import Navbar from "../component/Navbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-[#020817]">
        <Navbar/>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;