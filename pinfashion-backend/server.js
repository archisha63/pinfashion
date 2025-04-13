const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Simple test route
app.get("/", (req, res) => {
  res.send("💖 PinFashion backend is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
