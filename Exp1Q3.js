// server.js
const http = require("http");
const fs = require("fs");
const path = require("path");

// File path
const filePath = path.join(__dirname, "data.txt");

// Create server
const server = http.createServer((req, res) => {
  // Only respond to root "/"
  if (req.url === "/") {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        if (err.code === "ENOENT") {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end(" File not found!");
        } else {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end(" Server error: " + err.message);
        }
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found!");
  }
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
