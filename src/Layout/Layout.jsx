import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
function Layout() {
  return (
    <div className="flex flex-row ">
      {" "}
      <Sidebar />
      <div className="flex-1 overflow-hidden max-h-screen">
        {" "}
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
