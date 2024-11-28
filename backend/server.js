const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const SECRET_KEY = "161990";


dotenv.config();
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(router);
// app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to MySQL database.');
    }
});


// Dummy user data
const users = [
    { username: 'testuser', password: bcrypt.hashSync('password123', 10) } // Replace with your database check
];

// User Login Endpoint
router.post('/login', (req, res) => {
    // return res.status(200).json({ error: 'Username and password are required.' });
    // res.status(200).json({ message: 'Login successful.' });
    // console.log(req);
    const { username, password } = req.body;
    return res.status(200).json({ message: 'Login successful134.', user: { data : req.body } });

    
    // if (!username || !password) {
    //     return res.status(400).json({ error: 'Username and password are required.' });
    // }

    // const sql = 'SELECT * FROM users WHERE username = ?';
    // db.query(sql, [username], async (err, results) => {
    //     if (err) {
    //         console.error('Error fetching user:', err);
    //         return res.status(500).json({ error: 'Database error.' });
    //     }

    //     if (results.length === 0) {
    //         return res.status(401).json({ error: 'Invalid username or password.' });
    //     }

    //     const user = results[0];

    //     // Compare passwords
    //     const isMatch = await bcrypt.compare(password, user.password);
    //     if (!isMatch) {
    //         return res.status(401).json({ error: 'Invalid username or password.' });
    //     }

    //     res.status(200).json({ message: 'Login successful.', user: { id: user.id, username: user.username } });
    // });
});




// Projects Route
router.get('/projects', (req, res) => {
    db.query('SELECT * FROM projects', (err, results) => {
        if (err) res.status(500).send(err);
        else res.json(results);
    });
});

app.listen(5000, () => console.log('Server running on port 5000'));
