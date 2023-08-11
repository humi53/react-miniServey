import { useState, useRef } from "react";
import "../css/Manage.css";
import ManageItem from "./ManageItem";

const Manage = () => {
  const [serveyList, setServeyList] = useState([
    { sub_seq: 1, sub_title: "첫 번째 아이템" },
    { sub_seq: 2, sub_title: "두 번째 아이템" },
  ]);

  const selectItemHandler = (sub_seq) => {
    window.location.href = `/manage/detail/${sub_seq}`;
  };

  const ManageitemList = serveyList.map((item) => {
    return (
      <ManageItem
        item={item}
        key={item.sub_seq}
        selectItemHandler={selectItemHandler}
      />
    );
  });

  return (
    <>
      <h1>설문목록 관리페이지</h1>
      <table>
        <thead>
          <tr>
            <th>일련번호</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>{ManageitemList}</tbody>
      </table>
    </>
  );
};
export default Manage;
