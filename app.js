const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const index = require("./routes/index");
const users = require("./routes/users");
const cars = require("./routes/cars");

const app = express();
const port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  console.log("YIPPEEE I'm a custom middleware function!");
  next();
});

app.use("/", index);
app.use("/users", users);
app.use("/cars", cars);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Resource Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({ message: err.message });
});

app.listen(port);
console.log(`server running on ${port}`);
