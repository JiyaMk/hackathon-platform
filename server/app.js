const express = require('express');
const app = express();
const cors = require("cors");

if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({path: "./config/config.env"});
}

app.use(cors({
    origin: 'https://hackathon-score-platform-frontend.onrender.com/',
    credentials: true,
  }));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const judgeAuth = require('./routes/judgeAuth');
app.use('/auth', judgeAuth);

const adminAuth = require('./routes/adminAuth');
app.use('/admin', adminAuth);

const team = require('./routes/team');
app.use('/team', team);

module.exports = app;