const { Item, ValidationError } = require("./Item");

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

  getFieldNames() {
    return [
      "id",
      "model",
      "color",
      "production",
      "power",
      "manufacturer",
      "owner_id",
      "comment",
      "mileage",
    ];
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
    return data;
  }
  validate_power(data) {
    console.log("power", data);

    if (!data || !+data)
      throw new ValidationError("field Power can't be empty");
    data = +data;
    if (data < 1)
      throw new ValidationError("field Power must be positive number");
    return data;
  }
  validate_mileage(data) {
    if (!data || !+data)
      throw new ValidationError("field Mileage can't be empty");
    data = +data;
    //console.log("mileage", data);

    if (data < 1)
      throw new ValidationError("field Mileage must be positive number");
    return data;
  }
}

module.exports.Car = Car;
