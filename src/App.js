import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";

function App() {
  return (
    <>
       <Routes>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
