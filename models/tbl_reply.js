import Sequelize from "sequelize";
export default (sequelize) => {
  return sequelize.define(
    "tbl_reply",
    {
      rep_seq: {
        autoIncrement: true,
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      rep_con: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      rep_memseq: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "tbl_member",
          key: "mem_seq",
        },
      },
      rep_quseq: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "tbl_question",
          key: "qu_seq",
        },
      },
      rep_subseq: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "tbl_reply",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "rep_seq" }],
        },
        {
          name: "rep_memseq",
          using: "BTREE",
          fields: [{ name: "rep_memseq" }],
        },
        {
          name: "rep_quseq",
          using: "BTREE",
          fields: [{ name: "rep_quseq" }],
        },
      ],
    }
  );
};
