const Progress = require('../../models/progressSchema');

const updateProgress = async (req, res) => {
    try {
      const { courseId, videoId } = req.body;
      let progress = await Progress.findOne({ user: req.userId, course: courseId });
      if (!progress) {
        progress = new Progress({ user: req.userId, course: courseId, completedVideos: [] });
      }
      if (!progress.completedVideos.includes(videoId)) {
        progress.completedVideos.push(videoId);
      }
      progress.lastWatched = new Date();
      await progress.save();
      res.json(progress);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update progress' });
    }
  };

exports.updateProgress = updateProgress;