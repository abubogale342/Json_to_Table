const datacenters = require("../src/datacenters.json");

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

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.post("/", async (req, res) => {
    console.log("Got body:", req.body);
    await updateJson(res, req.body.data);
});
async function updateJson(res, json) {
    await fs.writeFile(
        "../src/datacenters.json",
        JSON.stringify(json, null, 2),
        function (err) {
            if (err) throw err;
            console.log("Data is added to data.json successfully");
            res.send({ message: "Json is updated successfully" });
        }
    );
}
app.listen(5000, () => {
    console.log("App is listening on port 5000");
});
