const { Item, ValidationError } = require('./Item');
class Owner extends Item {
  constructor(pool) {
    super(pool);
  }

  getTableName() {
    return 'owner';
  }

  getSeqTableName() {
    return 'owner_id_seq';
  }

  validate_name(data) {
    //console.log("validate_name", data);
    if (!data) throw new ValidationError("field Name can't be empty");
    return data;
  }
  validate_last_name(data) {
    //console.log("validate_name", data);
    if (!data) throw new ValidationError("field 'Last Name' can't be empty");
    return data;
  }
  validate_age(data) {
    //console.log("validate_name", data);
    data = +data;
    if (isNaN(data))
      throw new ValidationError(
        "field 'Age' can't be empty and must contains integer value"
      );
    //console.log('age', data);
    if (data < 18 || data > 120)
      throw new ValidationError("field 'Age' must be between 18 and 120");
    return data;
  }
  validate_gender(data) {
    if (!data) throw new ValidationError("field 'Gender' can't be empty");
    if (data !== 'f' && data !== 'm')
      throw new ValidationError("field Gender must be 'm' or 'f'");
    return data;
  }
}

module.exports.Owner = Owner;
