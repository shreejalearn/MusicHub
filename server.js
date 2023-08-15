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

const ccstorage = multer.diskStorage({
  destination: './ccuploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const ccupload = multer({ storage:ccstorage });

const lcstorage = multer.diskStorage({
  destination: './lcuploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const lcupload = multer({ storage:lcstorage });

const acstorage = multer.diskStorage({
  destination: './acuploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const acupload = multer({ storage:acstorage });

app.post('/ccupload', ccupload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  console.log('Received file:', req.file.filename);

  const filePath = `/ccuploads/${req.file.filename}`;
  console.log(filePath);
  const query = 'INSERT INTO music_ccuploads (file) VALUES (?)';
  db.query(query, [filePath], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error saving file path to database' });
    }

    res.json({ message: 'File uploaded and file path saved to database' });
  });
});

app.post('/lcupload', lcupload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  console.log('Received file:', req.file.filename);

  const filePath = `/lcuploads/${req.file.filename}`;
  console.log(filePath);
  const query = 'INSERT INTO music_lcuploads (file) VALUES (?)';
  db.query(query, [filePath], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error saving file path to database' });
    }

    res.json({ message: 'File uploaded and file path saved to database' });
  });
});

app.post('/acupload', acupload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  console.log('Received file:', req.file.filename);

  const filePath = `/acuploads/${req.file.filename}`;
  console.log(filePath);
  const query = 'INSERT INTO music_acuploads (file) VALUES (?)';
  db.query(query, [filePath], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error saving file path to database' });
    }

    res.json({ message: 'File uploaded and file path saved to database' });
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});