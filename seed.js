require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./src/config/db");
const seedDatabase = require("./src/utils/seeder");

const run = async () => {
    try {
        await connectDB();
        console.log("DB Connected.");
        await seedDatabase();
        console.log("Seeder finished.");
        process.exit();
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
};

run();
