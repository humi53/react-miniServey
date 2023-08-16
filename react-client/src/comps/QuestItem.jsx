const QuestItem = (props) => {
  const { item } = props;

  const updateClickHandler = (e, qu_seq) => {};
  return (
    <tr>
      <td>{item.qu_innerNum}</td>
      <td>
        <input className="questCon"></input>
        {item.qu_question}
      </td>
      <td>
        <button className="updateBtn">수정</button>
      </td>
      <td>
        <button className="deleteBtn">삭제</button>
      </td>
    </tr>
  );
};
export default QuestItem;
