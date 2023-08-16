import { useState, useEffect } from "react";
import "../css/SurveyList.css";
import SurveyItem from "./SurveyItem";
import {
  surveyTitleList,
  surveyTitleInsrt,
  surveyTitleDelete,
} from "../modules/FetchModule";

const SurveyList = () => {
  const [surveyList, setSurveyList] = useState([]);
  const [survey, setSurvey] = useState({
    sub_title: "",
    sub_summary: "",
  });

  useEffect(() => {
    // console.log(surveyTitleList() + "");
    // setSurveyList(surveyTitleList());
    const fetchData = async () => {
      try {
        const data = await surveyTitleList();
        setSurveyList(data);
      } catch (error) {
        console.error("Error");
      }
    };
    fetchData();
  }, []);

  const insertButtonClickHandler = async () => {
    // const formData = new FormData();
    // formData.append("survey", survey);
    const jsonData = JSON.stringify(survey);
    await surveyTitleInsrt(jsonData);
    setSurvey({ sub_title: "", sub_summary: "" });
    const data = await surveyTitleList();
    setSurveyList(data);
  };
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setSurvey({ ...survey, [name]: value });
  };

  const itemClickHandler = (sub_seq) => {
    window.location.href = `/manage/detail/${sub_seq}`;
  };
  const itemDeleteClickHandler = async (sub_seq) => {
    const jsonData = JSON.stringify({ sub_seq: sub_seq });
    const result = await surveyTitleDelete(jsonData);
    if (result) {
      const data = await surveyTitleList();
      setSurveyList(data);
    }
  };

  const surveyItemList = surveyList.map((item) => {
    return (
      <SurveyItem
        item={item}
        key={item.sub_seq}
        itemClickHandler={itemClickHandler}
        itemDeleteClickHandler={itemDeleteClickHandler}
      />
    );
  });
  return (
    <>
      <h1>설문목록 관리페이지</h1>
      <div>
        <input
          name="sub_title"
          placeholder="설문주제를 추가합니다"
          value={survey.sub_title}
          onChange={inputChangeHandler}
        ></input>
        <button onClick={insertButtonClickHandler}>추가</button>
      </div>
      <div className="content-body">
        <table className="survey-table">
          <thead>
            <tr>
              <th>일련번호</th>
              <th>제목</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>{surveyItemList}</tbody>
        </table>
      </div>
    </>
  );
};
export default SurveyList;
