const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const port = 3000

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port,()=>{
    console.log("Server is running...");
})