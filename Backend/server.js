const express = require("express");
var cors = require("cors");
const userRoutes = require("./src/user/routes");
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json()) 

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use('/api/v1/users', userRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));