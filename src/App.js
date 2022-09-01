import './app.css'
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";

function App() {
  return (
    <>
      <div className="App">
        <div className="AppGlass">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="Login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
