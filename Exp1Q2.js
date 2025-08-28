// pipeStream.js
const fs = require("fs");
const path = require("path");

const inputFile = path.join(__dirname, "input.txt");
const outputFile = path.join(__dirname, "output.txt");

// Create readable and writable streams
const readStream = fs.createReadStream(inputFile, { encoding: "utf8" });
const writeStream = fs.createWriteStream(outputFile, { flags: "w", encoding: "utf8" });

// Pipe the readable stream into the writable stream
readStream.pipe(writeStream);

// Success message when done
writeStream.on("finish", () => {
  console.log("✅ Data successfully piped from input.txt to output.txt");
});

// Handle errors
readStream.on("error", (err) => {
  console.error("❌ Error reading file:", err.message);
});

writeStream.on("error", (err) => {
  console.error("❌ Error writing file:", err.message);
});
