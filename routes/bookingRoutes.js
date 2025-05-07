const express = require('express');
const { bookActivity, getMyBookings } = require('../controllers/bookingController');
const auth = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', auth, bookActivity);
router.get('/my', auth, getMyBookings);

module.exports = router;
