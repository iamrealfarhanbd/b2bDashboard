import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "./SidebarData";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="App">
        <div className="AppGlass">
          <div
            className="bars"
            style={expanded ? { left: "60%" } : { left: "5%" }}
            onClick={() => setExpaned(!expanded)}
          >
            <UilBars />
          </div>
          <motion.div
            className="sidebar"
            variants={sidebarVariants}
            animate={window.innerWidth <= 768 ? `${expanded}` : ""}
          >
            {/* logo */}
            <div className="logo">
              {/* <img src={Logo} alt="logo" /> */}
              <span>
                Dash<span>B</span>oard
              </span>
            </div>

            <div className="menu">
              {SidebarData.map((item, index) => {
                return (
                  <Link
                    className={
                      selected === index ? "menuItem active" : "menuItem"
                    }
                    key={index}
                    onClick={() => setSelected(index)}
                    to={item.path}
                  >
                    <item.icon />
                    <span>{item.heading}</span>
                  </Link>
                );
              })}
              {/* signoutIcon */}
              <div className="menuItem">
                <UilSignOutAlt />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;