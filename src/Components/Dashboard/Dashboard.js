import Cards from "../Cards/Cards";
import Tables from "../Tables/Tables";
import "./Dashboard.css";

const Dashboard = () => {
    

  console.log("Dashboard");
  return (
    <>
      <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards />
    
        <Tables />
        <Tables />
        <Tables />
        <Tables />
        <Tables />
        <Tables />
        <Tables />
        <Tables />
      </div>
    </>
  );
};

export default Dashboard;
