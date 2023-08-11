const pool = require('./db/db_connection'); // Your database connection pool

const saveFilePath = (filePath) => {
  const query = 'INSERT INTO ccchallenge (file) VALUES ($1)';
  return pool.query(query, [filePath]);
};

module.exports = { saveFilePath };
