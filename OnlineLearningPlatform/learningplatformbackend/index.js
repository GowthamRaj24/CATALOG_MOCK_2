const express = require("express");
const cors = require("cors");

const app = express();
const port = 4001;

app.use(express.json());
app.use(cors({
    origin: "*"
}));


app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});