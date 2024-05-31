const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(cors());

//Database Connection with Mongo DB

mongoose.connect('mongodb+srv://yt.psyt5mo.mongodb.net/')

//API Creation

app.get('/',(req,res)=>{
    res.send("Express is running")
})




app.listen(port,(error)=>{
    if (!error) {
        console.log('Server running on port '+port)
    }
    else
    {
        console.log('Error : '+error)
    }
})