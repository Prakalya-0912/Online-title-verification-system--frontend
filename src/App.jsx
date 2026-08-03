import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [titleName, setTitleName] = useState("");
  const [message, setMessage] = useState("");

  const verifyTitle = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/titles/verify",
        {
          titleName: titleName,
        }
      );
      setMessage(response.data);
    } catch  {
      setMessage("Error while verifying title");
    }
  };

  const addTitle = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/titles",
        {
          titleName: titleName,
        }
      );
      setMessage(response.data);
    } catch  {
      setMessage("Error while adding title");
    }
  };

  return (
    <div className="container">
      <h1>Online Title Verification System</h1>

      <input
        type="text"
        placeholder="Enter Project Title"
        value={titleName}
        onChange={(e) => setTitleName(e.target.value)}
      />

      <div className="buttons">
        <button onClick={verifyTitle}>Verify Title</button>
        <button onClick={addTitle}>Add Title</button>
      </div>

      <h2>{message}</h2>
    </div>
  );
}

export default App;