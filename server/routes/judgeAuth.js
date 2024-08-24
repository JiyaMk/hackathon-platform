const express = require('express');
const { registerJudge, loginJudge } = require('../controllers/judgeAuth.js');
const router = express.Router();


router.post('/judge/signup', registerJudge);
router.post('/judge/login', loginJudge);

module.exports = router;
