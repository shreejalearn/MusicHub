const express = require('express');
const path = require('path');
const multer = require('multer');
const db = require('./db/db_connection');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Route for uploading a file
app.post('/upload', upload.single('file'), (req, res) => {
  console.log("Received file:", req.file.filename);

  // Insert the filePath into the database or perform desired actions
  // Make sure you have the appropriate database connection and query logic here

  const filePath = `/uploads/${req.file.filename}`;
  const query = 'INSERT INTO music_ccchallenge (file) VALUES (?)';
  db.query(query, [filePath], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error saving file path to database' });
      return;
    }

    res.json({ message: 'File uploaded and file path saved to database' });
  });
});

// Route for saving file path to the database
app.post('/api/saveFilePath', (req, res) => {
  const { filePath } = req.body;

  // Insert the filePath into the database or perform desired actions
  // Make sure you have the appropriate database connection and query logic here

  const query = 'INSERT INTO music_ccchallenge (file) VALUES (?)';
  db.query(query, [filePath], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error saving file path to database' });
      return;
    }

    res.json({ message: 'File path saved to database' });
  });
});

// Other server configuration and routes

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
