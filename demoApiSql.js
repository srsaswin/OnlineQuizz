const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 8090;

// Create a persistent connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',       // Replace with your MySQL host
  user: 'root',            // Replace with your MySQL username
  password: '1214',        // Replace with your MySQL password
  database: 'ecom',        // Replace with your MySQL database name
  port: 8080               // Use MySQL's default port 3306
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL successfully!');
});

app.use(express.json());

// Route to fetch data from the 'demo' table
app.get('/demo', (req, res) => {
  connection.query('SELECT * FROM demo', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Database error');
    }
    res.status(200).json(results);
  });
});

app.get('/hi', (req, res) => {
  res.status(200).send({  // Changed to 200 for successful response
    data: 'hello'
  });
});

app.get('/tshirt', (req, res) => {
  console.log('ask for ts');
  res.status(200).send({
    message: 'T-shirt route accessed'
  });
});

app.post('/send/:id', (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    return res.status(418).send({ message: `${id}` });
  }

  res.status(200).send({
    tshirt: `fej ${logo} and ${id}`
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
