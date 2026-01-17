const User = require('../models/User');

// GET DATA (/gun) - Şəxsi məlumatları gətirir
const getPortfolio = async (req, res) => {
    try {
        const user = await User.findOne({ email: "gunelmm10@gmail.com" });

        if (!user) {
            return res.status(404).json({ message: "İstifadəçi tapılmadı" });
        }
        const userData = user.toObject();
        delete userData.password;
        delete userData._id;
        delete userData.__v;

        res.json(userData);
    } catch (error) {
        res.status(500).json({ message: "Server xətası" });
    }
};

// EDIT DATA
const updatePortfolio = async (req, res) => {
    try {
        const updates = req.body;
        const user = await User.findByIdAndUpdate(req.user.userId, updates, { new: true });
        res.json({ message: "Məlumatlar yeniləndi", user });
    } catch (error) {
        res.status(500).json({ message: "Yenilənmə xətası" });
    }
};

// IMAGE UPLOAD Endpoint Handler
const uploadImage = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "Fayl seçilməyib" });
    }
    const fileUrl = `${process.env.BASE_URL}/uploads/${req.file.filename}`;
    res.json({ url: fileUrl });
};

module.exports = {
    getPortfolio,
    updatePortfolio,
    uploadImage
};
