import express from "express";
const router = express.Router();

import DB from "../models/index.js";
const { tbl_sub: SUB, tbl_question: QUESTION } = DB.models;

/* GET home page. */
router.get("/", async (req, res, next) => {
  res.render("index", { title: "질문 목록 API 페이지" });
});

router.get("/list/:id", async (req, res) => {
  const qu_subseq = req.params.id;
  const questList = await SUB.findAll({
    include: {
      model: QUESTION,
      as: "F_QUESTION",
      where: {
        qu_subseq: qu_subseq,
      },
      required: false,
    },
    where: {
      sub_seq: qu_subseq,
    },
    order: [[{ model: QUESTION, as: "F_QUESTION" }, "qu_seq", "DESC"]],
  });
  return res.json(questList);
});

router.post("/insert", async (req, res) => {
  const body = req.body;
  console.log(body);
  const result = await QUESTION.create(body);
  res.send("OK");
});

export default router;
