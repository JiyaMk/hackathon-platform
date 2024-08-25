const Judge = require('../models/judge');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const registerJudge = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingJudge = await Judge.findOne({ email });
        if (existingJudge) {
            return res.status(400).json({ message: 'Judge already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const judge = new Judge({
            name,
            email,
            password: hashedPassword,
        });
        await judge.save();

        res.status(201).json({ message: 'Judge registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const loginJudge = async (req, res) => {
    try {
        const { email, password } = req.body;
        const judge = await Judge.findOne({ email });
        if (!judge) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, judge.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        if (!judge.approved) {
            return res.status(403).json({ message: 'Judge not approved yet' });
        }

        const token = jwt.sign({ id: judge._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { registerJudge, loginJudge };