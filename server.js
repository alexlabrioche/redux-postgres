const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const withAuth = require('./server/middleware/withAuth');
const dotenv = require('dotenv');
const authRouter = require('./server/router/auth');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

dotenv.config();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/home', function(req, res) {
  res.send('Hi Dumb dumb!');
});

app.get('/api/secret', withAuth, function(req, res) {
  console.log(req.email);
  res.send("I'am private");
});

app.get('/api/check/token', withAuth, function(req, res) {
  console.log(req.email);
  res.send({ email: req.email });
});

app.use('/api/auth', authRouter);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log('🚀 serveur lancé sur le port: ', port);
});
