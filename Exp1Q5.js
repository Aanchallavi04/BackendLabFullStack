// writeStream.js
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "output.txt");

// Create a writable stream (default: overwrite if file exists)
const writeStream = fs.createWriteStream(filePath, { flags: "w", encoding: "utf8" });

// Handle 'finish' event (when writing is done)
writeStream.on("finish", () => {
  console.log("✅ Data written successfully to output.txt");
});

// Handle errors
writeStream.on("error", (err) => {
  console.error("❌ Error writing file:", err.message);
});

// Write data
writeStream.write("Hello, Node.js!");

// End stream (flush and close file)
writeStream.end();
