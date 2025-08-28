// readFile.js
const fs = require("fs");
const path = require("path");

// File path
const filePath = path.join(__dirname, "data.txt");

// Asynchronous read
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error("❌ Error: File not found!");
    } else {
      console.error("❌ An error occurred:", err.message);
    }
    return; // Exit on error
  }

  // If no error
  console.log("✅ File contents:");
  console.log(data);
});
