const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['token'];

    if (!token) {
        return res.status(403).json({ message: "Token tələb olunur" });
    }

    try {
        const tokenBody = token.startsWith('Bearer ') ? token.slice(7) : token;
        const decoded = jwt.verify(tokenBody, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Yanlış Token" });
    }
};

module.exports = verifyToken;
