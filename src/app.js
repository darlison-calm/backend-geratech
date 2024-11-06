const express = require('express');
const app = express();
app.use(express.json());
const animeRoutes = require('./routes/animeRoutes');
const authRoutes = require('./routes/authRoutes');
const usersRoutes = require('./routes/usersRoutes');

app.use(animeRoutes);
app.use(authRoutes);
app.use("/user", usersRoutes);

module.exports = app;