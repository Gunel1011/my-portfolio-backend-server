const jwt = require('jsonwebtoken');
const User = require('../models/User');

const login = async (req, res) => {
    const { email, password } = req.body;

    // Sadə yoxlama
    const user = await User.findOne({ email, password });

    if (!user) {
        return res.status(401).json({ message: "Email və ya şifrə səhvdir" });
    }

    // Token yaratmaq
    const access_token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );

    res.json({ access_token: `Bearer ${access_token}` });
};

module.exports = {
    login
};
