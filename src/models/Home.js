const Sequelize = require("sequelize");
const { Model } = Sequelize;

module.exports = class Home extends Model {
  static init(sequelize) {
    super.init(
      {
        example1: {
          type: Sequelize.STRING,
        },
        example2: {
          type: Sequelize.TEXT,
        },
      },
      { sequelize }
    );

    return this;
  }
};
