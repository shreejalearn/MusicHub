const db = require('../db/db_connection'); // Import your db_connection module

export const handleUploadFile =  (file) => {
  try {
    // Retrieve the uploaded file from localStorage
    const uploadedFile = file;

    // Ensure you have the correct column names and table name
    const query = `INSERT INTO music_ccchallenge (file_path) VALUES ('${uploadedFile}')`;

    // Perform the database insertion using the db connection
    db.query(query);

    console.log('File uploaded and inserted into the database.');
  } catch (error) {
    console.error('Error uploading file to the database:', error);
  }
};

