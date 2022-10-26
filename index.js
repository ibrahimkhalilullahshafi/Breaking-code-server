const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const onlineCourses = require("./data/fakedata.json");

app.use(cors());

app.get("/", (req, res) => {
    res.send("server is running");
});

app.get("/courses", (req, res) => {
    res.send(onlineCourses);
});

app.listen(port, () => {
    console.log(`Server is running on port, ${port}`);
})