const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();

//routes
const listRoute = require("./routes/list");

//middlewares
app.use(bodyParser.json());
app.use("/", listRoute);

// connect to db
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000);
