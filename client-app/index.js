const express = require("express");

const app = express();

app.use(express.json());

app.use("/webhook", (req, res, next) => {
    console.log("Received a webhook!");
    res.json(req.body);
})

app.use("/", (req, res, next) => {
    res.send("Hello World!");
})

app.listen(3001, () => console.log("Running at 3001"));