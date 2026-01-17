const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./src/config/db");
const seedDatabase = require("./src/utils/seeder");

const authRoutes = require("./src/routes/authRoutes");
const portfolioRoutes = require("./src/routes/portfolioRoutes");

const app = express();

// --- Middleware ---
app.use(cors());
app.use(express.json());

// Static Uploads Folder
// Not: Burada path server.js-in olduğu yerə nəzərən hesablanır
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// --- Routes ---
app.use("/api/v1", authRoutes);
app.use("/api/v1", portfolioRoutes);

// --- Server Start and DB Connection ---
const startServer = async () => {
  // 1. Connect to DB
  await connectDB();

  // 2. Seed Data (if needed)
  await seedDatabase();

  // 3. Start Listening
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`🚀 Server http://localhost:${PORT} üzərində işləyir`);
  });
};

startServer();
