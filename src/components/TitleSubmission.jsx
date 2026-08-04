import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TitleSubmission.css";

function TitleSubmission() {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [domain, setDomain] = useState("");
  const [description, setDescription] = useState("");

  const checkTitle = async () => {

    if (title.trim() === "") {
      alert("Enter Project Title");
      return;
    }

    try {

      const response = await fetch("https://online-title-verification-system-backend.onrender.com/api/titles/verify") {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          titleName: title
        })
      });

      const data = await response.text();

      const result = {
        title: title,
        domain: domain,
        description: description,
        similarity: data.includes("Similar") ? "100%" : "0%",
        status: data
      };

      localStorage.setItem("result", JSON.stringify(result));

      navigate("/result");

    } catch (error) {
  console.error(error);
  alert(error.message);
}

  };

  return (

    <div className="submit-container">

      <div className="submit-card">

        <h2>📝 Submit Project Title</h2>

        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        >
          <option value="">Select Domain</option>
          <option>Artificial Intelligence</option>
          <option>Machine Learning</option>
          <option>Data Science</option>
          <option>Cyber Security</option>
          <option>Web Development</option>
          <option>Cloud Computing</option>
        </select>

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={checkTitle}>
          Verify Title
        </button>

      </div>

    </div>

  );

}

export default TitleSubmission;