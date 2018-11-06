const express = require("express");
const path = require("path");
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
  if (req.query._method && req.query._method.toUpperCase() === "DELETE") {
    req.method = "DELETE";
    req.url = req.path;
  }
  next();
});

app.use(function(req, res, next) {
  console.log("YIPPEEE I'm Middleware!");
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
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(500).json({ message: err.message });
  res.status(404).json({ message: err.message });
});

app.listen(port);
console.log(`server running on ${port}`);
