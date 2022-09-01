import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="App">
        <div className="AppGlass">
            <Sidebar />
            <Dashboard />
        </div>
      </div>
    </>
  );
};

export default Layout;
