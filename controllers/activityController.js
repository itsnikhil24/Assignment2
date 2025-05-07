const Activity = require('../models/Activity');

exports.listActivities = async (req, res) => {
  const activities = await Activity.find();
  res.json(activities);
};
