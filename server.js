const express = require('express');
require('dotenv').config();
const urlRoutes = require('./routes/route.js');
const connectDB = require('./dataBase/db.js');
//const connectDB = require('./dataBase/db.js');

const app = express();

connectDB();

app.use(express.json());

app.use('/url', urlRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log('Server is running at ' + PORT);
});
