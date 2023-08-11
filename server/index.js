const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const db = require('./db/db_connection'); // Import your database connection configuration

const storage = multer.diskStorage({
    destination: './uploads/', // Define the upload directory
    filename: (req, file, cb) => {
      // Generate a unique filename
      cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

app.get('/coverChallenge', (req, res) => {
  const query = 'SELECT * FROM music_ccchallenge'; // Your SQL query

  db.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    res.json(results);
  });
});

app.post('/api/upload', upload.single('file'), (req, res) => {
    const filePath = req.file.path; // Get the file path from the uploaded file
    const query = 'INSERT INTO music_ccchallenge (file) VALUES (?)'; // query
  
    db.query(query, [filePath], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
  
      res.json({ message: 'File uploaded and inserted into the database' });
    });
});

// Other server configuration and routes

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
