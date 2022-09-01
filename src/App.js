import "./app.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
