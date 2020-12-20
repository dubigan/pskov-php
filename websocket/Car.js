const { Item } = require("./Item");

class Car extends Item {
  constructor(pool) {
    super(pool);
  }

  getTableName() {
    return "car";
  }

  getSeqTableName() {
    return "car_id_seq";
  }

  validate(car) {
    const errors = [];
    return errors;
  }
}

module.exports.Car = Car;
