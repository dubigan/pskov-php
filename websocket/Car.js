const { Item, ValidationError } = require('./Item');

class Car extends Item {
  constructor(pool) {
    super(pool);
  }

  getTableName() {
    return 'car';
  }

  getSeqTableName() {
    return 'car_id_seq';
  }

  validate_model(data) {
    if (!data) throw new ValidationError("field Model can't be empty");
    return data;
  }
  validate_color(data) {
    if (!data) throw new ValidationError("field Color can't be empty");
    return data;
  }
  validate_production(data) {
    if (!data) throw new ValidationError("field Production can't be empty");
    const [day, mongth, year] = data.split('.');
    if (!day || !mongth || !year)
      throw new ValidationError(
        "field Production must be in 'dd.mm.yyyy' format"
      );
    const date = new Date(year, +mongth - 1, day);
    const dateNow = new Date();
    const minDate = new Date('1900', 0, '1');
    if (date > dateNow)
      throw new ValidationError("field Production can't be in future");
    if (date < minDate)
      throw new ValidationError(
        "field Production must be greater then '01.01.1900'"
      );
    return data;
  }
  validate_power(data) {
    //console.log("power", data);
    data = +data;
    if (isNaN(data)) throw new ValidationError("field Power can't be empty");
    if (data < 1)
      throw new ValidationError('field Power must be positive number');
    return data;
  }
  validate_mileage(data) {
    data = +data;
    if (isNaN(data)) throw new ValidationError("field Mileage can't be empty");
    //console.log("mileage", data);

    if (data < 1)
      throw new ValidationError('field Mileage must be positive number');
    return data;
  }
}

module.exports.Car = Car;
