const express = require('express');
const router = express.Router();
const teamController = require('../controllers/team');

router.post('/upload', teamController.uploadTeams);
router.get('/', teamController.getTeams);
router.post('/lock/:teamId', teamController.lockScore);
router.post('/submit', teamController.submitScores);
router.get('/locked', teamController.lockedTeams);
router.get('/status', teamController.subStatus);

module.exports = router;
