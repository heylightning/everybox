require('dotenv').config();
const express = require('express');
const app = express();

const { Client } = require('pg');

const client = new Client({
    host: process.env.HOST, 
    user: process.env.USER,
    port: process.env.PORT,
    password: process.env.PASSWORD, 
    database: process.env.DATABASE
});

client.connect()

app.use(express.static('public'));

app.get('/data', (req, res) => {
    client.query('SELECT * FROM userbase', (err, result) => {
        if (!err) {
            res.json(result.rows); 
        } else {
            console.log(err.message);
            res.status(500).send('Internal Server Error');
        }
        client.end
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
