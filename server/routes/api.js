const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');
const dbController = require('../controllers/dbController');

router.post('/upload', uploadController.upload);
router.post('/saveFilePath', (req, res) => {
  const { filePath } = req.body;
  dbController.saveFilePath(filePath)
    .then(() => {
      res.status(200).json({ message: 'File path saved to database' });
    })
    .catch(error => {
      console.error('Error saving file path:', error);
      res.status(500).json({ error: 'Error saving file path to database' });
    });
});

module.exports = router;
