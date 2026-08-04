import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">

      <h1 className="dashboard-title">
        📊 Dashboard
      </h1>

      <p className="dashboard-subtitle">
        Welcome to Online Title Verification System
      </p>

      <div className="card-container">

        <div className="card">
          <h3>📝 Submit Project Title</h3>
          <p>Verify your new project title.</p>

          <Link to="/submit">
            <button>Open</button>
          </Link>
        </div>

        <div className="card">
          <h3>📋 Verification Result</h3>
          <p>View latest verification result.</p>

          <Link to="/result">
            <button>Open</button>
          </Link>
        </div>

        <div className="card">
          <h3>🚪 Logout</h3>
          <p>Return to Home Page.</p>

          <Link to="/">
            <button>Logout</button>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;