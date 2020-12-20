class Item {
  constructor(pool) {
    this.pool = pool;
  }

  getTableName() {
    return "";
  }

  getSeqTableName() {
    return "";
  }

  validate(item) {
    const errors = [];
    return errors;
  }

  getSkippedNames() {
    return [];
  }

  getQueryInfo(item) {
    let names = [];
    let values = [];
    let template = [];
    let i = 1;
    const skippedNames = this.getSkippedNames();
    Object.entries(item).forEach(([key, value]) => {
      if (!skippedNames.includes(key)) {
        names.push(key);
        values.push(value);
        template.push(`$${i++}`);
      }
    });
    let qs = `insert into ${this.getTableName()} (${names.join(",")})
    values (${template.join(",")})`;
    console.log("qs", qs);

    return { qs, values };
  }

  async getNextId() {
    const res = await this.pool.query(
      `SELECT nextval('${this.getSeqTableName()}')`
    );
    return +res.rows[0].nextval;
  }

  async insert(item, owner_id = null) {
    const errors = this.validate(item);
    const item_id = await this.getNextId();
    item.id = item_id;
    if (owner_id) item.owner_id = owner_id;
    let queryInfo = this.getQueryInfo(item);
    await this.pool.query(queryInfo.qs, queryInfo.values);
    return item_id;
  }
}

module.exports.Item = Item;
