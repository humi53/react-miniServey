import { useState, useEffect } from "react";
import "../css/SurveyList.css";
import SurveyViewItem from "./SurveyViewItem";
import { surveyTitleList } from "../modules/FetchModule";

const SurveyView = () => {
  const [surveyList, setSurveyList] = useState([]);

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

  const itemClickHandler = (sub_seq) => {
    window.location.href = `/survey/view/${sub_seq}`;
  };

  const surveyViewItemList = surveyList.map((item) => {
    return (
      <SurveyViewItem
        item={item}
        key={item.sub_seq}
        itemClickHandler={itemClickHandler}
      />
    );
  });
  return (
    <>
      <h1>설문목록</h1>
      <div className="content-body">
        <table className="survey-table">
          <thead>
            <tr>
              <th>일련번호</th>
              <th>제목</th>
            </tr>
          </thead>
          <tbody>{surveyViewItemList}</tbody>
        </table>
      </div>
    </>
  );
};
export default SurveyView;
