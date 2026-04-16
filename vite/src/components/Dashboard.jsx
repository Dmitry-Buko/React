import { Link, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div>
      <h3>My Dashboard</h3>
      <nav>
        <Link to={"/dashboard/home"}>Main</Link>
        <Link to={"/dashboard/settings"}>Settings</Link>
      </nav>
      <hr />
      <Outlet/>
    </div>
  );
};

export default Dashboard;
