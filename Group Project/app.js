const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const app = express();
require('dotenv').config();

const placesRoutes = require('./routes/routes');
const loginRoutes = require('./routes/routes');
const authRoutes = require('./routes/auth-routes');
const userRoutes = require('./routes/user-routes');

const port = process.env.PORT || 3001;


app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());



app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/favorites', placesRoutes);
app.use('/login', loginRoutes);

app.get('/', (req, res) => {
  res.send('Hello Welcome To Group JAS Project!');
});

app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Endpoint not found!',
  });
});

app.listen(port, () => console.log(`Running on port ${port}`))
