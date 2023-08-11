import _tbl_sub from "./tbl_sub.js";
import _tbl_member from "./tbl_member.js";
import _tbl_question from "./tbl_question.js";
import _tbl_reply from "./tbl_reply.js";

const initModels = (sequelize) => {
  // 모델 이름 설정
  const tbl_sub = _tbl_sub(sequelize);
  const tbl_member = _tbl_member(sequelize);
  const tbl_question = _tbl_question(sequelize);
  const tbl_reply = _tbl_reply(sequelize);

  // 다른 곳에서 model 을 사용할수 있도록 export 준비
  return {
    tbl_sub,
    tbl_member,
    tbl_question,
    tbl_reply,
  };
};

export default initModels;
