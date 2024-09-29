const express = require("express");
const cors = require("cors");
const connect = require("./db");

const app = express();
const port = 4001;
connect.connect();

app.use(express.json());
app.use(cors({
    origin: "*"
}));


app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});