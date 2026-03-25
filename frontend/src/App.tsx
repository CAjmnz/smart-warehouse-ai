import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Connecting...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/ai-test")
      .then((res) => res.json())
      .then((data) => setStatus(data.message))
      .catch(() => setStatus("Could not reach backend"));
  }, []);

  return (
    <div style={{ color: "white", background: "#111", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <h1>Smart Warehouse AI</h1>
      <p>Backend status: <strong>{status}</strong></p>
    </div>
  );
}

export default App;
