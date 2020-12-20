class Item {
  constructor(pool) {
    this.pool = pool;
    this.fieldNames = null;
  }

  getTableName() {
    return '';
  }

  getSeqTableName() {
    return '';
  }

  async getFieldNames() {
    if (this.fieldNames) return this.fieldNames;
    const res = await this.pool.query(
      `select table_name, column_name 
      from information_schema.columns 
      where table_name='${this.getTableName()}'`
    );
    //console.log("getFieldNames", res.rows);
    this.fieldNames = [];
    res.rows.forEach(row => {
      this.fieldNames.push(row.column_name);
    });
    return this.fieldNames;
  }

  async validate(item) {
    const errors = [];
    const fieldNames = await this.getFieldNames();
    fieldNames.forEach(name => {
      const funcName = 'validate_' + name;
      //console.log("funcName", funcName);

      try {
        if (this[funcName]) item[name] = this[funcName](item[name]);
      } catch (e) {
        //if (e instanceof ValidationError) {
        console.log('validate', e);

        errors.push(e.message);
        //}
      }
    });
    if (errors.length > 0) {
      let ex = new ValidationError('Validation errors');
      ex.setMessages(errors);
      throw ex;
    }
  }

  async getQueryInfo(item) {
    let names = [];
    let values = [];
    let template = [];
    let i = 1;
    const fieldNames = await this.getFieldNames();

    fieldNames.forEach(name => {
      if (item[name]) {
        names.push(name);
        values.push(item[name]);
        template.push(`$${i++}`);
      }
    });
    let qs = `insert into ${this.getTableName()} (${names.join(',')})
    values (${template.join(',')})`;
    //console.log('qs', qs);

    return { qs, values };
  }

  async getNextId() {
    const res = await this.pool.query(
      `SELECT nextval('${this.getSeqTableName()}')`
    );
    return +res.rows[0].nextval;
  }

  async insert(item, owner_id = null) {
    await this.validate(item);
    const item_id = await this.getNextId();
    item.id = item_id;
    if (owner_id) item.owner_id = owner_id;
    let queryInfo = await this.getQueryInfo(item);
    await this.pool.query(queryInfo.qs, queryInfo.values);
    return item_id;
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.messages = [];
  }

  setMessages(messages) {
    messages.forEach(m => {
      this.messages.push({ type: 'error', message: m });
    });
  }
}

module.exports.Item = Item;
module.exports.ValidationError = ValidationError;
