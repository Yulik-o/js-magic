"use strict";

var car = {
  brand: "BMW",
  year: 1992,
  avgSpeed: 120,
  fuelConsumption: 14,
  drivers: ["Oleg", "Ivan"],
  showInfo: function showInfo() {
    for (var key in car) {
      if (typeof car[key] !== "function") {
        console.log("value of ".concat(key, " - ").concat(car[key]));
      }
    }
  },
  addDriver: function addDriver(driverName) {
    this.drivers.push(driverName);
    console.log(car.drivers);
  },
  checkDriver: function checkDriver(driverName) {
    console.log(this.drivers.includes(driverName));
    return this.drivers.includes(driverName);
  },
  getTimeAndFuel: function getTimeAndFuel(distance) {
    var time = distance / this.avgSpeed;
    var restHours = time % 4;
    var fuelAmount = distance * (this.avgSpeed / 100);

    if (restHours >= 1) {
      time = (Math.floor(restHours) + time).toFixed(2);
    }

    console.log("For distance ".concat(distance, " km you need ").concat(fuelAmount, " liters of fuel and ").concat(time, " hours of driving."));
    return time, fuelAmount;
  }
};