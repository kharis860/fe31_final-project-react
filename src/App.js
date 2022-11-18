import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { Routes, Route, Link } from "react-router-dom";
import DataPasien from "./components/DataPasien";
import Konsultasi from "./components/Konsultasi";
import InnerDashboard from "./components/InnerDashboard";
import Login from "./components/Login";

function App() {
    return (
        // <div>
        //   <Sidebar />
        //   <Navbar />
        // </div>
        <Routes>
            <Route path="/" element={<Dashboard />}>
                <Route path="/" element={<InnerDashboard />} />
                <Route path="/data" element={<DataPasien />} />
                <Route path="/konsultasi" element={<Konsultasi />} />
            </Route>
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default App;
