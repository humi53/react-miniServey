const SurveyItem = (props) => {
  const { item, itemClickHandler } = props;

  const onClickHandler = (e, sub_seq) => {
    itemClickHandler(sub_seq);
  };
  return (
    <tr>
      <td>{item.sub_seq}</td>
      <td onClick={(e) => onClickHandler(e, item.sub_seq)}>{item.sub_title}</td>
    </tr>
  );
};
export default SurveyItem;
