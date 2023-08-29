const express = require("express");

const router = express.Router();

const contqactRoutes = require("./contacts");
const authRoutes = require('./auth');
const userRoutes = require('./users');

const auth = require('../middleware/auth');

router.use('/auth', authRoutes);
router.use("/contacts", contqactRoutes);
router.use('/user', userRoutes);

module.exports = router;