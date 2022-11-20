const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

// Define routes
let index = require("./routes/index");
let image = require("./routes/image");

// connecting the database
let mongodb_url =
  "mongodb+srv://admin:zidVtnf082Vxx3Ry@cluster0.e6lmfea.mongodb.net/?retryWrites=true";
let dbName = "darkroom";
mongoose.connect(
  `${mongodb_url}${dbName}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err);
  }
);

// test if the database has connected successfully
let db = mongoose.connection;
db.once("open", () => {
  console.log("Database connected successfully");
});

// Initializing the app
const app = express();

// View Engine
app.set("view engine", "ejs");

// Set up the public folder;
app.use(express.static(path.join(__dirname, "public")));

// body parser middleware
app.use(express.json());

app.use("/", index);
app.use("/image", image);

const PORT = process.env.PORT || 9001;
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
