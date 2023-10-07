const mysql = require('mysql2');

// Database connection details
const connection = mysql.createConnection({
  host: 'sqlclassdb-instance-1.cqjxl5z5vyvr.us-east-2.rds.amazonaws.com',
  port: 3306,
  user: 'annekm26',
  password: 'aDBUG7Hy9yvt',
  database: 'webapp_9MF_annekm26',
  connectTimeout: 10000,
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');

  // Query to select all rows from the 'login' table
  connection.query('SELECT * FROM music_login', (queryErr, results, fields) => {
    if (queryErr) {
      console.error('Error executing query:', queryErr);
      return;
    }

    // Print the results
    console.log('Data from the login table:');
    console.log(results);

    // Close the database connection
    connection.end((endErr) => {
      if (endErr) {
        console.error('Error closing connection:', endErr);
        return;
      }
      console.log('Connection closed');
    });
  });
});
