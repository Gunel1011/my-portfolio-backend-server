require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./src/models/User');

const checkDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB...");

        const users = await User.find({ email: 'gunelmm10@gmail.com' }, 'email bio full_name projects about_text');
        if (users.length > 0) {
            console.log("Found user:", users[0].email);
            console.log("Bio:", users[0].bio);
            console.log("About Text:", users[0].about_text ? users[0].about_text.substring(0, 50) + "..." : "NOT FOUND");
            console.log("First Project Image:", users[0].projects[0].image_url);
            console.log("Projects count:", users[0].projects.length);
        } else {
            console.log("User 'gunelmm10@gmail.com' not found!");
        }

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

checkDB();
