const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser")
const errorMiddleware = require("./middleware/error")

require("dotenv").config({ path: "./config/config.env" })

app.use(cors({
    origin:"*",
    credentials:true,
}))

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

const dataEntry = require("./routes/allRoutes");

app.use("/api/v1", dataEntry);

app.use(errorMiddleware);

module.exports = app