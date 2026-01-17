const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB-yə uğurla qoşuldu');
    } catch (err) {
        console.error('❌ MongoDB xətası:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
