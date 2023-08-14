const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('./db/db_connection.js');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');

const corsOptions = {
  origin: 'http://localhost:3000',
};

const app = express();

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Route for uploading a file
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  console.log('Received file:', req.file.filename);

  const filePath = `/uploads/${req.file.filename}`;
  const query = 'INSERT INTO music_ccchallenge (file) VALUES (?)';
  db.query(query, [filePath], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error saving file path to database' });
    }

    res.json({ message: 'File uploaded and file path saved to database' });
  });
});

// Route for saving file path to the database
app.post('/api/saveFilePath', (req, res) => {
  const { filePath } = req.body;
  console.log(filePath);

  // Insert the filePath into the database or perform desired actions
  // Make sure you have the appropriate database connection and query logic here

  const query = `INSERT INTO music_ccchallenge (file) VALUES (?);`
  db.query(query, [filePath], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error saving file path to database' });
      return;
    }

    res.json({ message: 'File path saved to database' });
  });
});


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});