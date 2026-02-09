import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [fileContent, setFileContent] = useState("");

  const writeFile = async () => {
    await fetch("http://localhost:5000/write", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    alert("File Written Successfully");
  };

  const readFile = async () => {
    const res = await fetch("http://localhost:5000/read");
    const data = await res.json();
    setFileContent(data.content);
  };

  return (
    <div>
      <nav style={navStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/abes.jpg" alt="ABES Logo" style={{ height: "40px" }} />
          <span>ABES</span>
        </div>

        <div>
          <a href="#">Home</a> | <a href="#">Contact</a>
        </div>
      </nav>

      <div style={{ padding: "20px" }}>
        <h2>FS Module for Node</h2>

        <textarea
          rows="5"
          cols="40"
          placeholder="Enter text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <br />
        <br />

        <button onClick={writeFile}>FS Write</button>
        <button onClick={readFile} style={{ marginLeft: "10px" }}>
          FS Read
        </button>

        <h3>File Content:</h3>
        <p>{fileContent}</p>
      </div>
    </div>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 20px",
  background: "#222",
  color: "white",
};

export default App;
