const express = require('express');
const { register, login } = require('../controllers/authController');
const { body } = require('express-validator');

const router = express.Router();

router.post('/register', [
  body('email').isEmail(),
  body('password').isLength({ min: 5 })
], register);

router.post('/login', login);

module.exports = router;
