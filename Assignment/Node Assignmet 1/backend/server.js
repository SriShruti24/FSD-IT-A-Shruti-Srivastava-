const http = require("http");
const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "data.txt");

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  // WRITE FILE
  if (req.url === "/write" && req.method === "POST") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const { text } = JSON.parse(body);

      fs.writeFile(FILE_PATH, text, err => {
        if (err) {
          res.writeHead(500);
          return res.end("Error writing file");
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "File written successfully" }));
      });
    });
  }

  // READ FILE
  else if (req.url === "/read" && req.method === "GET") {
    fs.readFile(FILE_PATH, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end("Error reading file");
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ content: data }));
    });
  }

  else {
    res.writeHead(404);
    res.end("Route not found");
  }
});

server.listen(5000, () => console.log("Server running on port 5000"));
