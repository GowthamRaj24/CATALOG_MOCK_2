const express = require('express');
const router = express.Router();
const updateProgress = require("../controllers/progress/updateProgress");
const getProgress = require("../controllers/progress/getProgress");

router.post('/update', updateProgress.updateProgress);
router.get('/:courseId', getProgress.getProgress);

exports.route = router;
