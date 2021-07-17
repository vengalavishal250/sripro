const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const conn = require('./configure/db.config')


//for webapp  browser support
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // For legacy browser support
};

//-----------middleware---------

const app = express();

//file size..
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

//cors
app.use(cors(corsOptions));

//Bodyparser 
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());


// // api
// app.use("/api", api);


//port
const port = process.env.PORT || 5006;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
