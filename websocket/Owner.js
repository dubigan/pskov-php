class Owner {
  constructor(pool) {
    this.pool = pool;
  }

  getTableName() {
    return "owner";
  }

  validate(owner) {
    const errors = [];
    return errors;
  }

  getInsertString() {
    const qs = `INSERT INTO owner (id, name, patronymic, last_name, age, gender, comment) 
    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    return qs;
  }

  getValues(owner, owner_id) {
    return [
      owner_id,
      owner.name,
      owner.patronymic,
      owner.last_name,
      owner.age,
      owner.gender,
      owner.comment,
    ];
  }

  async getNextId() {
    const res = await this.pool.query("SELECT nextval('owner_id_seq')");
    return +res.rows[0].nextval;
  }

  async insert(owner) {
    const errors = this.validate(owner);
    const owner_id = await this.getNextId();
    await this.pool.query(
      this.getInsertString(),
      this.getValues(owner, owner_id)
    );
    return owner_id;
  }
}

module.exports.Owner = Owner;
