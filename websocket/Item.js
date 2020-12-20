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

  getFieldNames() {
    return [];
  }

  validate(item) {
    const errors = [];
    const fieldNames = this.getFieldNames();
    fieldNames.forEach((name) => {
      const funcName = "validate_" + name;
      //console.log("funcName", funcName);

      try {
        if (this[funcName]) item[name] = this[funcName](item[name]);
      } catch (e) {
        if (e instanceof ValidationError) {
          console.log("validate", e);

          errors.push(e.message);
        }
      }
    });
    if (errors.length > 0)
      throw new ValidationError("Validation errors").setMessages(errors);
  }

  //   getSkippedNames() {
  //     return [];
  //   }

  getQueryInfo(item) {
    let names = [];
    let values = [];
    let template = [];
    let i = 1;
    const fieldNames = this.getFieldNames();
    Object.entries(item).forEach(([key, value]) => {
      if (fieldNames.includes(key)) {
        names.push(key);
        values.push(value);
        template.push(`$${i++}`);
      }
    });
    let qs = `insert into ${this.getTableName()} (${names.join(",")})
    values (${template.join(",")})`;
    //console.log("qs", qs);

    return { qs, values };
  }

  async getNextId() {
    const res = await this.pool.query(
      `SELECT nextval('${this.getSeqTableName()}')`
    );
    return +res.rows[0].nextval;
  }

  async insert(item, owner_id = null) {
    this.validate(item);
    const item_id = await this.getNextId();
    item.id = item_id;
    if (owner_id) item.owner_id = owner_id;
    let queryInfo = this.getQueryInfo(item);
    await this.pool.query(queryInfo.qs, queryInfo.values);
    return item_id;
  }
}

class ValidationError {
  constructor(message) {
    this.message = message;
    this.messages = [];
  }

  setMessages(messages) {
    this.messages = messages;
  }
}

module.exports.Item = Item;
module.exports.ValidationError = ValidationError;
