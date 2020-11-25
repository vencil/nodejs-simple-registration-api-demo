const express = require('express');
const api = require('./api/api_index');
const router = express.Router();
router.use('/api', api);
router.get('/', (req, res) => res.send('Welcome to demo'));

module.exports = router;