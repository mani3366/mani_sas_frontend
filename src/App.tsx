import { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [message, setMessage] = useState("Connecting to backend...");
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/health/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error(error);
        setError("Backend connection failed");
      });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Mani SaaS</h1>

      <h2>Frontend</h2>

      <p>
        React + TypeScript + Vite is running.
      </p>

      <h2>Backend Connection</h2>

      {!error ? (
        <p>{message}</p>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}

export default App;