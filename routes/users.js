const express = require('express');

const router = express.Router();

router.post('/avatar', UserControllers.uploadAvatar);

module.exports = router;