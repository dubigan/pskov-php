class Car {
  constructor(pool) {
    this.pool = pool;
  }

  getTableName() {
    return "car";
  }

  validate(car) {
    const errors = [];
    return errors;
  }

  getInsertString() {
    let qs = `insert into car `;
    qs += `(id, model, color, production , power, manufacturer, owner_id, comment, mileage ) 
    values ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
    return qs;
  }

  getValues(car, car_id, owner_id) {
    return [
      car_id,
      car.model,
      car.color,
      car.production,
      car.power,
      car.manufacturer,
      owner_id,
      car.comment,
      car.mileage,
    ];
  }

  async getNextId() {
    const res = await this.pool.query("SELECT nextval('car_id_seq')");
    return +res.rows[0].nextval;
  }

  async insert(car, owner_id) {
    const errors = this.validate(car);
    const car_id = await this.getNextId();
    await this.pool.query(
      this.getInsertString(),
      this.getValues(car, car_id, owner_id)
    );
  }
}

module.exports.Car = Car;
