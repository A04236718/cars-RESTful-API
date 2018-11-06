const carService = require("../models/car");

exports.index = (req, res, next) => {
  const cars = carService.getCars(req.query);
  res.status(200).json({ cars: cars, color: req.query.color });
};

exports.create = (req, res, next) => {
  const car = req.body;
  carService.save(car);
  res.status(201).json({ message: "new car added!" });
};

exports.show = (req, res, next) => {
  const id = Number(req.params.id);
  const found = carService.findById(id);
  if (!found) {
    const err = new Error("Not Found");
    err.status = 404;
    return next(err);
  }
  res.status(200).json({ car: found });
};

exports.update = (req, res, next) => {
  const id = Number(req.params.id);
  const found = carService.findById(id);
  if (!found) {
    const err = new Error("Not Found");
    err.status = 404;
    return next(err);
  }
  let car = req.body;
  car.id = id;
  carService.save(car);
  res.status(200).json({ message: "Car Updated!" });
};

exports.delete = (req, res, next) => {
  const id = Number(req.params.id);
  const found = carService.findById(id);

  if (!found) {
    const err = new Error("Not Found");
    err.status = 404;
    return next(err);
  }
  carService.destroy(id);
  res.status(200).json({ message: "Car Deleted!" });
};
