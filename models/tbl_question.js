import Sequelize from "sequelize";
export default (sequelize) => {
  return sequelize.define(
    "tbl_question",
    {
      qu_seq: {
        autoIncrement: true,
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      qu_innerNum: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
      },
      qu_subseq: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "tbl_sub",
          key: "sub_seq",
        },
      },
      qu_question: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "tbl_question",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "qu_seq" }],
        },
        {
          name: "qu_subseq",
          using: "BTREE",
          fields: [{ name: "qu_subseq" }],
        },
      ],
    }
  );
};
