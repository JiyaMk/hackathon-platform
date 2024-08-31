const Team = require('../models/team');

const uploadTeams = async (req, res) => {
  try {
    await Team.deleteMany({});
    const teamsData = req.body.teams; 
    await Team.insertMany(teamsData);
    res.status(200).json({ message: 'Teams uploaded successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload teams.' });
  }
};

const getTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch teams.' });
  }
};

const lockScore = async (req, res) => {
    const { teamId } = req.params; 
    const { creativity, presentation, innovation, codeQuality, idea } = req.body;
    try {
        const team = await Team.findById(teamId);
        if (!team) {
        return res.status(404).json({ message: 'Team not found' });
        }
        if (team.locked) {
        return res.status(400).json({ message: 'Scores are already locked and cannot be updated' });
        }
      const updatedTeam = await Team.findByIdAndUpdate(
        teamId,
        {
          $set: {
            creativity,
            presentation,
            innovation,
            codeQuality,
            idea,
          },
        },
        { new: true }
      );
  
      if (!updatedTeam) {
        return res.status(404).json({ message: 'Team not found' });
      }
  
      res.status(200).json({ message: 'Scores updated successfully', team: updatedTeam });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
const submitScores = async (req, res) => {
    try {
      const result = await Team.updateMany(
        {},
        { $set: { locked: true } }
      );

      if (result.modifiedCount === 0) {
        return res.status(404).json({ message: 'No teams found to lock' });
      }
      res.status(200).json({ message: 'All scores submitted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
const lockedTeams= async (req, res) => {
    try {
      const lockedTeams = await Team.find({ locked: true });
      res.json(lockedTeams);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching locked teams' });
    }
  };

const subStatus = async (req, res) => {
    try {
      const teams = await Team.find(); 
      const allLocked = teams.every(team => team.locked); 
  
      res.json({ allLocked });
    } catch (error) {
      console.error('Error checking teams status:', error);
      res.status(500).json({ error: 'Failed to fetch teams status' });
    }
  };

module.exports = {uploadTeams, getTeams, lockScore, submitScores, lockedTeams, subStatus};
