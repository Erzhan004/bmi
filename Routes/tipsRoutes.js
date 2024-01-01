
const express = require('express');
const router = express.Router();

router.get('/tips', (req, res) => {
  res.sendFile('tips.html', { root: 'views' });
});

module.exports = router;
