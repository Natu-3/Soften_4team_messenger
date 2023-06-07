const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./utils/db');
const profileRoutes = require('./routes/profile');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api/profile', profileRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});