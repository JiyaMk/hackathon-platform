const jwt = require('jsonwebtoken');
const Judge = require('../models/judge');
require('dotenv').config();

const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, message: 'Admin login successful' });
    } else {
        res.status(401).json({ message: 'Unauthorized: Not registered as an admin' });
    }
};

const approveJudge = async (req, res) => {
    try {
        const { judgeId } = req.params;
        const judge = await Judge.findByIdAndUpdate(judgeId, { approved: true }, { new: true });

        if (!judge) {
            return res.status(404).json({ message: 'Judge not found' });
        }
        res.status(200).json({ message: 'Judge approved successfully', judge });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getPendingJudges = async (req, res) => {
    try {
        const judges = await Judge.find({ approved: false });
        res.status(200).json({
            success: true,
            message: "Applications fetched successfully",
            data: judges,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Applications could not be fetched",
            error: error.message,
        });
    }
};

module.exports = { adminLogin, approveJudge, getPendingJudges };