const mongoose = require('mongoose');
require('dotenv').config();

const run = async () => {
    console.log("Testing Connection...");
    try {
        // Attempt 1: Standard
        console.log("Attempt 1: Standard");
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Success!");
        process.exit(0);
    } catch (e) {
        console.log("❌ Failed 1:", e.message);
    }

    try {
        // Attempt 2: IPv4
        console.log("Attempt 2: IPv4");
        await mongoose.connect(process.env.MONGO_URI, { family: 4 });
        console.log("✅ Success!");
        process.exit(0);
    } catch (e) {
        console.log("❌ Failed 2:", e.message);
    }

    try {
        // Attempt 3: TLS Insecure
        console.log("Attempt 3: TLS Insecure");
        await mongoose.connect(process.env.MONGO_URI, { tls: true, tlsAllowInvalidCertificates: true });
        console.log("✅ Success!");
        process.exit(0);
    } catch (e) {
        console.log("❌ Failed 3:", e.message);
        process.exit(1);
    }
};

run();
