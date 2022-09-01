import "./app.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;