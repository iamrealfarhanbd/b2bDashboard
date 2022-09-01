import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Settings from "../Settings/Settings";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="App">
        <div className="AppGlass">
            <Sidebar />
            <Dashboard />
            <Settings />
        </div>
      </div>
    </>
  );
};

export default Layout;
