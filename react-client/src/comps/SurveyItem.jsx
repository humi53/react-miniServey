const SurveyItem = (props) => {
  const { item, itemClickHandler, itemDeleteClickHandler } = props;

  const onClickHandler = (e, sub_seq) => {
    itemClickHandler(sub_seq);
  };
  const deleteClickHandler = (e, sub_seq) => {
    if (window.confirm("[" + item.sub_title + "]를 정말 삭제할까요?")) {
      itemDeleteClickHandler(sub_seq);
    }
  };
  return (
    <tr>
      <td>{item.sub_seq}</td>
      <td onClick={(e) => onClickHandler(e, item.sub_seq)}>{item.sub_title}</td>
      <td>
        <button onClick={(e) => deleteClickHandler(e, item.sub_seq)}>
          삭제
        </button>
      </td>
    </tr>
  );
};
export default SurveyItem;
