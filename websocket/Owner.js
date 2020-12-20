const { Item } = require("./Item");
class Owner extends Item {
  constructor(pool) {
    super(pool);
  }

  getTableName() {
    return "owner";
  }

  getSeqTableName() {
    return "owner_id_seq";
  }

  validate(item) {
    const errors = [];
    return errors;
  }

  getSkippedNames() {
    return ["cars"];
  }
}

module.exports.Owner = Owner;
