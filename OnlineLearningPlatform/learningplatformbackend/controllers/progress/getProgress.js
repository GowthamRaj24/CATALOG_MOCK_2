const Progress = require("../../models/progressSchema")

const getProgress = async (req, res) => {
    try {
      const progress = await Progress.findOne({ user: req.userId, course: req.params.courseId });
      if (!progress) {
        return res.status(404).json({ error: 'Progress not found' });
      }
      res.json(progress);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch progress' });
    }
  };

exports.getProgress = getProgress;