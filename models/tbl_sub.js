import Sequelize from "sequelize";
export default (sequelize) => {
  return sequelize.define(
    "tbl_sub",
    {
      sub_seq: {
        autoIncrement: true,
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      sub_title: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false,
      },
      sub_summary: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "tbl_sub",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "sub_seq" }],
        },
      ],
    }
  );
};
