const Booking = require('../models/Booking');
const Activity = require('../models/Activity');

// @desc    Book an activity
// @route   POST /api/bookings
// @access  Private
const bookActivity = async (req, res) => {
  try {
    const { activityId } = req.body;

    // Validate if activity exists
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    // Create booking
    const booking = new Booking({
      user: req.user.id, // req.user is set by auth middleware
      activity: activityId,
    });

    await booking.save();

    res.status(201).json({
      message: 'Activity booked successfully',
      booking,
    });
  } catch (error) {
    console.error('Booking Error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get bookings for logged-in user
// @route   GET /api/bookings/my
// @access  Private
const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('activity');

    res.status(200).json(bookings);
  } catch (error) {
    console.error('Fetch Bookings Error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  bookActivity,
  getMyBookings,
};
