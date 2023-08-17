const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('./db/db_connection.js');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const bcrypt=require('bcrypt');

const corsOptions = {
  origin: 'http://localhost:3000',
};

const app = express();


app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

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


app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const login_user_sql = `
    SELECT * 
    FROM music_login 
    WHERE username = ? AND password = ?;
  `;

  db.query(login_user_sql, [username, password], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    } else {
      if (results.length > 0) {
        res.json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid username or password' });
      }
    }
  });
});

const create_user_sql = `
    INSERT INTO music_login 
        (username, password, email, phone) 
    VALUES 
        (?, ?, ?, ?);
`

app.post("/signup", ( req, res ) => {
    const { username, password, email, phone } = req.body;
    db.execute(create_user_sql, [username, password, email, phone], (error, results) => {
        if (error)
            console.log(error),
            res.status(500).send(error); 
        else {
          res.json({ message: 'Signup successful' });
        }
    });
});


app.post("/profile", (req, res) => {
  const { username } = req.body;

  const get_user_profile_sql = `
    SELECT username,phone, email
    FROM music_login 
    WHERE username = ?;
  `;

  db.query(get_user_profile_sql, [username], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    } else {
      if (results.length > 0) {
        // Return the first user profile found (assuming no repeat usernames)
        res.json({ user: results[0] });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    }
  });
});

app.post('/editusername', (req, res) => {
  const { username, newValue } = req.body;

  // Update the username in the database
  const update_username_sql = `
    UPDATE music_login
    SET username = ?
    WHERE username = ?;
  `;

  db.query(update_username_sql, [newValue, username], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    } else {
      res.json({ message: 'Username updated successfully' });
    }
  });
});

app.post('/editemail', (req, res) => {
  const { username, newValue } = req.body;

  // Update the email in the database
  const update_email_sql = `
    UPDATE music_login
    SET email = ?
    WHERE username = ?;
  `;

  db.query(update_email_sql, [newValue, username], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    } else {
      res.json({ message: 'Email updated successfully' });
    }
  });
});

app.post('/editphone', (req, res) => {
  const { username, newValue } = req.body;

  // Update the phone in the database
  const update_phone_sql = `
    UPDATE music_login
    SET phone = ?
    WHERE username = ?;
  `;

  db.query(update_phone_sql, [newValue, username], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    } else {
      res.json({ message: 'Phone updated successfully' });
    }
  });
});



app.listen(5000, () => {
  console.log('Server is running on port 5000');
});