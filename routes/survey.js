import express from "express";
const router = express.Router();

import DB from "../models/index.js";
const { tbl_sub: SUB } = DB.models;

/* GET home page. */
router.get("/", async (req, res, next) => {
  res.render("index", { title: "설문목록 API 페이지" });
});

router.post("/title/insert", async (req, res) => {
  const body = req.body;
  const result = await SUB.create(body);
  res.send("OK");
});

router.get("/title/list", async (req, res) => {
  const subList = await SUB.findAll({
    order: [["sub_seq", "DESC"]],
  });

  res.json(subList);
});

router.post("/title/delete", async (req, res) => {
  const body = req.body;
  const subSeqToDelete = body.sub_seq;
  console.log(" >>>> ", subSeqToDelete);
  // 참조키 연결된 테이블도 삭제 해줘야됨
  const subToDelete = await SUB.findOne({
    where: {
      sub_seq: subSeqToDelete,
    },
  });

  await subToDelete.destroy();
  res.send("OK");
});

export default router;
