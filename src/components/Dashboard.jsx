import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "../components/Dashboard.css";

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Dashboard;
