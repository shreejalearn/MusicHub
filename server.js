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


const pfpstorage = multer.diskStorage({
  destination: './client/src/profilePictures/', // Choose a suitable destination folder
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const pfpupload = multer({ storage: pfpstorage });


app.post('/editprofilepicture', pfpupload.single('file'), (req, res) => {
  const { username } = req.body;
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  console.log('Received file:', req.file.filename);

  const filePath = `/${req.file.filename}`;
  console.log(filePath);
  const query = `
    UPDATE music_login
    SET pfp = ?
    WHERE username = ?;
  `;
  db.query(query, [filePath, username], (error, results) => {
    console.log(filePath);
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error saving file path to database' });
    }

    res.json({ message: 'File uploaded and file path saved to database' });
  });
});
app.post('/pfpupload', pfpupload.single('file'), (req, res) => {
  const { username } = req.body;
  console.log(username);
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  console.log('Received file:', req.file.filename);

  // Use the 'path' module to remove the file extension
  const fileNameWithoutExtension = path.parse(req.file.filename).name;
  const filePath = `${fileNameWithoutExtension}`;
  console.log(filePath);
  const query = `
    UPDATE music_login
    SET pfp = ?
    WHERE username = ?;
  `;
  db.query(query, [filePath, username], (error, results) => {
    console.log(filePath);
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error updating profile picture in the database' });
    }

    res.json({ message: 'Profile picture updated successfully' });
  });
});


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
        (username, password, name, email, phone) 
    VALUES 
        (?, ?, ?, ?, ?);
`

app.post("/signup", ( req, res ) => {
    const { username, password, name, email, phone } = req.body;
    db.execute(create_user_sql, [username, password, name, email, phone], (error, results) => {
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
    SELECT username,name, phone, email, main_instrument, bio, skills, accolades, pfp
    FROM music_login 
    WHERE username = ?;
  `;

  db.query(get_user_profile_sql, [username], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    } else {
      if (results.length > 0) {
        res.json({ user: results[0] });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    }
  });
  
});

app.post('/editusername', (req, res) => {
  const { username, newValue } = req.body;

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

app.post('/editmain_instrument', (req, res) => {
  const { username, newValue } = req.body;

  const update_main_instrument_sql = `
    UPDATE music_login
    SET main_instrument = ?
    WHERE username = ?;
  `;

  db.query(update_main_instrument_sql, [newValue, username], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    } else {
      res.json({ message: 'Main instrument updated successfully' });
    }
  });
});
app.post('/editbio', (req, res) => {
  const { username, newValue } = req.body;

  const update_bio_sql = `
    UPDATE music_login
    SET bio = ?
    WHERE username = ?;
  `;

  db.query(update_bio_sql, [newValue, username], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    } else {
      res.json({ message: 'Bio updated successfully' });
    }
  });
});
app.post('/editname', (req, res) => {
  const { username, newValue } = req.body;

  const update_name_sql = `
    UPDATE music_login
    SET name = ?
    WHERE username = ?;
  `;

  db.query(update_name_sql, [newValue, username], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    } else {
      res.json({ message: 'Name updated successfully' });
    }
  });
});

app.post('/editskills', (req, res) => {
  const { username, newValue } = req.body;

  const update_skills_sql = `
    UPDATE music_login
    SET skills = ?
    WHERE username = ?;
  `;

  db.query(update_skills_sql, [newValue, username], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    } else {
      res.json({ message: 'Skills updated successfully' });
    }
  });
});

app.post('/editaccolades', (req, res) => {
  const { username, newValue } = req.body;

  const update_accolades_sql = `
    UPDATE music_login
    SET accolades = ?
    WHERE username = ?;
  `;

  db.query(update_accolades_sql, [newValue, username], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    } else {
      res.json({ message: 'Accolades updated successfully' });
    }
  });
});

app.post('/pastwinnersac', (req, res) => {
  const get_past_winners_sql = `
    SELECT pw.year, ml.name
    FROM music_pastwinners pw
    JOIN music_login ml ON pw.winner_id = ml.user_id
    WHERE pw.challenge = 'ac';
  `;

  db.query(get_past_winners_sql, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    } else {
      if (results.length > 0) {
        res.json({ pastWinners: results });
      } else {
        res.status(404).json({ message: 'No past winners found for the given challenge' });
      }
    }
  });
});

app.post('/pastwinnerscc', (req, res) => {
  const get_past_winners_sql = `
    SELECT pw.year, ml.name
    FROM music_pastwinners pw
    JOIN music_login ml ON pw.winner_id = ml.user_id
    WHERE pw.challenge = 'cc';
  `;

  db.query(get_past_winners_sql, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    } else {
      if (results.length > 0) {
        res.json({ pastWinners: results });
      } else {
        res.status(404).json({ message: 'No past winners found for the given challenge' });
      }
    }
  });
});

app.post('/pastwinnerslc', (req, res) => {
  const get_past_winners_sql = `
    SELECT pw.year, ml.name
    FROM music_pastwinners pw
    JOIN music_login ml ON pw.winner_id = ml.user_id
    WHERE pw.challenge = 'lc';
  `;

  db.query(get_past_winners_sql, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    } else {
      if (results.length > 0) {
        res.json({ pastWinners: results });
      } else {
        res.status(404).json({ message: 'No past winners found for the given challenge' });
      }
    }
  });
});

app.post('/getuserinfo', (req, res) => {
  const { username } = req.body;

  const get_user_info_sql = `
    SELECT username, email, phone, main_instrument, bio, skills, accolades
    FROM music_login
    WHERE username = ?;
  `;

  db.query(get_user_info_sql, [username], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    } else {
      if (results.length > 0) {
        res.json({ userInfo: results[0] });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    }
  });
});

// Add a new route to fetch random user info
app.post('/getrandomuserinfo', (req, res) => {
  const getRandomUserSql = `
    SELECT username, name, email, phone, main_instrument, bio, skills, accolades, pfp
    FROM music_login
    ORDER BY RAND()  -- MySQL function to order rows randomly
    LIMIT 1;          -- Limit the result to 1 row
  `;

  db.query(getRandomUserSql, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    } else {
      if (results.length > 0) {
        res.json({ userInfo: results[0] });
      } else {
        res.status(404).json({ message: 'No users found' });
      }
    }
  });
});

app.post('/sendmessage', (req, res) => {
  const { content, username } = req.body;
  const insertMessageQuery = 'INSERT INTO music_messages (content, username) VALUES (?, ?)';
  db.query(insertMessageQuery, [content, username], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error saving message to the database' });
    } else {
      res.json({ message: 'Message saved successfully' });
    }
  });
});
app.get('/getmessages', (req, res) => {
  const selectMessagesQuery = 'SELECT * FROM music_messages WHERE timestamp > NOW() - INTERVAL 1 DAY ORDER BY timestamp DESC';
  db.query(selectMessagesQuery, (error, results) => {
      if (error) {
          console.error(error);
          res.status(500).json({ error: 'Error fetching messages from the database' });
      } else {
          res.json({ messages: results });
      }
  });
});

// const deleteOldMessagesQuery = 'DELETE FROM music_messages WHERE timestamp < NOW() - INTERVAL 1 DAY';
// db.query(deleteOldMessagesQuery, (error, results) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log('Old messages deleted successfully');
//     }
// });




app.listen(5000, () => {
  console.log('Server is running on port 5000');
});