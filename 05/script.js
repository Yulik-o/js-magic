const car = {
  brand: "BMW",
  year: 1992,
  avgSpeed: 120,
  fuelConsumption: 14,
  drivers: ["Oleg", "Ivan"],
  showInfo() {
    for (const key in car) {
      if (typeof car[key] !== "function") {
        console.log(`Value of ${key} - ${car[key]}`);
      }
    }
  },
  addDriver(driverName) {
    this.drivers.push(driverName);
    console.log(car.drivers);
  },
  checkDriver(driverName) {
    console.log(this.drivers.includes(driverName));
    return this.drivers.includes(driverName);
  },
  getTimeAndFuel(distance) {
    let time = distance / this.avgSpeed;
    let restHours = time % 4;
    let fuelAmount = distance * (this.avgSpeed / 100);
    if (restHours >= 1) {
      time = (Math.floor(restHours) + time).toFixed(2);
    }
    console.log(
      `For distance ${distance} km you need ${fuelAmount} liters of fuel and ${time} hours of driving.`
    );
    return time, fuelAmount;
  },
};

const time = {
  seconds: 20,
  minutes: 30,
  hours: 04,
  showTime() {
    for (let key in time) {
      if (typeof time[key] !== "function") {
        console.log(`Value of ${key} - ${time[key]}`);
      }
    }
  },

  addSeconds(secondsToAdd) {
    this.seconds += secondsToAdd;
    this.normalizeTime();
    this.showTime();
  },

  addMinutes(minutesToAdd) {
    this.minutes += minutesToAdd;
    this.normalizeTime();
  },

  addHours(hoursToAdd) {
    this.hours += hoursToAdd;
    this.normalizeTime();
  },

  normalizeTime() {
    if (this.seconds >= 60) {
      const extraMinutes = Math.floor(this.seconds / 60);
      this.minutes += extraMinutes;
      this.seconds %= 60;
    }

    if (this.minutes >= 60) {
      const extraHours = Math.floor(this.minutes / 60);
      this.hours += extraHours;
      this.minutes %= 60;
    }

    if (this.hours >= 24) {
      this.hours %= 24;
    }
  },
};
time.addSeconds(30);
console.log("Додати 30 секунд:");
time.showTime();

time.addMinutes(75);
console.log("Додати 75 хвилин:");
time.showTime();

time.addHours(3);
console.log("Додати 3 години:");
time.showTime();

const fraction = {
  nominator: 2,
  denominator: 3,
  showValue() {
    console.log(`Value is ${this.nominator}/${this.denominator}`);
  },
  findGCD(a, b) {
    if (a == 0) {
      return b;
    }
    return this.findGCD(b % a, a);
  },
  findLocalNominator(n, d) {
    return n * d;
  },
  add(n, d) {
    let localDenominator = 1;
    if (this.denominator === d) {
      localDenominator = this.denominator;
    } else {
      localDenominator = this.denominator * d;
      this.nominator = this.nominator * (localDenominator / this.denominator);
      this.denominator = localDenominator;
      n = n * (localDenominator / d);
      d = localDenominator;
      const addingResultNominator = this.nominator + n;
      const gcd = this.findGCD(addingResultNominator, d);
      console.log(`result is ${addingResultNominator / gcd}/${d / gcd}`);
    }
  },
};
