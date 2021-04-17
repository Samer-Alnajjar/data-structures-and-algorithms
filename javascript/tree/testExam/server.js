'use strict';

// Import packages
const express = require("express");
const superagent = require("superagent");
const cors = require("cors");
const pg = require("pg"); 
const methodOverride = require("method-override");
require("dotenv").config();

// Configure packages
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
const client = new pg.Client(process.env.DATABASE_URL);
// const client = new pg.Client({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });


// Routes






// Functions





// Constructors





























// Server listening 

client.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log("THE SERVER IS LISTENING TO PORT ", PORT);
    })
  })
  .catch(error => {
    console.log("ERROR WHILE CONNECTING TO DATABASE", error);
  })
