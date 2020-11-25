const express = require('express');
const router = express.Router({ mergeParams: true });
const registerService = require('../../services/registerService');
router.post('/', registerService.register);

module.exports = router;