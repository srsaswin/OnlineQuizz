# Initialize a new Node.js project
npm init -y

# Install Express.js for creating a server
npm install express

# Start the server
node .

# To connect to a MySQL database, install the MySQL driver
npm install mysql2

# Sample code to connect to a MySQL database using mysql2
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',       // Replace with your MySQL host
    user: 'root',            // Replace with your MySQL username
    password: '1214',        // Replace with your MySQL password
    database: 'ecom',        // Replace with your MySQL database name
    port: 3306               // Replace with your MySQL port (default is 3306)
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL successfully!');
});
// Create an Express application
const express = require('express');
const app = express();
const port = 3000; // You can change this to any port you prefer

// Define a simple route to test the server
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});