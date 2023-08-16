import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { questionList, questionInsert } from "../modules/FetchModule";
import QuestItem from "./QuestItem";
const QuestList = () => {
  const { id } = useParams();
  const [surTitle, setSurTitle] = useState({
    sub_seq: 0,
    sub_title: "",
    sub_summary: "",
  });
  const [questList, setQuestList] = useState([]);
  const questModel = {
    qu_innerNum: 0,
    qu_subseq: 0,
    qu_question: "",
  };
  const [questItem, setQuestItem] = useState({ ...questModel });

  const fetchData = async () => {
    try {
      const data = await questionList(id);
      setSurTitle({
        ...surTitle,
        sub_seq: data[0].sub_seq,
        sub_title: data[0].sub_title,
        sub_summary: data[0].sub_summary,
      });
      setQuestList([...data[0].F_QUESTION]);
    } catch (error) {
      console.error("Error");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const questItemList = questList.map((item) => {
    return <QuestItem item={item} key={item.qu_seq} />;
  });

  const insertButtonClickHandler = async () => {
    const jsonData = JSON.stringify(questItem);
    await questionInsert(jsonData);
    setQuestItem({ ...questModel });
    fetchData();
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(surTitle.sub_seq);
    setQuestItem({
      ...questItem,
      [name]: value,
      qu_subseq: surTitle.sub_seq,
      qu_innerNum: Number(questList.length) + 1,
    });
  };
  return (
    <>
      <div>
        <input
          name="qu_question"
          placeholder="질문 내용을 입력하세요."
          value={questItem.qu_question}
          onChange={inputChangeHandler}
        ></input>
        <button onClick={insertButtonClickHandler}>질문추가</button>
      </div>
      <div>{surTitle.sub_title}</div>
      <div className="content-body">
        <table className="survey-table">
          <thead>
            <tr>
              <th>일련번호</th>
              <th>질문내용</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>{questItemList}</tbody>
        </table>
      </div>
    </>
  );
};
export default QuestList;
