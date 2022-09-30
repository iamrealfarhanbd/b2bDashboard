import Cards from "../Cards/Cards";
import RightSidebar from "../RightSidebar/RightSidebar";
import Tables from "../Tables/Tables";
import "./Dashboard.css";

const Dashboard = () => {
  console.log("Dashboard");
  return (
    <div className="container">
      <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards />
        <div className="row">
       
        <div className="col-md-8">
          <Tables />
          </div>
            <div className="col-md-4">
          <RightSidebar />
          </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
