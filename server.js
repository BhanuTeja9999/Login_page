// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('/login');
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send(`
    <style>
      body {
        font-family: 'Segoe UI', sans-serif;
        background: #f5f5f5;
        text-align: center;
        padding-top: 80px;
      }
      h2 {
        color: #333;
      }
      p {
        font-size: 18px;
        margin-top: 20px;
      }
      a {
        display: inline-block;
        margin-top: 30px;
        text-decoration: none;
        color: #667eea;
        font-weight: bold;
      }
    </style>
    <h2>Login Successful</h2>
    <p><strong>Username:</strong> ${username}</p>
    <p><strong>Password:</strong> ${password}</p>
    <a href="/login">Back to Login</a>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});