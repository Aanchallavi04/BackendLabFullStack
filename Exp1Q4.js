// readStream.js
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.txt");

// ✅ Check if file exists first
fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error("❌ Error: File does not exist!");
    return;
  }

  // Create a readable stream
  const readStream = fs.createReadStream(filePath, { encoding: "utf8" });

  // Handle 'data' event → chunk of file content
  readStream.on("data", (chunk) => {
    console.log("📄 Chunk received:\n", chunk);
  });

  // Handle 'end' event → finished reading
  readStream.on("end", () => {
    console.log("✅ Finished reading file.");
  });

  // Handle errors
  readStream.on("error", (error) => {
    console.error("❌ Stream error:", error.message);
  });
});
