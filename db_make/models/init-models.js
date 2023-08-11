var DataTypes = require("sequelize").DataTypes;
var _tbl_member = require("./tbl_member");
var _tbl_question = require("./tbl_question");
var _tbl_reply = require("./tbl_reply");
var _tbl_sub = require("./tbl_sub");

function initModels(sequelize) {
  var tbl_member = _tbl_member(sequelize, DataTypes);
  var tbl_question = _tbl_question(sequelize, DataTypes);
  var tbl_reply = _tbl_reply(sequelize, DataTypes);
  var tbl_sub = _tbl_sub(sequelize, DataTypes);

  tbl_reply.belongsTo(tbl_member, { as: "rep_memseq_tbl_member", foreignKey: "rep_memseq"});
  tbl_member.hasMany(tbl_reply, { as: "tbl_replies", foreignKey: "rep_memseq"});
  tbl_reply.belongsTo(tbl_question, { as: "rep_quseq_tbl_question", foreignKey: "rep_quseq"});
  tbl_question.hasMany(tbl_reply, { as: "tbl_replies", foreignKey: "rep_quseq"});
  tbl_question.belongsTo(tbl_sub, { as: "qu_subseq_tbl_sub", foreignKey: "qu_subseq"});
  tbl_sub.hasMany(tbl_question, { as: "tbl_questions", foreignKey: "qu_subseq"});

  return {
    tbl_member,
    tbl_question,
    tbl_reply,
    tbl_sub,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
