const express = require('express');
const { adminLogin, approveJudge, getPendingJudges } = require('../controllers/adminAuth');
const router = express.Router();

router.post('/login', adminLogin);
router.post('/approve-judge/:judgeId', approveJudge);
router.get('/get-pendingJudges', getPendingJudges);

module.exports = router;
