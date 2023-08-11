import Sequelize from "sequelize";
export default (sequelize) => {
  return sequelize.define(
    "tbl_member",
    {
      mem_seq: {
        autoIncrement: true,
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      mem_name: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false,
      },
      mem_email: {
        type: Sequelize.DataTypes.STRING(40),
        allowNull: true,
      },
      mem_tel: {
        type: Sequelize.DataTypes.STRING(15),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "tbl_member",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "mem_seq" }],
        },
      ],
    }
  );
};
