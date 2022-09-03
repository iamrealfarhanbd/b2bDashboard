import "./app.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Settings from "./Components/Settings/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="dashboard" element={<Sidebar /> } >
            <Route index element={<Dashboard />}></Route>
            <Route path="setting" element={ <Settings />}></Route>
        </Route>
        <Route path="Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
