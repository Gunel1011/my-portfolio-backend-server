const express = require("express");
const router = express.Router();
const portfolioController = require("../controllers/portfolioController");
const verifyToken = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

// GET Portfolio Data
router.get("/gun", portfolioController.getPortfolio);

// UPDATE Portfolio Data
router.put("/gun", verifyToken, portfolioController.updatePortfolio);

// UPLOAD Image
router.post(
  "/upload",
  verifyToken,
  upload.single("file"),
  portfolioController.uploadImage
);

module.exports = router;
