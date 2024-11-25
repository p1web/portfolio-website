const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
// app.use(cors());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

db.connect(err => {
    if (err) console.error('Database connection failed:', err);
    else console.log('Database connected');
});

// Routes
app.get('/projects', (req, res) => {
    db.query('SELECT * FROM projects', (err, results) => {
        if (err) res.status(500).send(err);
        else res.json(results);
    });
});

app.listen(5000, () => console.log('Server running on port 5000'));
