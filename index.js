const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Main endpoint
app.get("/", (req, res) => {
  res.json({ message: "Welcome to mcpmark-cicd API", version: "1.0.0" });
});

// API endpoint
app.get("/api/data", (req, res) => {
  res.json({ data: [1, 2, 3, 4, 5] });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;