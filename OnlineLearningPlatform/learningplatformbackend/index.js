const express = require("express");
const cors = require("cors");
const connect = require("./db");

const courses = require("./routes/courses");
const user = require("./routes/users");
const progress = require("./routes/progress");


const app = express();
const port = 4001;
connect.connect();


app.use(express.json());
app.use(cors({
    origin: "*"
}));

app.use("/courses", courses.route);
app.use("/users", user.route);
app.use("/progress", progress.route);



app.get("/", (req, res) => {
    res.send("Hello World!");
});




app.listen(port, () => {
    console.log(`listening on port ${port}`);
});