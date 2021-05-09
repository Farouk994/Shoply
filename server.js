const express = require("express");
const morgan = require("morgan");
const multer = require("multer");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("Listening to PORT " + PORT)
});
