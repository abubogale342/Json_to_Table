const datacenters = require("../src/assets/datacenters.json");

const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const express = require("express");
const path = require("path");

const app = express();
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
    console.log('Got body:', req.body);
    res.send({message: 'You got response. Congratulations!'})
});

app.listen(5000, () => {
    console.log("App is listening on port 5000");
});
