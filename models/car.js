const cars = [
  { id: 1, make: "Tesla", model: "Model S", color: "black" },
  { id: 2, make: "Honda", model: "Odyssey", color: "red" },
  { id: 3, make: "BMW", model: "328", color: "silver" },
  { id: 4, make: "Porsche", model: "911", color: "yellow" }
];

let nextId = 5;

const carService = {
  getCars: function(query) {
    if (query.color) {
      return cars.filter(c => c.color === query.color);
    } else {
      return cars;
    }
  },
  findById: function(id) {
    return cars.find(c => c.id === id);
  },
  save: function(car) {
    if (car.id) {
      const oldCar = this.findById(car.id);
      if (oldCar) {
        const index = cars.indexOf(oldCar);
        cars.splice(index, 1, car);
      } else {
        cars.push(car);
      }
      const index = cars.indexOf(oldCar);
      cars.splice(index, 1, car);
    } else {
      car.id = nextId++;
      cars.push(car);
    }
  },
  destroy: function(id) {
    const oldCar = this.findById(id);
    const index = cars.indexOf(oldCar);
    cars.splice(index, 1);
  }
};

module.exports = carService;
